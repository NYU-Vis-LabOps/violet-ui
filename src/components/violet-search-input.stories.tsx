import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletSearchInput } from "./violet-search-input"

const meta: Meta<typeof VioletSearchInput> = {
  title: "Components/VioletSearchInput",
  component: VioletSearchInput,
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletSearchInput>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <VioletSearchInput
        placeholder="Search requests..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("Lab 1201")
    return (
      <VioletSearchInput
        placeholder="Search requests..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <VioletSearchInput
      placeholder="Search disabled"
      value=""
      disabled
    />
  ),
}
