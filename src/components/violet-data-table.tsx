import * as React from "react"
import {
  type ColumnDef,
  type SortingState,
  type RowSelectionState,
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { VioletCheckbox } from "./violet-checkbox"
import { VioletPagination } from "./violet-pagination"

/* ── Props ────────────────────────────────────────────────────────── */

export interface VioletDataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[]
  data: TData[]
  enableRowSelection?: boolean
  enableSorting?: boolean
  enablePagination?: boolean
  pageSize?: number
  onRowSelectionChange?: (selection: RowSelectionState) => void
  className?: string
}

/* ── Component ────────────────────────────────────────────────────── */

function VioletDataTableInner<TData>(
  {
    columns: userColumns,
    data,
    enableRowSelection = false,
    enableSorting = false,
    enablePagination = false,
    pageSize = 10,
    onRowSelectionChange,
    className,
  }: VioletDataTableProps<TData>,
  _ref: React.Ref<HTMLDivElement>
) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  })

  const handleRowSelectionChange = React.useCallback(
    (updater: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)) => {
      setRowSelection((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater
        onRowSelectionChange?.(next)
        return next
      })
    },
    [onRowSelectionChange]
  )

  const columns = React.useMemo(() => {
    if (!enableRowSelection) return userColumns

    const selectColumn: ColumnDef<TData, unknown> = {
      id: "select",
      header: ({ table }) => (
        <VioletCheckbox
          checked={
            table.getIsAllPageRowsSelected()
              ? true
              : table.getIsSomePageRowsSelected()
                ? "indeterminate"
                : false
          }
          onCheckedChange={(checked) =>
            table.toggleAllPageRowsSelected(!!checked)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <VioletCheckbox
          checked={row.getIsSelected()}
          onCheckedChange={(checked) => row.toggleSelected(!!checked)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      size: 40,
    }

    return [selectColumn, ...userColumns]
  }, [userColumns, enableRowSelection])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
      ...(enablePagination ? { pagination } : {}),
    },
    onSortingChange: enableSorting ? setSorting : undefined,
    onRowSelectionChange: enableRowSelection
      ? handleRowSelectionChange as never
      : undefined,
    onPaginationChange: enablePagination ? setPagination : undefined,
    getCoreRowModel: getCoreRowModel(),
    ...(enableSorting ? { getSortedRowModel: getSortedRowModel() } : {}),
    ...(enablePagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    enableRowSelection,
    enableSorting,
  })

  const totalPages = table.getPageCount()

  return (
    <div ref={_ref} className={cn("w-full", className)}>
      <div className="relative w-full overflow-x-auto rounded-lg border border-border">
        <table className="w-full caption-bottom text-sm">
          <thead className="bg-muted/40 [&_tr]:border-b [&_tr]:border-border">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cn(
                      "h-9 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wider text-muted-foreground [&:has([role=checkbox])]:pr-0",
                      header.column.getCanSort() && "cursor-pointer select-none"
                    )}
                    style={
                      header.column.columnDef.size
                        ? { width: header.column.columnDef.size }
                        : undefined
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <SortIndicator direction={header.column.getIsSorted()} />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="h-24 text-center text-sm text-muted-foreground"
                >
                  No results.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  className="border-b border-border/75 transition-colors hover:bg-primary/[0.04] data-[state=selected]:bg-primary/10"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-3 py-2.5 align-middle tabular-nums [&:has([role=checkbox])]:pr-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {enablePagination && totalPages > 1 && (
        <div className="flex items-center justify-between pt-3">
          {enableRowSelection && (
            <p className="text-xs text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected
            </p>
          )}
          <div className={cn(!enableRowSelection && "ml-auto")}>
            <VioletPagination
              page={pagination.pageIndex + 1}
              totalPages={totalPages}
              onPageChange={(p) =>
                setPagination((prev) => ({ ...prev, pageIndex: p - 1 }))
              }
            />
          </div>
        </div>
      )}

      {enableRowSelection && !enablePagination && (
        <p className="pt-2 text-xs text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </p>
      )}
    </div>
  )
}

const VioletDataTable = React.forwardRef(VioletDataTableInner) as <TData>(
  props: VioletDataTableProps<TData> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement

/* ── Sort Indicator ───────────────────────────────────────────────── */

function SortIndicator({ direction }: { direction: false | "asc" | "desc" }) {
  if (!direction) {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-3.5 w-3.5 opacity-30">
        <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.64245 3.00605 7.35753 3.00605 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    )
  }

  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-3.5 w-3.5">
      {direction === "asc" ? (
        <path d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.35753 5.00605 7.64245 5.00605 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6425 8.99392 10.3576 8.99392 10.1819 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      ) : (
        <path d="M4.18179 6.18179C4.35753 6.00605 4.64245 6.00605 4.81819 6.18179L7.49999 8.86361L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.9939 6.35753 10.9939 6.64245 10.8182 6.81819L7.81819 9.81819C7.64245 9.99392 7.35753 9.99392 7.18179 9.81819L4.18179 6.81819C4.00605 6.64245 4.00605 6.35753 4.18179 6.18179Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      )}
    </svg>
  )
}

export { VioletDataTable }
