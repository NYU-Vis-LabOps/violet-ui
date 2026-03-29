# Violet UI — Component Gap Analysis

Based on: `NYU_Room_Access_Requirements_v0.2.docx` (2026-03-28 DRAFT)

## Existing Components (10)

| # | Component | Status |
|---|-----------|--------|
| 1 | Button | Done |
| 2 | Input | Done |
| 3 | Select | Done |
| 4 | Card | Done |
| 5 | Modal | Done |
| 6 | Table | Done |
| 7 | Navbar | Done |
| 8 | Badge | Done |
| 9 | StatusBadge | Done |
| 10 | Accordion | Done |

---

## Components To Add

### P0 — High Priority (core form & approval flow)

| Component | Requirement Source | Notes |
|---|---|---|
| **Checkbox** | Form multi-select (Building list), Bulk submission row selection | Support indeterminate state for "select all" |
| **Radio** | Form single-choice fields (Access Type) | Group wrapper needed |
| **Textarea** | Deny reason (required, non-empty), general remarks field | Character count / min-length validation |
| **FileUpload** | Single submission attachment, Bulk post-upload page | Max 10MB, drag-and-drop, file type hints |
| **Form / FormField** | All form pages | Wraps label + input + error message + required marker |
| **Toast / Notification** | Submission success, approve/deny confirmation, error feedback | Auto-dismiss, stackable, severity variants |
| **Stepper / Timeline** | Multi-tier approval chain progress, application status tracking | Vertical + horizontal variants, status colors |
| **Tabs** | Approver dashboard (Pending/Approved/Denied), Admin panel sections | Badge count on tab, keyboard navigation |

### P1 — Medium Priority (admin panel & UX)

| Component | Requirement Source | Notes |
|---|---|---|
| **DatePicker / DateRangePicker** | Audit log date filter, Access Start/End Date fields | Calendar popup, range mode |
| **Pagination** | Application list table, audit log table | Page size selector, total count display |
| **SearchInput** | NYU ID status lookup page, audit log search by Request ID | Debounced input, clear button |
| **DropdownMenu** | Row-level actions (Approve / Deny / View Detail) | Keyboard accessible, icon support |
| **Alert / Banner** | System notices, SLA timeout warnings, pending-confirmation hints | Dismissible, severity variants (info/warning/error) |
| **Tooltip** | Form field help text, table column header explanations | Delay, placement options |
| **Skeleton / Loading** | Table loading state, status query page | Match component dimensions |

### P2 — Low Priority (nice to have)

| Component | Requirement Source | Notes |
|---|---|---|
| **Avatar** | Approver identity display | Initials fallback |
| **Breadcrumb** | Admin multi-level page navigation | Separator customization |
| **EmptyState** | Empty table / list placeholder | Icon + message + action button |
| **Tag / Chip** | Department multi-select result display (44 departments) | Removable variant, truncation |

---

## Priority Rationale

- **P0**: Without these, the core submission form and approval management pages cannot be built.
- **P1**: Needed for a usable admin experience — search, filter, pagination, contextual actions.
- **P2**: Polish and UX refinements; can use simpler alternatives initially.

## Suggested Build Order (P0)

1. Checkbox + Radio (simple, unblocks form)
2. Textarea (simple, unblocks deny flow)
3. Form / FormField (layout wrapper, improves all form pages)
4. FileUpload (more complex, but critical for submission)
5. Toast (global feedback mechanism)
6. Tabs (dashboard layout)
7. Stepper / Timeline (approval chain visualization)
