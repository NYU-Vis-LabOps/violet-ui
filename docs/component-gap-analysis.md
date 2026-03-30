# Violet UI — Component Gap Analysis

Based on: `NYU_Room_Access_Requirements_v0.6.docx` (2026-03-30 DRAFT)

## Existing Components (40)

| # | Component | Primitive | Status |
|---|-----------|-----------|--------|
| 1 | Button | @radix-ui/react-slot | Done |
| 2 | Input | native | Done |
| 3 | Select | @radix-ui/react-select | Done |
| 4 | Card | native | Done |
| 5 | Modal | @radix-ui/react-dialog | Done |
| 6 | Table | native | Done |
| 7 | Navbar | native | Done |
| 8 | Badge | native | Done |
| 9 | StatusBadge | native | Done |
| 10 | Accordion | @radix-ui/react-accordion | Done |
| 11 | Checkbox | @radix-ui/react-checkbox | Done |
| 12 | Radio | @radix-ui/react-radio-group | Done |
| 13 | Textarea | native | Done |
| 14 | FileUpload | custom (drag & drop) | Done |
| 15 | FormField | native (layout wrapper) | Done |
| 16 | Label | @radix-ui/react-label | Done |
| 17 | Tabs | @radix-ui/react-tabs | Done |
| 18 | Toast | sonner | Done |
| 19 | Stepper | custom (React Context) | Done |
| 20 | Alert | native (cva variants) | Done |
| 21 | Skeleton | native | Done |
| 22 | Tooltip | @radix-ui/react-tooltip | Done |
| 23 | DropdownMenu | @radix-ui/react-dropdown-menu | Done |
| 24 | Pagination | custom (violetButtonVariants) | Done |
| 25 | SearchInput | native (search input) | Done |
| 26 | Popover | @radix-ui/react-popover | Done |
| 27 | DatePicker | react-day-picker + Popover | Done |
| 28 | DateRangePicker | react-day-picker + Popover | Done |
| 29 | Avatar | @radix-ui/react-avatar | Done |
| 30 | Breadcrumb | native (nav + ol) | Done |
| 31 | EmptyState | custom (composite layout) | Done |
| 32 | Tag | native (cva + removable) | Done |
| 33 | Switch | @radix-ui/react-switch | Done |
| 34 | Progress | @radix-ui/react-progress | Done |
| 35 | ConfirmDialog | @radix-ui/react-alert-dialog | Done |
| 36 | Timeline | custom (compound component) | Done |
| 37 | Combobox | cmdk + Popover | Done |
| 38 | Sidebar | custom (aside + nav) | Done |
| 39 | FormRepeater | custom (React Context, generic) | Done |
| 40 | DataTable | @tanstack/react-table + Table | Done |

---

## Components Added in v0.6

### P3 — v0.6 Requirements (autocomplete, bulk actions, audit timeline)

| Component | Primitive | Purpose |
|-----------|-----------|---------|
| Switch | @radix-ui/react-switch | Toggle controls for settings/preferences |
| Progress | @radix-ui/react-progress | Upload progress, approval workflow step bars |
| ConfirmDialog | @radix-ui/react-alert-dialog | Destructive action confirmation (delete, revoke) |
| Timeline | custom compound | Audit log display with status-colored dots |
| Combobox | cmdk + Popover | Autocomplete dropdowns (building, PI email) |
| Sidebar | custom aside | Admin panel navigation |
| FormRepeater | custom generic | Repeatable form rows (room access, collaborators) |
| DataTable | @tanstack/react-table | Sortable, selectable, paginated data tables |

---

## Historical Priorities

- **P0**: ~~Without these, the core submission form and approval management pages cannot be built.~~ DONE
- **P1**: ~~Needed for a usable admin experience — search, filter, pagination, contextual actions.~~ DONE
- **P2**: ~~Polish and UX refinements; can use simpler alternatives initially.~~ DONE
- **P3**: ~~v0.6 feature requirements — autocomplete combobox, bulk selection, audit timeline.~~ DONE
