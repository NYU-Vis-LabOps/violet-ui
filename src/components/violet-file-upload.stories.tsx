import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletFileUpload } from "./violet-file-upload"
import { VioletButton } from "./violet-button"

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

export const Resettable: Story = {
  render: () => {
    const [resetKey, setResetKey] = useState(0)
    const [fileNames, setFileNames] = useState<string[]>([])

    return (
      <div className="space-y-3">
        <VioletFileUpload
          multiple
          resetKey={resetKey}
          onChange={(files) => setFileNames(files.map((file) => file.name))}
        />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {fileNames.length > 0
              ? `${fileNames.length} file(s): ${fileNames.join(", ")}`
              : "No files selected"}
          </p>
          <VioletButton
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setResetKey((key) => key + 1)}
          >
            Reset
          </VioletButton>
        </div>
      </div>
    )
  },
}
