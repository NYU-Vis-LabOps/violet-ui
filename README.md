# Violet UI

NYU branded [shadcn/ui](https://ui.shadcn.com) custom component registry. Install theme and components directly into any Next.js / React project via `shadcn add`.

## Quick Start

### Install the theme

```bash
npx shadcn@latest add https://nyu-vis-labops.github.io/violet-ui/r/styles/violet-theme.json
```

### Install components

```bash
# Single component
npx shadcn@latest add https://nyu-vis-labops.github.io/violet-ui/r/ui/violet-button.json

# Multiple components
npx shadcn@latest add \
  https://nyu-vis-labops.github.io/violet-ui/r/ui/violet-button.json \
  https://nyu-vis-labops.github.io/violet-ui/r/ui/violet-card.json \
  https://nyu-vis-labops.github.io/violet-ui/r/ui/violet-badge.json
```

## Components (40)

| Component | Description |
|-----------|-------------|
| `violet-accordion` | Accordion with purple highlights |
| `violet-alert` | Alert with info, warning, destructive, and success variants |
| `violet-avatar` | Avatar with image and initials fallback, 3 sizes (sm, default, lg) |
| `violet-badge` | Badge with 7 semantic variants |
| `violet-breadcrumb` | Breadcrumb navigation with customizable separators |
| `violet-button` | Button with 6 variants and 5 sizes |
| `violet-card` | Card with 4 variants (default, bordered, elevated, stat) |
| `violet-checkbox` | Checkbox with label support |
| `violet-combobox` | Autocomplete combobox with search, grouping, and custom value support |
| `violet-confirm-dialog` | Confirmation dialog with default and destructive variants |
| `violet-data-table` | Data table with row selection, sorting, and pagination |
| `violet-date-picker` | Date picker with calendar popover |
| `violet-date-range-picker` | Date range picker with independent month navigation |
| `violet-dropdown-menu` | Dropdown menu with items, separators, and sub-menus |
| `violet-empty-state` | Empty state placeholder with icon, title, description, and action |
| `violet-file-upload` | File upload with drag & drop support |
| `violet-form-field` | Form field layout wrapper with label, description, and error |
| `violet-form-repeater` | Repeatable form rows with add, duplicate, and delete actions |
| `violet-input` | Input with focus, error, and disabled states |
| `violet-label` | Label with required indicator |
| `violet-modal` | Modal dialog with 5 sizes (sm, default, lg, xl, full) |
| `violet-navbar` | Top navigation bar with responsive hamburger menu |
| `violet-pagination` | Pagination with page numbers and prev/next controls |
| `violet-popover` | Popover with customizable trigger and content |
| `violet-progress` | Progress bar with 3 sizes and 4 color variants |
| `violet-radio` | Radio group with label support |
| `violet-search-input` | Search input with icon and clear button |
| `violet-select` | Select dropdown with purple focus ring |
| `violet-sidebar` | Sidebar navigation with sections, icons, and collapsible state |
| `violet-skeleton` | Skeleton loading placeholder |
| `violet-status-badge` | Status badge for task/project states |
| `violet-stepper` | Multi-step wizard with context-based state management |
| `violet-switch` | Toggle switch with 2 sizes (sm, default) |
| `violet-table` | Data table with hover highlighting and optional striped rows |
| `violet-tabs` | Tabs with underline style |
| `violet-tag` | Tag/chip with 3 variants and optional remove button |
| `violet-textarea` | Textarea with auto-resize support |
| `violet-timeline` | Vertical timeline with 6 dot variants and icon support |
| `violet-toast` | Toast notifications via Sonner |
| `violet-tooltip` | Tooltip with configurable placement |

## Usage

```tsx
import { VioletButton } from "@/components/ui/violet-button"
import { VioletCard, CardHeader, CardTitle, CardContent } from "@/components/ui/violet-card"
import { VioletStatusBadge } from "@/components/ui/violet-status-badge"

export function Dashboard() {
  return (
    <VioletCard variant="bordered">
      <CardHeader>
        <CardTitle>Lab Status</CardTitle>
      </CardHeader>
      <CardContent>
        <VioletStatusBadge status="in-progress" />
        <VioletButton variant="default" size="sm">View Details</VioletButton>
        <VioletButton variant="ghost" size="sm">Cancel</VioletButton>
      </CardContent>
    </VioletCard>
  )
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build registry JSON files
pnpm build:registry
```

The build script reads source files from `src/` and generates registry JSON to `public/r/`. Push to `main` to auto-deploy to GitHub Pages.

## Theme

The Violet theme uses NYU Purple (`#57068c`) as the primary brand color with a full HSL color system supporting light and dark modes. Key design tokens:

- **Primary**: NYU Purple with gradient accents
- **Font**: Inter, Helvetica, Arial, sans-serif
- **Border radius**: 6px (0.375rem)
- **Semantic colors**: Success (green), Destructive (red), Warning (yellow), Info (blue)
