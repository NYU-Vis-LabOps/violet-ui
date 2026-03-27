import type { Meta, StoryObj } from "@storybook/react"
import { VioletStatusBadge } from "./violet-status-badge"

const meta: Meta<typeof VioletStatusBadge> = {
  title: "Components/VioletStatusBadge",
  component: VioletStatusBadge,
  argTypes: {
    status: {
      control: "select",
      options: ["not-started", "in-progress", "due-soon", "overdue", "completed"],
    },
    label: { control: "text" },
  },
  args: {
    status: "in-progress",
  },
}

export default meta
type Story = StoryObj<typeof VioletStatusBadge>

export const Default: Story = {}

export const NotStarted: Story = {
  args: { status: "not-started" },
}

export const InProgress: Story = {
  args: { status: "in-progress" },
}

export const DueSoon: Story = {
  args: { status: "due-soon" },
}

export const Overdue: Story = {
  args: { status: "overdue" },
}

export const Completed: Story = {
  args: { status: "completed" },
}

export const CustomLabel: Story = {
  args: { status: "in-progress", label: "Working on it" },
}

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <VioletStatusBadge status="not-started" />
      <VioletStatusBadge status="in-progress" />
      <VioletStatusBadge status="due-soon" />
      <VioletStatusBadge status="overdue" />
      <VioletStatusBadge status="completed" />
    </div>
  ),
}
