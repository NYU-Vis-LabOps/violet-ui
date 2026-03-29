import type { Meta, StoryObj } from "@storybook/react"
import { VioletAlert, VioletAlertTitle, VioletAlertDescription } from "./violet-alert"

const meta: Meta<typeof VioletAlert> = {
  title: "Components/VioletAlert",
  component: VioletAlert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "warning", "destructive", "success"],
    },
    dismissible: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletAlert>

export const Default: Story = {
  render: () => (
    <VioletAlert>
      <VioletAlertTitle>Notice</VioletAlertTitle>
      <VioletAlertDescription>
        Your request has been submitted and is pending review.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const Info: Story = {
  render: () => (
    <VioletAlert variant="info">
      <VioletAlertTitle>New version available</VioletAlertTitle>
      <VioletAlertDescription>
        The system will be updated during the next maintenance window.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const Warning: Story = {
  render: () => (
    <VioletAlert variant="warning">
      <VioletAlertTitle>SLA Warning</VioletAlertTitle>
      <VioletAlertDescription>
        3 requests are approaching their approval deadline.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <VioletAlert variant="destructive">
      <VioletAlertTitle>Submission failed</VioletAlertTitle>
      <VioletAlertDescription>
        Required fields are missing. Please review and try again.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const Success: Story = {
  render: () => (
    <VioletAlert variant="success">
      <VioletAlertTitle>Access granted</VioletAlertTitle>
      <VioletAlertDescription>
        Room access for Lab 1201 has been approved and activated.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <VioletAlert variant="info" dismissible onDismiss={() => {}}>
      <VioletAlertTitle>Pending confirmation</VioletAlertTitle>
      <VioletAlertDescription>
        Some form fields are awaiting client confirmation.
      </VioletAlertDescription>
    </VioletAlert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <VioletAlert>
        <VioletAlertTitle>Default</VioletAlertTitle>
        <VioletAlertDescription>Neutral notification.</VioletAlertDescription>
      </VioletAlert>
      <VioletAlert variant="info">
        <VioletAlertTitle>Info</VioletAlertTitle>
        <VioletAlertDescription>Informational message.</VioletAlertDescription>
      </VioletAlert>
      <VioletAlert variant="warning">
        <VioletAlertTitle>Warning</VioletAlertTitle>
        <VioletAlertDescription>Warning message.</VioletAlertDescription>
      </VioletAlert>
      <VioletAlert variant="destructive">
        <VioletAlertTitle>Error</VioletAlertTitle>
        <VioletAlertDescription>Error message.</VioletAlertDescription>
      </VioletAlert>
      <VioletAlert variant="success">
        <VioletAlertTitle>Success</VioletAlertTitle>
        <VioletAlertDescription>Success message.</VioletAlertDescription>
      </VioletAlert>
    </div>
  ),
}
