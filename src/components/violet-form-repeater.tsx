import * as React from "react"

import { cn } from "@/lib/utils"
import { violetButtonVariants } from "./violet-button"

/* ── Types ────────────────────────────────────────────────────────── */

export interface FormRepeaterActions<T> {
  addRow: (defaultValue?: T) => void
  duplicateRow: (index: number) => void
  deleteRow: (index: number) => void
  clearRow: (index: number, defaultValue: T) => void
  updateRow: (index: number, value: T) => void
}

export interface VioletFormRepeaterProps<T> {
  value: T[]
  onChange: (rows: T[]) => void
  defaultRow: T
  children: (row: T, index: number, actions: FormRepeaterActions<T>) => React.ReactNode
  maxRows?: number
  minRows?: number
  addLabel?: string
  className?: string
}

/* ── Root ─────────────────────────────────────────────────────────── */

function VioletFormRepeaterInner<T>(
  {
    value,
    onChange,
    defaultRow,
    children,
    maxRows,
    minRows = 1,
    addLabel = "Add row",
    className,
  }: VioletFormRepeaterProps<T>,
  _ref: React.Ref<HTMLDivElement>
) {
  const actions: FormRepeaterActions<T> = React.useMemo(
    () => ({
      addRow: (defaultValue?: T) => {
        if (maxRows && value.length >= maxRows) return
        onChange([...value, defaultValue ?? defaultRow])
      },
      duplicateRow: (index: number) => {
        if (maxRows && value.length >= maxRows) return
        const next = [...value]
        next.splice(index + 1, 0, { ...value[index] })
        onChange(next)
      },
      deleteRow: (index: number) => {
        if (value.length <= minRows) return
        onChange(value.filter((_, i) => i !== index))
      },
      clearRow: (index: number, defaultValue: T) => {
        const next = [...value]
        next[index] = defaultValue
        onChange(next)
      },
      updateRow: (index: number, updated: T) => {
        const next = [...value]
        next[index] = updated
        onChange(next)
      },
    }),
    [value, onChange, defaultRow, maxRows, minRows]
  )

  const canDelete = value.length > minRows
  const canAdd = !maxRows || value.length < maxRows

  return (
    <div ref={_ref} className={cn("flex flex-col gap-3", className)}>
      {value.map((row, index) => (
        <VioletFormRepeaterRow
          key={index}
          canDelete={canDelete}
          onDelete={() => actions.deleteRow(index)}
          onDuplicate={() => actions.duplicateRow(index)}
          canDuplicate={canAdd}
        >
          {children(row, index, actions)}
        </VioletFormRepeaterRow>
      ))}
      {canAdd && (
        <button
          type="button"
          onClick={() => actions.addRow()}
          className={cn(
            violetButtonVariants({ variant: "outline", size: "default" }),
            "self-start"
          )}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="mr-1.5 h-4 w-4"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          {addLabel}
        </button>
      )}
    </div>
  )
}

const VioletFormRepeater = React.forwardRef(VioletFormRepeaterInner) as <T>(
  props: VioletFormRepeaterProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement

/* ── Row ──────────────────────────────────────────────────────────── */

interface VioletFormRepeaterRowProps {
  children: React.ReactNode
  canDelete: boolean
  onDelete: () => void
  onDuplicate: () => void
  canDuplicate: boolean
  className?: string
}

const VioletFormRepeaterRow = React.forwardRef<
  HTMLDivElement,
  VioletFormRepeaterRowProps
>(
  (
    { children, canDelete, onDelete, onDuplicate, canDuplicate, className },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex items-start gap-2 rounded-md border border-border p-3",
        className
      )}
    >
      <div className="flex-1 min-w-0">{children}</div>
      <VioletFormRepeaterActions
        canDelete={canDelete}
        onDelete={onDelete}
        onDuplicate={onDuplicate}
        canDuplicate={canDuplicate}
      />
    </div>
  )
)
VioletFormRepeaterRow.displayName = "VioletFormRepeaterRow"

/* ── Actions ──────────────────────────────────────────────────────── */

interface VioletFormRepeaterActionsProps {
  canDelete: boolean
  onDelete: () => void
  onDuplicate: () => void
  canDuplicate: boolean
}

function VioletFormRepeaterActions({
  canDelete,
  onDelete,
  onDuplicate,
  canDuplicate,
}: VioletFormRepeaterActionsProps) {
  return (
    <div className="flex shrink-0 gap-1 pt-0.5">
      <button
        type="button"
        onClick={onDuplicate}
        disabled={!canDuplicate}
        className={cn(
          violetButtonVariants({ variant: "ghost", size: "icon" }),
          "h-8 w-8"
        )}
        aria-label="Duplicate row"
        title="Duplicate"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-3.5 w-3.5">
          <path
            d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={onDelete}
        disabled={!canDelete}
        className={cn(
          violetButtonVariants({ variant: "ghost", size: "icon" }),
          "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
        )}
        aria-label="Delete row"
        title="Delete"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-3.5 w-3.5">
          <path
            d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export { VioletFormRepeater, VioletFormRepeaterRow }
