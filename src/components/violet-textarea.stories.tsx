import type { Meta, StoryObj } from "@storybook/react"
import { VioletTextarea } from "./violet-textarea"

const meta: Meta<typeof VioletTextarea> = {
  title: "Components/VioletTextarea",
  component: VioletTextarea,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
  },
  args: {
    placeholder: "Enter text...",
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
type Story = StoryObj<typeof VioletTextarea>

export const Default: Story = {}

export const WithValue: Story = {
  args: { defaultValue: "This is a multiline textarea with some initial content." },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Cannot edit this content" },
}

export const Error: Story = {
  args: {
    error: true,
    errorMessage: "Reason for denial is required.",
    defaultValue: "",
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <div>
        <label className="text-sm font-medium mb-1 block">Default</label>
        <VioletTextarea placeholder="Enter remarks..." />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Disabled</label>
        <VioletTextarea placeholder="Disabled" disabled defaultValue="Read-only content" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Error</label>
        <VioletTextarea error errorMessage="This field is required." placeholder="Required field" />
      </div>
    </div>
  ),
}
