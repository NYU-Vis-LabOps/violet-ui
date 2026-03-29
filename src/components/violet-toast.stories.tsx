import type { Meta, StoryObj } from "@storybook/react"
import { VioletToaster, toast } from "./violet-toast"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletToaster> = {
  title: "Components/VioletToast",
  component: VioletToaster,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <VioletToaster position="bottom-right" />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletToaster>

export const Default: Story = {
  render: () => (
    <VioletButton onClick={() => toast("Request submitted successfully.")}>
      Show Toast
    </VioletButton>
  ),
}

export const Success: Story = {
  render: () => (
    <VioletButton
      onClick={() =>
        toast.success("Approved", {
          description: "Request RAR-20260328-00042 has been approved.",
        })
      }
    >
      Success Toast
    </VioletButton>
  ),
}

export const ErrorToast: Story = {
  name: "Error",
  render: () => (
    <VioletButton
      variant="destructive"
      onClick={() =>
        toast.error("Submission failed", {
          description: "Please check required fields and try again.",
        })
      }
    >
      Error Toast
    </VioletButton>
  ),
}

export const WithAction: Story = {
  render: () => (
    <VioletButton
      variant="outline"
      onClick={() =>
        toast("Request denied", {
          description: "The approver has denied your request.",
          action: {
            label: "View Details",
            onClick: () => {},
          },
        })
      }
    >
      Toast with Action
    </VioletButton>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <VioletButton variant="secondary" onClick={() => toast("Default notification")}>
        Default
      </VioletButton>
      <VioletButton onClick={() => toast.success("Operation completed")}>
        Success
      </VioletButton>
      <VioletButton variant="destructive" onClick={() => toast.error("Something went wrong")}>
        Error
      </VioletButton>
      <VioletButton variant="outline" onClick={() => toast.warning("Check your input")}>
        Warning
      </VioletButton>
      <VioletButton variant="ghost" onClick={() => toast.info("New version available")}>
        Info
      </VioletButton>
    </div>
  ),
}
