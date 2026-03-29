import type { Meta, StoryObj } from "@storybook/react"
import { VioletTag } from "./violet-tag"

const meta: Meta<typeof VioletTag> = {
  title: "Components/VioletTag",
  component: VioletTag,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline"],
    },
    children: { control: "text" },
  },
  args: {
    children: "Computer Science",
  },
}

export default meta
type Story = StoryObj<typeof VioletTag>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const Outline: Story = {
  args: { variant: "outline" },
}

export const Removable: Story = {
  args: { onRemove: () => {} },
}

export const RemovableSecondary: Story = {
  args: { variant: "secondary", onRemove: () => {} },
}

export const LongText: Story = {
  args: {
    children: "Department of Electrical and Computer Engineering",
    variant: "secondary",
    onRemove: () => {},
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <VioletTag variant="default">Default</VioletTag>
        <VioletTag variant="secondary">Secondary</VioletTag>
        <VioletTag variant="outline">Outline</VioletTag>
      </div>
      <div className="flex flex-wrap gap-2">
        <VioletTag variant="default" onRemove={() => {}}>Removable</VioletTag>
        <VioletTag variant="secondary" onRemove={() => {}}>Removable</VioletTag>
        <VioletTag variant="outline" onRemove={() => {}}>Removable</VioletTag>
      </div>
      <div className="flex flex-wrap gap-2">
        <VioletTag variant="secondary" onRemove={() => {}}>Computer Science</VioletTag>
        <VioletTag variant="secondary" onRemove={() => {}}>Mathematics</VioletTag>
        <VioletTag variant="secondary" onRemove={() => {}}>Physics</VioletTag>
        <VioletTag variant="secondary" onRemove={() => {}}>Electrical Engineering</VioletTag>
      </div>
    </div>
  ),
}
