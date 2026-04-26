## Design Context

### Users
Lab researchers and students at the NYU Visualization Lab, building and using internal tools for data analysis, project tracking, and lab operations. They are technically literate but prioritize getting work done over learning complex interfaces. Context of use: focused academic work sessions where the UI should stay out of the way.

### Brand Personality
**Academic, focused, refined.** The interface should feel like a well-designed research tool — purposeful, clear, and quietly confident. NYU Purple (#57068c) anchors the identity without overwhelming content.

### Aesthetic Direction
- **Visual tone**: Minimal and content-forward. Clean layouts that emphasize data and tasks over decoration.
- **Theme**: Light and dark modes. NYU Purple as primary accent, used sparingly for interactive elements and key affordances.
- **Typography**: Inter — neutral, highly legible, scales well across data-heavy and text-heavy contexts.
- **References**: Stripe docs (clarity), Linear (focused productivity), Vercel dashboard (modern minimalism with purpose).
- **Anti-references**: Generic Bootstrap sites, emoji-heavy startup SaaS, dense enterprise dashboards (SAP/Jira). Should feel neither corporate nor casual.

### Design Principles
1. **Content first** — UI serves the data and task. Minimize chrome, maximize signal.
2. **Quiet confidence** — NYU Purple provides identity without shouting. Use gradients and color sparingly; let whitespace and typography do the work.
3. **Predictable patterns** — Consistent spacing (4px grid), familiar component behaviors, clear affordances. Researchers shouldn't have to think about the UI.
4. **Accessible by default** — WCAG AA compliance. Sufficient contrast, keyboard navigation, screen reader support, reduced-motion respect.
5. **Systematic, not decorative** — Every color, shadow, and radius has a purpose defined by the token system. No one-off styling.

### Technical Stack
- **Framework**: React 19, TypeScript, Tailwind CSS v4
- **Component primitives**: Radix UI
- **Variant system**: CVA (class-variance-authority) + cn() utility (clsx + tailwind-merge)
- **Distribution**: shadcn/ui custom registry via GitHub Pages
- **Showcase**: Storybook 8

### Design Tokens (Key Values)
- **Primary**: `hsl(275 90% 29%)` / `#57068c` (NYU Purple)
- **Font**: Inter, Helvetica, Arial, sans-serif
- **Border radius**: 0.375rem (6px)
- **Shadows**: 5-tier layered system (xs/sm/md/lg/xl) — CSS variable indirection (`--shadow-*-val`) for dark mode adaptation (higher opacity + subtle light ring)
- **Semantic colors**: CSS variable tokens — `--success`, `--destructive`, `--warning`, `--info` (with matching `-foreground` variants)
- **Status tints**: `--status-neutral`, `--info-tint`, `--warning-tint`, `--destructive-tint`, `--success-tint` (light bg + saturated text pattern)
- **Purple scale**: 10 steps from `#f6edf9` (50) to `#1a0030` (900)

### Component Sizing
- **Compact by default**: Components use tight but readable sizing (Linear/Vercel density)
- **Input/Select height**: h-9 (36px)
- **Button heights**: sm h-9/md:h-7, default h-10/md:h-9, lg h-11, icon h-10/md:h-9 (mobile-first touch targets)
- **Card/Modal padding**: p-5 (20px)
- **Table cells**: px-3 py-2.5
- **Navbar height**: h-12 (48px)
- **Input/Select font**: text-base (16px) on mobile to prevent iOS Safari auto-zoom, md:text-sm on desktop
- **Modal**: max-w-[calc(100vw-2rem)] safe margin; close button p-2 -m-2 touch area
- **Navbar mobile links**: py-3 (~48px touch targets)
- **Motion**: `motion-safe:` prefix for transform-based animations; respects `prefers-reduced-motion`
- **Dark mode text**: Components must pair `bg-*` with matching `text-*-foreground` (e.g. `bg-card text-card-foreground`)
