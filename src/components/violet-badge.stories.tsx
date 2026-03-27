import type { Meta, StoryObj } from "@storybook/react"
import { VioletBadge } from "./violet-badge"

const meta: Meta<typeof VioletBadge> = {
  title: "Components/VioletBadge",
  component: VioletBadge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "success", "destructive", "warning", "info", "outline"],
    },
    children: { control: "text" },
  },
  args: {
    children: "Badge",
  },
}

export default meta
type Story = StoryObj<typeof VioletBadge>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const Success: Story = {
  args: { variant: "success" },
}

export const Destructive: Story = {
  args: { variant: "destructive" },
}

export const Warning: Story = {
  args: { variant: "warning" },
}

export const Info: Story = {
  args: { variant: "info" },
}

export const Outline: Story = {
  args: { variant: "outline" },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <VioletBadge variant="default">Default</VioletBadge>
      <VioletBadge variant="secondary">Secondary</VioletBadge>
      <VioletBadge variant="success">Success</VioletBadge>
      <VioletBadge variant="destructive">Destructive</VioletBadge>
      <VioletBadge variant="warning">Warning</VioletBadge>
      <VioletBadge variant="info">Info</VioletBadge>
      <VioletBadge variant="outline">Outline</VioletBadge>
    </div>
  ),
}
