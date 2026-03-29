import type { Meta, StoryObj } from "@storybook/react"
import { VioletFileUpload } from "./violet-file-upload"

const meta: Meta<typeof VioletFileUpload> = {
  title: "Components/VioletFileUpload",
  component: VioletFileUpload,
  argTypes: {
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletFileUpload>

export const Default: Story = {}

export const Multiple: Story = {
  args: { multiple: true },
}

export const AcceptImages: Story = {
  args: { accept: "image/*" },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithError: Story = {
  args: {
    error: true,
    errorMessage: "Attachment is required for this department.",
  },
}
