# shadcn CLI v4 Compatibility Guide

## How shadcn CLI Transforms Components

shadcn CLI v4 (`npx shadcn@latest add`) runs codemods on installed files. The behavior depends on the project's `style` setting in `components.json`:

| Style | Base library | CLI behavior on install |
|-------|-------------|------------------------|
| `new-york` / `default` | Radix UI | No transformation — Radix code is kept as-is |
| `base-nova` | Base UI | Converts Radix imports to `@base-ui/react`, `asChild` to `render`, restructures components |

The style is determined during `shadcn init`:

```bash
# Radix-based project (no codemod)
npx shadcn@latest init -b radix

# Base UI project (codemod will run)
npx shadcn@latest init -b base
```

## Violet UI's Approach

Violet UI components are authored with **Radix UI** primitives exclusively. This keeps the dependency tree clean and avoids mixing two component libraries.

- For `base-nova` consumers, the shadcn CLI automatically converts Radix code to Base UI equivalents (imports, `asChild` → `render`, `Content` → `Positioner` + `Popup`, etc.)
- For Radix consumers (`new-york` / `default`), code is installed unchanged

### Key constraint: avoid `asChild` in JSX

Even though we use Radix, we avoid `asChild` as a JSX attribute in registry source code. The `base-nova` codemod converts `asChild` to `render` prop syntax, which can break component structure in unexpected ways (child elements get reparented).

| Pattern | Safe? | Why |
|---------|-------|-----|
| `<Trigger asChild><button>...</button></Trigger>` | NO | Codemod converts to `render`, may break structure |
| `<Trigger className="..." role="combobox">...</Trigger>` | YES | No `asChild`, trigger IS the button |
| `<Icon asChild><svg>...</svg></Icon>` | NO | Codemod converts, breaks SVG structure |
| `const Comp = asChild ? Slot : "button"` | YES | Variable reference, not JSX attribute |
| `{ asChild?: boolean }` in TypeScript types | YES | Type definition, not JSX |

### How we solved the nested button problem

Components like Combobox and DatePicker need a custom trigger button inside a Popover. The naive approach nests `<button>` inside `<PopoverTrigger>` (which itself renders a `<button>`), producing invalid HTML.

**Solution:** Pass props directly to `VioletPopoverTrigger` instead of nesting a separate button. Radix's `PopoverTrigger` is already a `<button>` element, so it accepts `className`, `ref`, `role`, `aria-*`, `data-*`, etc. directly:

```tsx
// GOOD: Trigger IS the button, no nesting
<VioletPopoverTrigger
  ref={ref}
  role="combobox"
  aria-expanded={open}
  className="..."
>
  <span>{selectedLabel}</span>
  <ChevronIcon />
</VioletPopoverTrigger>

// BAD: Nested buttons (invalid HTML)
<VioletPopoverTrigger>
  <button role="combobox" aria-expanded={open} className="...">
    <span>{selectedLabel}</span>
    <ChevronIcon />
  </button>
</VioletPopoverTrigger>
```

## Components Reference

| Component | Primitive Source | Notes |
|-----------|-----------------|-------|
| `violet-popover` | `@radix-ui/react-popover` | No `asChild` used |
| `violet-combobox` | cmdk + popover | Props passed directly to trigger |
| `violet-date-picker` | react-day-picker + popover | Props passed directly to trigger |
| `violet-select` | `@radix-ui/react-select` | Icon uses className, not `asChild` |
| `violet-button` | `@radix-ui/react-slot` | `asChild` as variable reference (safe) |
| `violet-breadcrumb` | `@radix-ui/react-slot` | `asChild` as variable reference (safe) |
| `violet-modal` | `@radix-ui/react-dialog` | No `asChild` in source |
| `violet-dropdown-menu` | `@radix-ui/react-dropdown-menu` | No `asChild` in source |
| `violet-tooltip` | `@radix-ui/react-tooltip` | No `asChild` in source |

## Testing Checklist

When adding a new component that uses any Radix primitive:

1. Run `pnpm build:registry`
2. Push and wait for GitHub Pages deploy
3. Test in a **Radix** project (`style: "new-york"`): `npx shadcn@latest add "<registry-url>"`
4. Test in a **Base UI** project (`style: "base-nova"`): same command
5. Verify no `asChild` appears as JSX attribute in the source
6. Run `npx tsc --noEmit` in both consumer projects
