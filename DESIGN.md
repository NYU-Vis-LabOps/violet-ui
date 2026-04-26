---
name: Violet UI
description: A quiet NYU-branded shadcn registry for focused research tools.
colors:
  nyu-purple: "#57068c"
  nyu-purple-hover: "#702b9d"
  nyu-purple-light: "#ab82c5"
  nyu-purple-lighter: "#eee6f3"
  nyu-purple-dark: "#2d0051"
  background: "#f3f4f6"
  foreground: "#333333"
  card: "#ffffff"
  border: "#e5e7eb"
  muted: "#f3f4f6"
  muted-foreground: "#657386"
  secondary: "#854ebc"
  accent: "#ac88bf"
  destructive: "#dc3848"
  success: "#29a847"
  warning: "#ffc105"
  info: "#007bff"
  dark-background: "#141216"
  dark-card: "#1f1c22"
  dark-foreground: "#f2f2f2"
  dark-primary: "#af70db"
typography:
  headline:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.025em"
rounded:
  sm: "2px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  button-primary:
    backgroundColor: "{colors.nyu-purple}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "6px 14px"
    height: "36px"
    typography: "{typography.body}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "6px 14px"
    height: "36px"
    typography: "{typography.body}"
  input-default:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
    height: "36px"
    typography: "{typography.body}"
  card-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "20px"
  badge-status:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.label}"
---

# Design System: Violet UI

## 1. Overview

**Creative North Star: "The Quiet Research Instrument"**

Violet UI is a component registry for focused academic tools. It should feel like a well-built research instrument: precise, calm, and ready for repeated use by people who care more about their data and workflow than the interface itself.

The system is restrained by default. NYU Purple carries identity and interaction affordance, but it must stay rare enough that content, form state, and tabular information remain the main event. Surfaces are compact, lightly framed, and predictable.

Violet UI rejects generic Bootstrap sites, emoji-heavy startup SaaS, and dense enterprise dashboards like SAP or Jira. It should feel neither corporate nor casual. It should feel academic, focused, refined, and systematic.

**Key Characteristics:**
- Compact density with readable touch targets.
- One primary accent used sparingly.
- Flat-by-default surfaces with tokenized borders and quiet elevation.
- Familiar Radix and shadcn interaction patterns.
- Accessible keyboard, contrast, focus, and reduced-motion behavior.

## 2. Colors

The palette is a restrained NYU Purple system on cool neutral surfaces. Purple is identity and action, not decoration.

### Primary
- **NYU Purple** (`nyu-purple`): The only dominant accent. Use it for primary actions, active navigation, selected options, focus rings, and the fixed navbar.
- **NYU Purple Hover** (`nyu-purple-hover`): The interaction deepening for purple surfaces.
- **NYU Purple Light** (`nyu-purple-light`) and **NYU Purple Lighter** (`nyu-purple-lighter`): Supportive tints for low-emphasis highlights, chips, selected rows, and non-command emphasis.
- **NYU Purple Dark** (`nyu-purple-dark`): Deep contrast for dark-mode foreground pairing or branded emphasis.

### Secondary
- **Muted Violet** (`secondary`): A supporting violet used only when primary hierarchy needs another branded layer.
- **Soft Lavender** (`accent`): Avatar and low-volume accent surfaces. Never compete with primary actions.

### Tertiary
- **Research Blue** (`info`), **Protocol Green** (`success`), **Attention Amber** (`warning`), and **Review Red** (`destructive`): Semantic state colors. They describe system status, not brand personality.

### Neutral
- **Lab Canvas** (`background`): The default application field.
- **Paper Surface** (`card`): Cards, dialogs, menus, and table containers.
- **Ink** (`foreground`): Primary body and control text.
- **Rule Line** (`border`): Dividers, input strokes, table borders, and quiet card frames.
- **Secondary Ink** (`muted-foreground`): Descriptions, captions, group labels, and disabled-adjacent text.
- **Dark Lab Canvas** (`dark-background`) and **Dark Paper Surface** (`dark-card`): Dark mode surfaces stay violet-tinted and restrained.

### Named Rules

**The One Accent Rule.** NYU Purple is the only brand accent. If more than 10% of a screen is purple, the screen is shouting.

**The Semantic Color Rule.** Success, warning, info, and destructive colors are reserved for state. Do not use them to decorate cards or make empty states more exciting.

## 3. Typography

**Display Font:** Inter, Helvetica, Arial, sans-serif
**Body Font:** Inter, Helvetica, Arial, sans-serif
**Label/Mono Font:** Inter, Helvetica, Arial, sans-serif

**Character:** The type system is neutral, compact, and legible under research workload. It favors clarity over editorial personality.

### Hierarchy
- **Headline** (600, 18px, 1.35): Dialog titles, major panel titles, and high-level component headings.
- **Title** (600, 16px, 1.25): Card titles, table-adjacent titles, and compact section headers.
- **Body** (400, 14px, 1.5): Default component text, menu items, table cells, and descriptions.
- **Mobile Body** (400, 16px, 1.5): Inputs and selects on mobile to prevent iOS Safari auto-zoom.
- **Label** (600, 12px, 0.025em): Table headers, menu group labels, sidebar section labels, and compact metadata.

### Named Rules

**The No Theatrics Rule.** Do not introduce display serifs, gradient type, oversized hero text, or novelty type. This registry serves product UI, not a campaign page.

**The Readable Density Rule.** Compact does not mean cramped. Body text stays at 14px desktop, 16px in form inputs on mobile, with clear line-height and no negative letter spacing.

## 4. Elevation

Violet UI uses a hybrid of borders and quiet shadow tokens. Borders define most surfaces. Shadows appear when a surface floats above the document: menus, popovers, dialogs, toasts, and intentionally elevated cards.

### Shadow Vocabulary
- **Hairline Depth** (`--shadow-xs`): Default cards, inputs, and small framed surfaces.
- **Control Depth** (`--shadow-sm`): Primary buttons and interactive controls that need mild tactile feedback.
- **Floating Depth** (`--shadow-md`): Popovers, dropdown menus, autocomplete lists, toasts, and elevated cards.
- **Dialog Depth** (`--shadow-lg`): Modals and confirm dialogs.
- **Maximum Depth** (`--shadow-xl`): Reserved token. Avoid in component defaults unless a future surface genuinely needs stronger separation.

### Named Rules

**The Border-First Rule.** Use border and tonal layering before shadow. If a static card needs `shadow-lg`, the hierarchy is wrong.

**The No Glass Rule.** Decorative blur and glassmorphism are forbidden. Overlays may dim the page, but they must not become visual effects.

## 5. Components

### Buttons
- **Shape:** Gently curved rectangle (6px radius).
- **Primary:** NYU Purple background, white foreground, 36px desktop height, 40px mobile default height, medium weight.
- **Hover / Focus:** Hover darkens through opacity. Focus uses a 2px primary ring with offset. Active state may move by 1px only under `motion-safe`.
- **Outline:** Neutral border and foreground at rest. Purple appears only on hover or active state.
- **Ghost / Link:** Text-first actions. Use for low-priority commands, pagination controls, sidebar items, and inline navigation.

### Chips
- **Style:** Rounded-full badges for status, rounded-md tags for selected values.
- **State:** Status badges use semantic tint backgrounds. Multi-select tags use muted surfaces and removable affordances.

### Cards / Containers
- **Corner Style:** 6px radius across cards, tables, modals, menus, and framed panels.
- **Background:** Paper Surface on Lab Canvas.
- **Shadow Strategy:** Default cards use `--shadow-xs`; elevated cards use `--shadow-md` without hover lift.
- **Border:** Full border accents are allowed. Colored left or right stripes greater than 1px are forbidden.
- **Internal Padding:** 20px for card and modal sections, 12px for compact rows and controls.

### Inputs / Fields
- **Style:** 36px height, 6px radius, neutral border, Lab Canvas background, 12px horizontal padding.
- **Focus:** 2px primary ring with offset and a small shadow shift.
- **Error / Disabled:** Error uses destructive border and focus ring. Disabled fields reduce opacity and use muted background.
- **Combobox / Autocomplete:** Menus are card surfaces with `--shadow-md`, max-height scrolling, and selected rows highlighted with `primary/10`.

### Navigation
- **Navbar:** Fixed 48px primary bar, white foreground, compact links, and a full-height mobile panel.
- **Sidebar:** Card background, right border, 240px default width, 56px collapsed desktop rail, active item shown with `primary/10` background and primary text.
- **Pagination:** Icon buttons use ghost styling. First/last controls are optional. Disabled and boundary states must be visually quiet and keyboard-correct.

### Tables
- **Style:** Rounded 6px frame with neutral border, muted header background, compact 12px horizontal cells.
- **Rows:** Hover uses `primary/[0.04]`; selected uses `primary/10`.
- **Text:** Header labels are 12px uppercase with subtle letter spacing. Body cells use tabular numbers where values may align.

### Dialogs and Popovers
- **Dialogs:** Centered card surface, `--shadow-lg`, 6px radius, 20px sections, neutral-950 overlay at 55% opacity.
- **Popovers:** Isolated stacking context, pointer events enabled, `--shadow-md`, 4px side offset, compact internal padding.
- **Confirm Dialogs:** Alert-dialog semantics stay strict by default. Overlay click dismissal is opt-in only.

## 6. Do's and Don'ts

### Do:
- **Do** use NYU Purple for primary action, focus, active state, and selected state.
- **Do** keep surfaces compact: 36px desktop form controls, 20px modal and card padding, 12px table cell padding.
- **Do** pair every background token with its matching foreground token, especially in dark mode.
- **Do** use borders and muted fills before reaching for heavy shadows.
- **Do** preserve Radix keyboard behavior, accessible names, focus rings, and reduced-motion respect.
- **Do** write registry primitives that stay business-agnostic. Access requests, PI logic, room logic, and approval semantics belong in consuming apps.

### Don't:
- **Don't** build generic Bootstrap sites. The system must not feel like a default admin template.
- **Don't** use emoji-heavy startup SaaS language or visual treatment.
- **Don't** create dense enterprise dashboards like SAP or Jira. Density is allowed; visual clutter is not.
- **Don't** make the UI feel corporate or casual. It should remain academic, focused, and refined.
- **Don't** use colored side-stripe borders greater than 1px on cards, rows, callouts, or alerts.
- **Don't** use decorative gradients, gradient text, glassmorphism, blur-heavy overlays, bouncy motion, or hover lift as default style.
- **Don't** introduce access-request-specific fields, states, or workflow language into violet-ui components.
