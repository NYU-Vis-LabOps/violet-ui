import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
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
