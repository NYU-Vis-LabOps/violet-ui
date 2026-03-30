import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletConfirmDialog, VioletConfirmDialogTrigger } from "./violet-confirm-dialog"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletConfirmDialog> = {
  title: "Components/VioletConfirmDialog",
  component: VioletConfirmDialog,
}

export default meta
type Story = StoryObj<typeof VioletConfirmDialog>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <VioletConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Are you sure?"
        description="This action will save your changes and update the record."
        onConfirm={() => setOpen(false)}
      >
        <VioletConfirmDialogTrigger asChild>
          <VioletButton>Save Changes</VioletButton>
        </VioletConfirmDialogTrigger>
      </VioletConfirmDialog>
    )
  },
}

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <VioletConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete request?"
        description="This will permanently delete the room access request. This action cannot be undone."
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={() => setOpen(false)}
      >
        <VioletConfirmDialogTrigger asChild>
          <VioletButton variant="destructive">Delete Request</VioletButton>
        </VioletConfirmDialogTrigger>
      </VioletConfirmDialog>
    )
  },
}

export const CustomLabels: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <VioletConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Submit for approval?"
        description="Once submitted, the request will be sent to the building manager for review."
        confirmLabel="Yes, Submit"
        cancelLabel="Go Back"
        onConfirm={() => setOpen(false)}
      >
        <VioletConfirmDialogTrigger asChild>
          <VioletButton>Submit Request</VioletButton>
        </VioletConfirmDialogTrigger>
      </VioletConfirmDialog>
    )
  },
}

export const WithTrigger: Story = {
  render: () => (
    <VioletConfirmDialog
      title="Revoke access?"
      description="The user will immediately lose access to the room."
      confirmLabel="Revoke"
      variant="destructive"
      onConfirm={() => console.log("Access revoked")}
    >
      <VioletConfirmDialogTrigger asChild>
        <VioletButton variant="outline">Revoke Access</VioletButton>
      </VioletConfirmDialogTrigger>
    </VioletConfirmDialog>
  ),
}
