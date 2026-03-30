import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import { VioletDataTable } from "./violet-data-table"
import { VioletButton } from "./violet-button"

const meta: Meta = {
  title: "Components/VioletDataTable",
}

export default meta
type Story = StoryObj

/* ── Sample data ──────────────────────────────────────────────────── */

interface Request {
  id: string
  requester: string
  building: string
  room: string
  status: "pending" | "approved" | "denied"
  date: string
}

const requests: Request[] = [
  { id: "REQ-001", requester: "Alice Chen", building: "Bobst Library", room: "301", status: "approved", date: "2025-03-10" },
  { id: "REQ-002", requester: "Bob Smith", building: "Silver Center", room: "405", status: "pending", date: "2025-03-11" },
  { id: "REQ-003", requester: "Carol Davis", building: "Kimmel Center", room: "202", status: "denied", date: "2025-03-12" },
  { id: "REQ-004", requester: "David Lee", building: "Tisch Hall", room: "110", status: "approved", date: "2025-03-13" },
  { id: "REQ-005", requester: "Eve Johnson", building: "Meyer Hall", room: "508", status: "pending", date: "2025-03-14" },
  { id: "REQ-006", requester: "Frank Wang", building: "Brown Building", room: "315", status: "approved", date: "2025-03-15" },
  { id: "REQ-007", requester: "Grace Kim", building: "Waverly Building", room: "201", status: "pending", date: "2025-03-16" },
  { id: "REQ-008", requester: "Henry Zhang", building: "Bobst Library", room: "412", status: "denied", date: "2025-03-17" },
  { id: "REQ-009", requester: "Ivy Thompson", building: "Silver Center", room: "303", status: "approved", date: "2025-03-18" },
  { id: "REQ-010", requester: "Jack Wilson", building: "Kimmel Center", room: "105", status: "pending", date: "2025-03-19" },
  { id: "REQ-011", requester: "Karen Martinez", building: "Tisch Hall", room: "220", status: "approved", date: "2025-03-20" },
  { id: "REQ-012", requester: "Leo Brown", building: "Meyer Hall", room: "401", status: "denied", date: "2025-03-21" },
]

const baseColumns: ColumnDef<Request, unknown>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "requester", header: "Requester" },
  { accessorKey: "building", header: "Building" },
  { accessorKey: "room", header: "Room" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const colors: Record<string, string> = {
        approved: "text-success",
        pending: "text-warning",
        denied: "text-destructive",
      }
      return (
        <span className={`text-sm font-medium capitalize ${colors[status] ?? ""}`}>
          {status}
        </span>
      )
    },
  },
  { accessorKey: "date", header: "Date" },
]

/* ── Stories ───────────────────────────────────────────────────────── */

export const Basic: Story = {
  render: () => (
    <VioletDataTable
      columns={baseColumns}
      data={requests.slice(0, 5)}
    />
  ),
}

export const RowSelection: Story = {
  render: () => {
    const [selection, setSelection] = useState<RowSelectionState>({})
    return (
      <div>
        <VioletDataTable
          columns={baseColumns}
          data={requests.slice(0, 5)}
          enableRowSelection
          onRowSelectionChange={setSelection}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Selected: {JSON.stringify(selection)}
        </p>
      </div>
    )
  },
}

export const Sorting: Story = {
  render: () => (
    <VioletDataTable
      columns={baseColumns}
      data={requests}
      enableSorting
    />
  ),
}

export const Pagination: Story = {
  render: () => (
    <VioletDataTable
      columns={baseColumns}
      data={requests}
      enablePagination
      pageSize={5}
    />
  ),
}

export const AllFeatures: Story = {
  render: () => (
    <VioletDataTable
      columns={baseColumns}
      data={requests}
      enableRowSelection
      enableSorting
      enablePagination
      pageSize={5}
    />
  ),
}

export const BulkActions: Story = {
  render: () => {
    const [selection, setSelection] = useState<RowSelectionState>({})
    const selectedCount = Object.keys(selection).length
    return (
      <div>
        {selectedCount > 0 && (
          <div className="mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2">
            <p className="text-sm font-medium">
              {selectedCount} request(s) selected
            </p>
            <div className="ml-auto flex gap-2">
              <VioletButton size="sm" onClick={() => console.log("Approve:", selection)}>
                Approve selected
              </VioletButton>
              <VioletButton
                size="sm"
                variant="destructive"
                onClick={() => console.log("Deny:", selection)}
              >
                Deny selected
              </VioletButton>
            </div>
          </div>
        )}
        <VioletDataTable
          columns={baseColumns}
          data={requests}
          enableRowSelection
          enableSorting
          enablePagination
          pageSize={5}
          onRowSelectionChange={setSelection}
        />
      </div>
    )
  },
}
