import type { Meta, StoryObj } from "@storybook/react"
import { VioletRadioGroup, VioletRadioGroupItem } from "./violet-radio"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletRadioGroup> = {
  title: "Components/VioletRadio",
  component: VioletRadioGroup,
  argTypes: {
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletRadioGroup>

export const Default: Story = {
  render: () => (
    <VioletRadioGroup defaultValue="card">
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="card" id="card" />
        <VioletLabel htmlFor="card">Card Access</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="key" id="key" />
        <VioletLabel htmlFor="key">Key Access</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="both" id="both" />
        <VioletLabel htmlFor="both">Card + Key</VioletLabel>
      </div>
    </VioletRadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <VioletRadioGroup defaultValue="card" disabled>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="card" id="d-card" />
        <VioletLabel htmlFor="d-card">Card Access</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="key" id="d-key" />
        <VioletLabel htmlFor="d-key">Key Access</VioletLabel>
      </div>
    </VioletRadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <VioletRadioGroup defaultValue="read" className="flex gap-4">
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="read" id="h-read" />
        <VioletLabel htmlFor="h-read">Read</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="write" id="h-write" />
        <VioletLabel htmlFor="h-write">Write</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletRadioGroupItem value="admin" id="h-admin" />
        <VioletLabel htmlFor="h-admin">Admin</VioletLabel>
      </div>
    </VioletRadioGroup>
  ),
}
