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

## Components

| Component | Description |
|-----------|-------------|
| `violet-button` | Button with 6 variants (default, secondary, destructive, ghost, outline, link) and 5 sizes |
| `violet-card` | Card with 4 variants (default, bordered, elevated, stat) and sub-components |
| `violet-badge` | Badge with 7 semantic variants |
| `violet-status-badge` | Status badge for task/project states (not-started, in-progress, due-soon, overdue, completed) |
| `violet-input` | Input with focus, error, and disabled states |
| `violet-modal` | Modal dialog with 5 sizes (sm, default, lg, xl, full) |
| `violet-navbar` | Top navigation bar with responsive hamburger menu |
| `violet-table` | Data table with hover highlighting and optional striped rows |
| `violet-select` | Select dropdown with purple focus ring |
| `violet-accordion` | Accordion with purple highlights |

## Usage

```tsx
import { VioletButton } from "@/components/ui/violet-button"
import { VioletCard, CardHeader, CardTitle, CardContent } from "@/components/ui/violet-card"
import { VioletStatusBadge } from "@/components/ui/violet-status-badge"

export function Dashboard() {
  return (
    <VioletCard variant="bordered" borderColor="#28a745">
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
