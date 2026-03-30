import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletSwitch } from "./violet-switch"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletSwitch> = {
  title: "Components/VioletSwitch",
  component: VioletSwitch,
  argTypes: {
    disabled: { control: "boolean" },
    size: { control: "select", options: ["sm", "default"] },
  },
}

export default meta
type Story = StoryObj<typeof VioletSwitch>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <VioletSwitch id="default" {...args} />
      <VioletLabel htmlFor="default">Airplane mode</VioletLabel>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center gap-3">
        <VioletSwitch id="controlled" checked={checked} onCheckedChange={setChecked} />
        <VioletLabel htmlFor="controlled">{checked ? "On" : "Off"}</VioletLabel>
      </div>
    )
  },
}

export const Small: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <VioletSwitch id="small" size="sm" defaultChecked />
      <VioletLabel htmlFor="small">Compact switch</VioletLabel>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <VioletSwitch id="d1" disabled />
        <VioletLabel htmlFor="d1">Disabled off</VioletLabel>
      </div>
      <div className="flex items-center gap-2">
        <VioletSwitch id="d2" disabled defaultChecked />
        <VioletLabel htmlFor="d2">Disabled on</VioletLabel>
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between w-64">
        <VioletLabel htmlFor="wifi">Wi-Fi</VioletLabel>
        <VioletSwitch id="wifi" defaultChecked />
      </div>
      <div className="flex items-center justify-between w-64">
        <VioletLabel htmlFor="bluetooth">Bluetooth</VioletLabel>
        <VioletSwitch id="bluetooth" />
      </div>
      <div className="flex items-center justify-between w-64">
        <VioletLabel htmlFor="notifications">Notifications</VioletLabel>
        <VioletSwitch id="notifications" size="sm" defaultChecked />
      </div>
    </div>
  ),
}
