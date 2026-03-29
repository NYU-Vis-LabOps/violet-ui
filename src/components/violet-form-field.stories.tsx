import type { Meta, StoryObj } from "@storybook/react"
import { VioletFormField } from "./violet-form-field"
import { VioletInput } from "./violet-input"
import { VioletTextarea } from "./violet-textarea"
import { VioletSelect, VioletSelectTrigger, VioletSelectValue, VioletSelectContent, VioletSelectItem } from "./violet-select"
import { VioletCheckbox } from "./violet-checkbox"
import { VioletLabel } from "./violet-label"

const meta: Meta<typeof VioletFormField> = {
  title: "Components/VioletFormField",
  component: VioletFormField,
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletFormField>

export const Default: Story = {
  render: () => (
    <VioletFormField label="Full Name" htmlFor="name" required>
      <VioletInput id="name" placeholder="Enter your full name" />
    </VioletFormField>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <VioletFormField
      label="NYU ID"
      htmlFor="nyu-id"
      required
      description="Your 8-digit NYU identification number (e.g. N12345678)."
    >
      <VioletInput id="nyu-id" placeholder="N12345678" />
    </VioletFormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <VioletFormField
      label="Email"
      htmlFor="email"
      required
      error
      errorMessage="Valid NYU email is required."
    >
      <VioletInput id="email" error placeholder="name@nyu.edu" />
    </VioletFormField>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <VioletFormField label="Reason for Denial" htmlFor="reason" required>
      <VioletTextarea id="reason" placeholder="Provide a reason..." rows={3} />
    </VioletFormField>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <VioletFormField label="Department" htmlFor="dept" required>
      <VioletSelect>
        <VioletSelectTrigger>
          <VioletSelectValue placeholder="Select department" />
        </VioletSelectTrigger>
        <VioletSelectContent>
          <VioletSelectItem value="cs">Computer Science</VioletSelectItem>
          <VioletSelectItem value="math">Mathematics</VioletSelectItem>
          <VioletSelectItem value="physics">Physics</VioletSelectItem>
        </VioletSelectContent>
      </VioletSelect>
    </VioletFormField>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <div className="space-y-4">
      <VioletFormField label="Full Name" htmlFor="f-name" required>
        <VioletInput id="f-name" placeholder="Enter your full name" />
      </VioletFormField>
      <VioletFormField label="NYU ID" htmlFor="f-id" required description="8-digit NYU ID.">
        <VioletInput id="f-id" placeholder="N12345678" />
      </VioletFormField>
      <VioletFormField label="Department" htmlFor="f-dept" required>
        <VioletSelect>
          <VioletSelectTrigger>
            <VioletSelectValue placeholder="Select department" />
          </VioletSelectTrigger>
          <VioletSelectContent>
            <VioletSelectItem value="cs">Computer Science</VioletSelectItem>
            <VioletSelectItem value="math">Mathematics</VioletSelectItem>
          </VioletSelectContent>
        </VioletSelect>
      </VioletFormField>
      <VioletFormField label="Remarks" htmlFor="f-remarks">
        <VioletTextarea id="f-remarks" placeholder="Optional remarks..." rows={3} />
      </VioletFormField>
      <div className="flex items-center gap-2">
        <VioletCheckbox id="f-agree" />
        <VioletLabel htmlFor="f-agree">I confirm the information is accurate</VioletLabel>
      </div>
    </div>
  ),
}
