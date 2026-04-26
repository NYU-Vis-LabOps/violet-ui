import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const registryRoot = path.join(repoRoot, "public", "r")
const indexPath = path.join(registryRoot, "index.json")

const folderByType = new Map([
  ["registry:ui", "ui"],
  ["registry:style", "styles"],
  ["registry:lib", "lib"],
  ["registry:hook", "hook"],
])

const errors = []

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"))
  } catch (error) {
    errors.push(`${path.relative(repoRoot, filePath)} is not valid JSON: ${error.message}`)
    return undefined
  }
}

function assert(condition, message) {
  if (!condition) errors.push(message)
}

const index = await readJson(indexPath)

assert(index?.name === "violet-ui", "public/r/index.json must be named violet-ui")
assert(Array.isArray(index?.items), "public/r/index.json must contain an items array")

const indexItems = Array.isArray(index?.items) ? index.items : []
const seenNames = new Set()

for (const item of indexItems) {
  const itemLabel = item?.name ?? "<missing name>"
  const folder = folderByType.get(item?.type)

  assert(typeof item.name === "string" && item.name.length > 0, "registry item is missing a name")
  assert(typeof item.description === "string" && item.description.length > 0, `${itemLabel} is missing a description`)
  assert(folder, `${itemLabel} has unsupported type ${item?.type}`)
  assert(!seenNames.has(item.name), `${itemLabel} appears more than once in index.json`)
  seenNames.add(item.name)

  if (!folder || !item.name) continue

  const itemPath = path.join(registryRoot, folder, `${item.name}.json`)
  const itemJson = await readJson(itemPath)
  if (!itemJson) continue

  assert(itemJson.name === item.name, `${itemLabel} name mismatch between index and item JSON`)
  assert(itemJson.type === item.type, `${itemLabel} type mismatch between index and item JSON`)
  assert(typeof itemJson.title === "string" && itemJson.title.length > 0, `${itemLabel} is missing a title`)
  assert(typeof itemJson.description === "string" && itemJson.description.length > 0, `${itemLabel} is missing an item description`)
  assert(Array.isArray(itemJson.dependencies), `${itemLabel} dependencies must be an array`)
  assert(Array.isArray(itemJson.registryDependencies), `${itemLabel} registryDependencies must be an array`)
  assert(Array.isArray(itemJson.files) && itemJson.files.length > 0, `${itemLabel} must include at least one file`)

  for (const file of itemJson.files ?? []) {
    assert(typeof file.path === "string" && file.path.length > 0, `${itemLabel} has a file without a path`)
    assert(typeof file.type === "string" && file.type.length > 0, `${itemLabel}:${file.path ?? "<missing>"} has no file type`)
    assert(typeof file.content === "string" && file.content.length > 0, `${itemLabel}:${file.path ?? "<missing>"} has no content`)
  }
}

for (const [type, folder] of folderByType) {
  const folderPath = path.join(registryRoot, folder)
  let files = []
  try {
    files = await readdir(folderPath)
  } catch (error) {
    errors.push(`${path.relative(repoRoot, folderPath)} could not be read: ${error.message}`)
    continue
  }

  for (const file of files.filter((name) => name.endsWith(".json"))) {
    const name = file.replace(/\.json$/, "")
    assert(
      indexItems.some((item) => item.name === name && item.type === type),
      `${path.relative(repoRoot, path.join(folderPath, file))} is not listed in index.json`,
    )
  }
}

if (errors.length > 0) {
  console.error("Registry validation failed:")
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Registry validation passed for ${indexItems.length} items.`)
