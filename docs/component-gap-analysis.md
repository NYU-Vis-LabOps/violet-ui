# Violet UI — Component Gap Analysis

Based on: `NYU_Room_Access_Requirements_v0.2.docx` (2026-03-28 DRAFT)

## Existing Components (19)

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

---

## Components To Add

### ~~P0 — High Priority (core form & approval flow)~~ DONE

All P0 components have been implemented.

### ~~P1 — Medium Priority (admin panel & UX)~~ DONE

All P1 components have been implemented.

### P2 — Low Priority (nice to have)

| Component | Requirement Source | Notes |
|---|---|---|
| **Avatar** | Approver identity display | Initials fallback |
| **Breadcrumb** | Admin multi-level page navigation | Separator customization |
| **EmptyState** | Empty table / list placeholder | Icon + message + action button |
| **Tag / Chip** | Department multi-select result display (44 departments) | Removable variant, truncation |

---

## Priority Rationale

- **P0**: ~~Without these, the core submission form and approval management pages cannot be built.~~ DONE
- **P1**: ~~Needed for a usable admin experience — search, filter, pagination, contextual actions.~~ DONE
- **P2**: Polish and UX refinements; can use simpler alternatives initially.
