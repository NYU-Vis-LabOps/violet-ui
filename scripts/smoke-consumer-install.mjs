import { cp, mkdir, mkdtemp, readFile, readdir, writeFile } from "node:fs/promises"
import { spawnSync } from "node:child_process"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const registryRoot = path.join(repoRoot, "public", "r")
const smokeRoot = await mkdtemp(path.join(os.tmpdir(), "violet-ui-consumer-"))
const localRegistryRoot = path.join(smokeRoot, "local-registry")

function run(command, args, cwd = smokeRoot) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function registryPath(filePath) {
  return path.relative(smokeRoot, filePath).split(path.sep).join("/")
}

async function writeText(relativePath, content) {
  const filePath = path.join(smokeRoot, relativePath)
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, content)
}

async function rewriteRegistryDependencies(dir) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await rewriteRegistryDependencies(entryPath)
      continue
    }
    if (!entry.name.endsWith(".json")) continue

    const item = JSON.parse(await readFile(entryPath, "utf8"))
    if (Array.isArray(item.registryDependencies)) {
      item.registryDependencies = item.registryDependencies.map((dependency) => {
        const prefix = "https://nyu-vis-labops.github.io/violet-ui/r/"
        if (typeof dependency !== "string" || !dependency.startsWith(prefix)) {
          return dependency
        }
        return registryPath(path.join(localRegistryRoot, dependency.slice(prefix.length)))
      })
    }

    await writeFile(entryPath, `${JSON.stringify(item, null, 2)}\n`)
  }
}

async function listJsonFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await listJsonFiles(entryPath))
    } else if (entry.name.endsWith(".json")) {
      files.push(entryPath)
    }
  }

  return files
}

await writeText("package.json", JSON.stringify({
  name: "violet-ui-consumer-smoke",
  version: "0.0.0",
  private: true,
  scripts: {
    build: "next build",
  },
  dependencies: {
    "@tailwindcss/postcss": "^4",
    next: "16.2.1",
    react: "19.2.4",
    "react-dom": "19.2.4",
    shadcn: "^4.1.1",
    tailwindcss: "^4",
    "tw-animate-css": "^1.4.0",
  },
  devDependencies: {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    typescript: "^5",
  },
}, null, 2))

await writeText("components.json", JSON.stringify({
  $schema: "https://ui.shadcn.com/schema.json",
  style: "new-york",
  rsc: true,
  tsx: true,
  tailwind: {
    config: "",
    css: "src/app/globals.css",
    baseColor: "neutral",
    cssVariables: true,
    prefix: "",
  },
  iconLibrary: "lucide",
  rtl: false,
  aliases: {
    components: "@/components",
    utils: "@/lib/utils",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks",
  },
  registries: {},
}, null, 2))

await writeText("tsconfig.json", JSON.stringify({
  compilerOptions: {
    target: "ES2017",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop: true,
    module: "esnext",
    moduleResolution: "bundler",
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: "react-jsx",
    incremental: true,
    plugins: [{ name: "next" }],
    paths: {
      "@/*": ["./src/*"],
    },
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"],
  exclude: ["node_modules"],
}, null, 2))

await writeText("next.config.ts", "import type { NextConfig } from \"next\"\n\nconst nextConfig: NextConfig = {}\n\nexport default nextConfig\n")
await writeText("postcss.config.mjs", "export default { plugins: { \"@tailwindcss/postcss\": {} } }\n")
await writeText("src/app/globals.css", "@import \"tailwindcss\";\n@import \"tw-animate-css\";\n")
await writeText("src/app/layout.tsx", "import type { ReactNode } from \"react\"\nimport \"./globals.css\"\n\nexport default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {\n  return <html lang=\"en\"><body>{children}</body></html>\n}\n")
await writeText("src/app/page.tsx", "export default function Page() {\n  return <main>violet-ui consumer smoke</main>\n}\n")

console.log(`Created consumer smoke app at ${smokeRoot}`)

await cp(registryRoot, localRegistryRoot, { recursive: true })
await rewriteRegistryDependencies(localRegistryRoot)

run("pnpm", ["install", "--no-frozen-lockfile"])

const registryFiles = [
  path.join(localRegistryRoot, "styles", "violet-theme.json"),
  path.join(localRegistryRoot, "lib", "violet-utils.json"),
  path.join(localRegistryRoot, "hook", "use-esc-close.json"),
  ...(await listJsonFiles(path.join(localRegistryRoot, "ui"))).sort(),
]

run("pnpm", [
  "exec",
  "shadcn",
  "add",
  "--overwrite",
  "--yes",
  ...registryFiles.map(registryPath),
])

const installedComponents = await readdir(path.join(smokeRoot, "src", "components", "ui"))
const componentImports = installedComponents
  .filter((name) => name.endsWith(".tsx"))
  .sort()
  .map((name, index) => {
    const importPath = `@/components/ui/${name.replace(/\.tsx$/, "")}`
    return `import * as Component${index} from "${importPath}"`
  })

const hookExists = await readFile(path.join(smokeRoot, "src", "hooks", "use-esc-close.ts"), "utf8").then(() => true, () => false)
const hookImport = hookExists ? "import * as UseEscClose from \"@/hooks/use-esc-close\"" : ""
const smokeModules = [
  ...componentImports.map((_, index) => `Component${index}`),
  ...(hookExists ? ["UseEscClose"] : []),
]

await writeText("src/app/page.tsx", `"use client"\n\n${componentImports.join("\n")}\n${hookImport}\n\nconst smokeModules = [${smokeModules.join(", ")}]\n\nexport default function Page() {\n  return <main>Installed {smokeModules.length} violet-ui modules.</main>\n}\n`)

console.log(`Installed ${installedComponents.length} ui component files.`)

run("pnpm", ["build"])
