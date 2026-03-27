import type { Meta, StoryObj } from "@storybook/react"
import { VioletInput } from "./violet-input"

const meta: Meta<typeof VioletInput> = {
  title: "Components/VioletInput",
  component: VioletInput,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
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
type Story = StoryObj<typeof VioletInput>

export const Default: Story = {}

export const WithValue: Story = {
  args: { defaultValue: "Hello World" },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled input" },
}

export const Error: Story = {
  args: {
    error: true,
    errorMessage: "This field is required.",
    defaultValue: "",
  },
}

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password..." },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <div>
        <label className="text-sm font-medium mb-1 block">Default</label>
        <VioletInput placeholder="Default input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Disabled</label>
        <VioletInput placeholder="Disabled" disabled defaultValue="Cannot edit" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Error</label>
        <VioletInput error errorMessage="Email is required." placeholder="Email" />
      </div>
    </div>
  ),
}
