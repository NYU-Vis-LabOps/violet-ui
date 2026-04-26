import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletAutocompleteInput,
  type VioletAutocompleteInputOption,
} from "./violet-autocomplete-input"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletAutocompleteInput> = {
  title: "Components/VioletAutocompleteInput",
  component: VioletAutocompleteInput,
  decorators: [
    (Story) => (
      <div className="w-[360px] p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletAutocompleteInput>

const people: VioletAutocompleteInputOption[] = [
  {
    value: "ada@nyu.edu",
    label: "Ada Lovelace",
    description: "ada@nyu.edu",
  },
  {
    value: "grace@nyu.edu",
    label: "Grace Hopper",
    description: "grace@nyu.edu",
  },
  {
    value: "katherine@nyu.edu",
    label: "Katherine Johnson",
    description: "katherine@nyu.edu",
  },
  {
    value: "readonly@nyu.edu",
    label: "Readonly User",
    description: "Disabled option",
    disabled: true,
  },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div>
        <VioletLabel className="mb-1.5 block">Reference</VioletLabel>
        <VioletAutocompleteInput
          options={people}
          value={value}
          onValueChange={setValue}
          placeholder="Search people..."
        />
        <p className="mt-2 text-xs text-muted-foreground">Value: {value || "none"}</p>
      </div>
    )
  },
}

export const AllowCustomValue: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <VioletAutocompleteInput
        options={people}
        value={value}
        onValueChange={setValue}
        placeholder="Type or select email..."
        allowCustomValue
        emptyText="Press Enter or blur to use the typed value"
      />
    )
  },
}

export const RemoteLoading: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const visible = people.slice(0, Math.min(people.length, page * 2))

    return (
      <div>
        <VioletAutocompleteInput
          options={visible}
          value={value}
          onValueChange={setValue}
          placeholder="Remote search..."
          filterOptions={false}
          onSearchChange={setQuery}
          onLoadMore={() => setPage((current) => current + 1)}
          hasMoreOptions={visible.length < people.length}
          isLoadingOptions={query.length > 0 && visible.length < people.length}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Search query: {query || "none"}
        </p>
      </div>
    )
  },
}

export const Error: Story = {
  render: () => (
    <VioletAutocompleteInput
      options={people}
      value=""
      error
      errorMessage="Select a valid person or enter a custom email"
      placeholder="Search people..."
      allowCustomValue
    />
  ),
}
