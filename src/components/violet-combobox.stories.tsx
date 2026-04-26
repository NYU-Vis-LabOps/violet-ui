import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletCombobox, type ComboboxOption } from "./violet-combobox"
import { VioletLabel } from "./violet-label"
import {
  VioletModal,
  VioletModalContent,
  VioletModalTrigger,
  ModalBody,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "./violet-modal"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletCombobox> = {
  title: "Components/VioletCombobox",
  component: VioletCombobox,
}

export default meta
type Story = StoryObj<typeof VioletCombobox>

const buildings: ComboboxOption[] = [
  { value: "bobst", label: "Bobst Library" },
  { value: "kimmel", label: "Kimmel Center" },
  { value: "silver", label: "Silver Center" },
  { value: "tisch", label: "Tisch Hall" },
  { value: "gould", label: "Gould Plaza" },
  { value: "waverly", label: "Waverly Building" },
  { value: "meyer", label: "Meyer Hall" },
  { value: "brown", label: "Brown Building" },
]

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-72">
        <VioletLabel className="mb-1.5 block">Building</VioletLabel>
        <VioletCombobox
          options={buildings}
          value={value}
          onValueChange={setValue}
          placeholder="Select building..."
        />
        {value && (
          <p className="mt-2 text-xs text-muted-foreground">Selected: {value}</p>
        )}
      </div>
    )
  },
}

export const AllowCustomValue: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-72">
        <VioletLabel className="mb-1.5 block">PI Email</VioletLabel>
        <VioletCombobox
          options={[
            { value: "smith@nyu.edu", label: "smith@nyu.edu" },
            { value: "jones@nyu.edu", label: "jones@nyu.edu" },
            { value: "chen@nyu.edu", label: "chen@nyu.edu" },
          ]}
          value={value}
          onValueChange={setValue}
          placeholder="Type or select email..."
          allowCustomValue
          emptyText="Press Enter to use custom value"
        />
        {value && (
          <p className="mt-2 text-xs text-muted-foreground">Value: {value}</p>
        )}
      </div>
    )
  },
}

export const Error: Story = {
  render: () => (
    <div className="w-72">
      <VioletLabel className="mb-1.5 block">Building</VioletLabel>
      <VioletCombobox
        options={buildings}
        error
        errorMessage="Please select a building"
        placeholder="Select building..."
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <VioletLabel className="mb-1.5 block">Building</VioletLabel>
      <VioletCombobox
        options={buildings}
        disabled
        placeholder="Select building..."
      />
    </div>
  ),
}

const manyOptions: ComboboxOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `room-${i + 1}`,
  label: `Room ${100 + i + 1}`,
}))

export const LargeList: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-72">
        <VioletLabel className="mb-1.5 block">Room</VioletLabel>
        <VioletCombobox
          options={manyOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Search rooms..."
        />
      </div>
    )
  },
}

const groupedOptions: ComboboxOption[] = [
  { value: "bobst", label: "Bobst Library", group: "Libraries" },
  { value: "courant", label: "Courant Library", group: "Libraries" },
  { value: "kimmel", label: "Kimmel Center", group: "Student Life" },
  { value: "palladium", label: "Palladium Hall", group: "Student Life" },
  { value: "silver", label: "Silver Center", group: "Academic" },
  { value: "tisch", label: "Tisch Hall", group: "Academic" },
  { value: "meyer", label: "Meyer Hall", group: "Academic" },
]

export const Grouped: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-72">
        <VioletLabel className="mb-1.5 block">Building</VioletLabel>
        <VioletCombobox
          options={groupedOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select building..."
        />
      </div>
    )
  },
}

export const InScrollableModal: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <VioletModal>
        <VioletModalTrigger asChild>
          <VioletButton>Open scrollable modal</VioletButton>
        </VioletModalTrigger>
        <VioletModalContent>
          <ModalHeader>
            <ModalTitle>Scrollable combobox shell</ModalTitle>
            <ModalDescription>
              The option list should receive wheel events without scrolling the modal body.
            </ModalDescription>
          </ModalHeader>
          <ModalBody className="max-h-80 space-y-4">
            <div className="h-40 rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              Content above the field
            </div>
            <div className="w-72">
              <VioletLabel className="mb-1.5 block">Room</VioletLabel>
              <VioletCombobox
                options={manyOptions}
                value={value}
                onValueChange={setValue}
                placeholder="Search rooms..."
              />
            </div>
            <div className="h-56 rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              Content below the field
            </div>
          </ModalBody>
        </VioletModalContent>
      </VioletModal>
    )
  },
}
