import { useMemo, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  SortableTableHead,
  TableCell,
  TableCaption,
  type SortDirection,
} from "./violet-table"

const meta: Meta<typeof VioletTable> = {
  title: "Components/VioletTable",
  component: VioletTable,
  argTypes: {
    striped: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof VioletTable>

const rows = [
  { name: "Alice", role: "Engineer", status: "Active" },
  { name: "Bob", role: "Designer", status: "Active" },
  { name: "Charlie", role: "PM", status: "Away" },
  { name: "Diana", role: "Engineer", status: "Active" },
  { name: "Eve", role: "QA", status: "Offline" },
]

type SortKey = "name" | "role" | "status"

const TableTemplate = ({ striped }: { striped?: boolean }) => (
  <VioletTable striped={striped}>
    <TableCaption>Team members</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody data-striped={striped || undefined}>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell className="font-medium">{row.name}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </VioletTable>
)

export const Default: Story = {
  render: () => <TableTemplate />,
}

export const Striped: Story = {
  render: () => <TableTemplate striped />,
}

export const SortableHeaders: Story = {
  render: () => {
    const [sortKey, setSortKey] = useState<SortKey>("name")
    const [direction, setDirection] = useState<SortDirection>("asc")

    const sortedRows = useMemo(() => {
      const multiplier = direction === "asc" ? 1 : -1
      return [...rows].sort((a, b) =>
        a[sortKey].localeCompare(b[sortKey]) * multiplier
      )
    }, [direction, sortKey])

    const handleSortChange = (nextSortKey: SortKey, nextDirection: SortDirection) => {
      setSortKey(nextSortKey)
      setDirection(nextDirection)
    }

    return (
      <VioletTable>
        <TableCaption>
          Team members sorted by {sortKey} ({direction})
        </TableCaption>
        <TableHeader>
          <TableRow>
            <SortableTableHead
              sortKey="name"
              activeSortKey={sortKey}
              direction={direction}
              sortLabel="Sort by name"
              onSortChange={handleSortChange}
            >
              Name
            </SortableTableHead>
            <SortableTableHead
              sortKey="role"
              activeSortKey={sortKey}
              direction={direction}
              sortLabel="Sort by role"
              onSortChange={handleSortChange}
            >
              Role
            </SortableTableHead>
            <SortableTableHead
              sortKey="status"
              activeSortKey={sortKey}
              direction={direction}
              sortLabel="Sort by status"
              onSortChange={handleSortChange}
            >
              Status
            </SortableTableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell className="text-muted-foreground">
                Plain header column
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </VioletTable>
    )
  },
}
