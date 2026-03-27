import * as fs from "fs"
import * as path from "path"

const ROOT = path.resolve(__dirname, "..")
const PUBLIC_R = path.join(ROOT, "public", "r")

// Known npm package prefixes for dependency detection
const NPM_IMPORT_PATTERNS = [
  /^@radix-ui\//,
  /^class-variance-authority/,
  /^clsx/,
  /^tailwind-merge/,
  /^react/,
  /^lucide-react/,
]

interface RegistryFile {
  path: string
  type: string
  content: string
}

interface RegistryItem {
  $schema: string
  name: string
  type: string
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  files: RegistryFile[]
  cssVars?: Record<string, Record<string, string>>
  tailwind?: { config: Record<string, unknown> }
}

interface IndexItem {
  name: string
  type: string
  description: string
}

// Component metadata
const COMPONENT_META: Record<string, { title: string; description: string; registryDeps?: string[] }> = {
  "violet-button": {
    title: "Violet Button",
    description: "NYU branded button with 6 variants and 5 sizes",
    registryDeps: ["violet-theme"],
  },
  "violet-card": {
    title: "Violet Card",
    description: "NYU card component with bordered, elevated, and stat variants",
    registryDeps: ["violet-theme"],
  },
  "violet-badge": {
    title: "Violet Badge",
    description: "NYU badge component with 7 semantic variants",
    registryDeps: ["violet-theme"],
  },
  "violet-status-badge": {
    title: "Violet Status Badge",
    description: "NYU status badge for task/project status display",
    registryDeps: ["violet-theme"],
  },
  "violet-input": {
    title: "Violet Input",
    description: "NYU form input with focus, error, and disabled states",
    registryDeps: ["violet-theme"],
  },
  "violet-modal": {
    title: "Violet Modal",
    description: "NYU modal dialog with 5 size options",
    registryDeps: ["violet-theme"],
  },
  "violet-navbar": {
    title: "Violet Navbar",
    description: "NYU top navigation bar with responsive hamburger menu",
    registryDeps: ["violet-theme"],
  },
  "violet-table": {
    title: "Violet Table",
    description: "NYU data table with hover highlighting and optional striped rows",
    registryDeps: ["violet-theme"],
  },
  "violet-select": {
    title: "Violet Select",
    description: "NYU select dropdown with purple focus ring",
    registryDeps: ["violet-theme"],
  },
  "violet-accordion": {
    title: "Violet Accordion",
    description: "NYU accordion component with purple highlights",
    registryDeps: ["violet-theme"],
  },
}

function extractImports(content: string): string[] {
  const deps: string[] = []
  const importRegex = /from\s+["']([^"']+)["']/g
  let match: RegExpExecArray | null
  while ((match = importRegex.exec(content)) !== null) {
    const mod = match[1]
    // Only include npm packages (not relative imports)
    if (!mod.startsWith(".") && !mod.startsWith("@/")) {
      // Get the package name (handle scoped packages)
      const pkgName = mod.startsWith("@")
        ? mod.split("/").slice(0, 2).join("/")
        : mod.split("/")[0]
      if (!deps.includes(pkgName) && pkgName !== "react" && pkgName !== "react-dom") {
        deps.push(pkgName)
      }
    }
  }
  return deps
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function buildTheme(): RegistryItem {
  const cssPath = path.join(ROOT, "styles", "violet-theme.css")
  const cssContent = fs.readFileSync(cssPath, "utf-8")

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "violet-theme",
    type: "registry:style",
    title: "Violet Theme",
    description: "NYU branded theme with purple color palette, Inter font, and CSS variables",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "styles/violet-theme.css",
        type: "registry:style",
        content: cssContent,
      },
    ],
    cssVars: {
      light: {
        primary: "275 90% 29%",
        "primary-foreground": "0 0% 100%",
        secondary: "270 45% 52%",
        "secondary-foreground": "0 0% 100%",
        accent: "280 30% 64%",
        "accent-foreground": "0 0% 100%",
        background: "220 14% 96%",
        foreground: "0 0% 20%",
        card: "0 0% 100%",
        "card-foreground": "0 0% 20%",
        border: "220 13% 91%",
        muted: "220 14% 96%",
        "muted-foreground": "215 14% 46%",
        destructive: "354 70% 54%",
        "destructive-foreground": "0 0% 100%",
        success: "134 61% 41%",
        "success-foreground": "0 0% 100%",
        warning: "45 100% 51%",
        "warning-foreground": "0 0% 20%",
        info: "211 100% 50%",
        "info-foreground": "0 0% 100%",
        ring: "275 90% 29%",
        radius: "0.375rem",
      },
      dark: {
        primary: "275 60% 65%",
        "primary-foreground": "270 90% 10%",
        secondary: "270 30% 40%",
        "secondary-foreground": "0 0% 100%",
        accent: "280 25% 50%",
        "accent-foreground": "0 0% 100%",
        background: "270 10% 8%",
        foreground: "0 0% 95%",
        card: "270 10% 12%",
        "card-foreground": "0 0% 95%",
        border: "270 10% 20%",
        muted: "270 10% 15%",
        "muted-foreground": "270 5% 60%",
        destructive: "354 70% 54%",
        "destructive-foreground": "0 0% 100%",
        success: "134 61% 41%",
        "success-foreground": "0 0% 100%",
        warning: "45 100% 51%",
        "warning-foreground": "0 0% 20%",
        info: "211 100% 60%",
        "info-foreground": "0 0% 100%",
        ring: "275 60% 65%",
        radius: "0.375rem",
      },
    },
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              "nyu-purple": "#57068c",
              "nyu-purple-hover": "#702b9d",
              "nyu-purple-light": "#ab82c5",
              "nyu-purple-lighter": "#eee6f3",
              "nyu-purple-dark": "#2d0051",
            },
            fontFamily: {
              sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
          },
        },
      },
    },
  }
}

function buildUtils(): RegistryItem {
  const utilsPath = path.join(ROOT, "src", "lib", "utils.ts")
  const content = fs.readFileSync(utilsPath, "utf-8")

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "violet-utils",
    type: "registry:lib",
    title: "Violet Utils",
    description: "Utility functions (cn) for Violet UI",
    dependencies: extractImports(content),
    registryDependencies: [],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
        content,
      },
    ],
  }
}

function buildComponent(filename: string): RegistryItem {
  const name = filename.replace(".tsx", "")
  const filePath = path.join(ROOT, "src", "components", filename)
  const content = fs.readFileSync(filePath, "utf-8")
  const meta = COMPONENT_META[name] || {
    title: name,
    description: `${name} component`,
    registryDeps: ["violet-theme"],
  }

  const deps = extractImports(content)
  // If component imports from @/lib/utils, add violet-utils as registry dep
  const registryDeps = [...(meta.registryDeps || [])]
  if (content.includes("@/lib/utils")) {
    registryDeps.push("violet-utils")
  }

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:ui",
    title: meta.title,
    description: meta.description,
    dependencies: deps,
    registryDependencies: registryDeps,
    files: [
      {
        path: `ui/${filename}`,
        type: "registry:ui",
        content,
      },
    ],
  }
}

function buildHook(filename: string): RegistryItem {
  const name = filename.replace(".ts", "")
  const filePath = path.join(ROOT, "src", "hooks", filename)
  const content = fs.readFileSync(filePath, "utf-8")

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:hook",
    title: name,
    description: `${name} hook`,
    dependencies: extractImports(content),
    registryDependencies: [],
    files: [
      {
        path: `hooks/${filename}`,
        type: "registry:hook",
        content,
      },
    ],
  }
}

function main() {
  console.log("Building violet-ui registry...\n")

  // Clean output
  if (fs.existsSync(PUBLIC_R)) {
    fs.rmSync(PUBLIC_R, { recursive: true })
  }

  // Ensure output dirs
  ensureDir(path.join(PUBLIC_R, "styles"))
  ensureDir(path.join(PUBLIC_R, "ui"))
  ensureDir(path.join(PUBLIC_R, "lib"))
  ensureDir(path.join(PUBLIC_R, "hook"))

  const indexItems: IndexItem[] = []

  // 1. Build theme
  const theme = buildTheme()
  fs.writeFileSync(
    path.join(PUBLIC_R, "styles", "violet-theme.json"),
    JSON.stringify(theme, null, 2)
  )
  indexItems.push({ name: theme.name, type: theme.type, description: theme.description })
  console.log(`  ✓ styles/violet-theme.json`)

  // 2. Build utils
  const utils = buildUtils()
  fs.writeFileSync(
    path.join(PUBLIC_R, "lib", "violet-utils.json"),
    JSON.stringify(utils, null, 2)
  )
  indexItems.push({ name: utils.name, type: utils.type, description: utils.description })
  console.log(`  ✓ lib/violet-utils.json`)

  // 3. Build components
  const componentsDir = path.join(ROOT, "src", "components")
  if (fs.existsSync(componentsDir)) {
    const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith(".tsx"))
    for (const file of files) {
      const item = buildComponent(file)
      fs.writeFileSync(
        path.join(PUBLIC_R, "ui", `${item.name}.json`),
        JSON.stringify(item, null, 2)
      )
      indexItems.push({ name: item.name, type: item.type, description: item.description })
      console.log(`  ✓ ui/${item.name}.json`)
    }
  }

  // 4. Build hooks
  const hooksDir = path.join(ROOT, "src", "hooks")
  if (fs.existsSync(hooksDir)) {
    const files = fs.readdirSync(hooksDir).filter((f) => f.endsWith(".ts"))
    for (const file of files) {
      const item = buildHook(file)
      fs.writeFileSync(
        path.join(PUBLIC_R, "hook", `${item.name}.json`),
        JSON.stringify(item, null, 2)
      )
      indexItems.push({ name: item.name, type: item.type, description: item.description })
      console.log(`  ✓ hook/${item.name}.json`)
    }
  }

  // 5. Write index
  const index = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "violet-ui",
    homepage: "https://github.com/NYU-Vis-LabOps/violet-ui",
    items: indexItems,
  }
  fs.writeFileSync(path.join(PUBLIC_R, "index.json"), JSON.stringify(index, null, 2))
  console.log(`  ✓ index.json`)

  console.log(`\nDone! Generated ${indexItems.length} registry entries.`)
}

main()
