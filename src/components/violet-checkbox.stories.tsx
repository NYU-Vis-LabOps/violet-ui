import type { Meta, StoryObj } from "@storybook/react"
import { VioletCheckbox } from "./violet-checkbox"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletCheckbox> = {
  title: "Components/VioletCheckbox",
  component: VioletCheckbox,
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof VioletCheckbox>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <VioletCheckbox id="default" {...args} />
      <VioletLabel htmlFor="default">Accept terms and conditions</VioletLabel>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <VioletCheckbox id="checked" defaultChecked />
      <VioletLabel htmlFor="checked">Email notifications</VioletLabel>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <VioletCheckbox id="disabled-unchecked" disabled />
        <VioletLabel htmlFor="disabled-unchecked">Disabled unchecked</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletCheckbox id="disabled-checked" disabled defaultChecked />
        <VioletLabel htmlFor="disabled-checked">Disabled checked</VioletLabel>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <VioletCheckbox id="s1" />
        <VioletLabel htmlFor="s1">Unchecked</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletCheckbox id="s2" defaultChecked />
        <VioletLabel htmlFor="s2">Checked</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletCheckbox id="s3" checked="indeterminate" />
        <VioletLabel htmlFor="s3">Indeterminate</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletCheckbox id="s4" disabled />
        <VioletLabel htmlFor="s4">Disabled</VioletLabel>
      </div>
    </div>
  ),
}
