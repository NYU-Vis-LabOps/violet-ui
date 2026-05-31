import * as React from "react"

import { cn } from "@/lib/utils"

export interface VioletTableProps
  extends React.HTMLAttributes<HTMLTableElement> {
  striped?: boolean
}

const VioletTable = React.forwardRef<HTMLTableElement, VioletTableProps>(
  ({ className, striped, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto rounded-md border border-border">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        data-striped={striped || undefined}
        {...props}
      />
    </div>
  )
)
VioletTable.displayName = "VioletTable"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-muted/40 [&_tr]:border-b [&_tr]:border-border", className)}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:last-child]:border-0 [table[data-striped]_&_tr:nth-child(even)]:bg-muted/30",
      className
    )}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border/75 transition-colors hover:bg-primary/[0.04] data-[state=selected]:bg-primary/10",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
        "h-9 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

export type SortDirection = "asc" | "desc"

export interface SortableTableHeadProps<TSortKey extends string = string>
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "onClick"> {
  sortKey: TSortKey
  activeSortKey?: TSortKey
  direction?: SortDirection
  defaultDirection?: SortDirection
  disabled?: boolean
  sortLabel?: string
  onSortChange: (sortKey: TSortKey, direction: SortDirection) => void
}

const SortableTableHead = React.forwardRef<
  HTMLTableCellElement,
  SortableTableHeadProps
>(
  (
    {
      className,
      children,
      sortKey,
      activeSortKey,
      direction = "asc",
      defaultDirection = "asc",
      disabled = false,
      sortLabel,
      onSortChange,
      ...props
    },
    ref
  ) => {
    const isActive = activeSortKey === sortKey
    const nextDirection: SortDirection =
      isActive && direction === "asc" ? "desc" : defaultDirection

    return (
      <th
        ref={ref}
        aria-sort={
          isActive ? (direction === "asc" ? "ascending" : "descending") : "none"
        }
        className={cn(
          "h-9 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      >
        <button
          type="button"
          disabled={disabled}
          aria-label={sortLabel}
          className={cn(
            "-mx-2 inline-flex h-8 max-w-full items-center gap-1.5 rounded-sm px-2 text-left text-inherit uppercase tracking-wide transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            isActive && "text-primary"
          )}
          onClick={() => onSortChange(sortKey, nextDirection)}
        >
          <span className="truncate">{children}</span>
          <SortIndicator direction={isActive ? direction : undefined} />
        </button>
      </th>
    )
  }
)
SortableTableHead.displayName = "SortableTableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-3 py-2.5 align-middle tabular-nums [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-xs text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

function SortIndicator({ direction }: { direction?: SortDirection }) {
  if (!direction) {
    return <ChevronSortIcon className="opacity-35" />
  }

  return direction === "asc" ? (
    <ChevronUpIcon className="text-primary" />
  ) : (
    <ChevronDownIcon className="text-primary" />
  )
}

function ChevronSortIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={cn("h-3.5 w-3.5 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.64245 3.00605 7.35753 3.00605 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={cn("h-3.5 w-3.5 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.35753 5.00605 7.64245 5.00605 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6425 8.99392 10.3576 8.99392 10.1819 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={cn("h-3.5 w-3.5 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M4.18179 6.18179C4.35753 6.00605 4.64245 6.00605 4.81819 6.18179L7.49999 8.86361L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.9939 6.35753 10.9939 6.64245 10.8182 6.81819L7.81819 9.81819C7.64245 9.99392 7.35753 9.99392 7.18179 9.81819L4.18179 6.81819C4.00605 6.64245 4.00605 6.35753 4.18179 6.18179Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

export {
  VioletTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  SortableTableHead,
  TableCell,
  TableCaption,
}
