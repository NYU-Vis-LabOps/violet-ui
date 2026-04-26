import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletMultiCombobox,
  type VioletMultiComboboxOption,
} from "./violet-multi-combobox"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletMultiCombobox> = {
  title: "Components/VioletMultiCombobox",
  component: VioletMultiCombobox,
  decorators: [
    (Story) => (
      <div className="w-[360px] p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletMultiCombobox>

const options: VioletMultiComboboxOption[] = [
  { value: "pending", label: "Pending", group: "Request status" },
  { value: "approved", label: "Approved", group: "Request status" },
  { value: "denied", label: "Denied", group: "Request status" },
  { value: "bobst", label: "Bobst Library", group: "Buildings" },
  { value: "kimmel", label: "Kimmel Center", group: "Buildings" },
  { value: "tisch", label: "Tisch Hall", group: "Buildings" },
  {
    value: "archived",
    label: "Archived",
    group: "Request status",
    description: "Disabled example",
    disabled: true,
  },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["pending"])
    return (
      <div>
        <VioletLabel className="mb-1.5 block">Filters</VioletLabel>
        <VioletMultiCombobox
          options={options}
          value={value}
          onValueChange={setValue}
          placeholder="Select filters..."
          searchPlaceholder="Search filters..."
          selectedLabel="filters"
          showSelectAll
        />
      </div>
    )
  },
}

export const WithoutChips: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["bobst", "tisch"])
    return (
      <VioletMultiCombobox
        options={options}
        value={value}
        onValueChange={setValue}
        showSelectedChips={false}
        selectedLabel="locations"
      />
    )
  },
}

export const Error: Story = {
  render: () => (
    <VioletMultiCombobox
      options={options}
      value={[]}
      error
      errorMessage="Choose at least one filter"
      placeholder="Select filters..."
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <VioletMultiCombobox
      options={options}
      value={["pending", "approved"]}
      disabled
      selectedLabel="filters"
    />
  ),
}
