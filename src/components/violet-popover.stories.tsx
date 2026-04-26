import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletPopover,
  VioletPopoverContent,
  VioletPopoverTrigger,
} from "./violet-popover"
import { violetButtonVariants } from "./violet-button"
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
import { cn } from "@/lib/utils"

const meta: Meta<typeof VioletPopoverContent> = {
  title: "Components/VioletPopover",
  component: VioletPopoverContent,
}

export default meta
type Story = StoryObj<typeof VioletPopoverContent>

export const Default: Story = {
  render: () => (
    <VioletPopover>
      <VioletPopoverTrigger
        className={cn(violetButtonVariants({ variant: "outline" }))}
      >
        Open popover
      </VioletPopoverTrigger>
      <VioletPopoverContent className="w-64">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">Popover content</p>
          <p className="text-sm text-muted-foreground">
            Content remains clickable and layered above the page.
          </p>
        </div>
      </VioletPopoverContent>
    </VioletPopover>
  ),
}

export const InModalScrollableShell: Story = {
  render: () => {
    const [value, setValue] = useState("Standard access")

    return (
      <VioletModal>
        <VioletModalTrigger asChild>
          <VioletButton>Open modal shell</VioletButton>
        </VioletModalTrigger>
        <VioletModalContent>
          <ModalHeader>
            <ModalTitle>Popover in modal</ModalTitle>
            <ModalDescription>
              The popover keeps pointer events active while preserving isolated stacking.
            </ModalDescription>
          </ModalHeader>
          <ModalBody className="max-h-80 space-y-4">
            <div className="h-36 rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              Scrollable content above
            </div>
            <VioletPopover>
              <VioletPopoverTrigger
                className={cn(violetButtonVariants({ variant: "outline" }))}
              >
                {value}
              </VioletPopoverTrigger>
              <VioletPopoverContent align="start" className="w-56 p-1">
                {["Standard access", "Extended access", "Temporary access"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="block w-full rounded-sm px-3 py-2 text-left text-sm text-foreground hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      onClick={() => setValue(item)}
                    >
                      {item}
                    </button>
                  )
                )}
              </VioletPopoverContent>
            </VioletPopover>
            <div className="h-56 rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              Scrollable content below
            </div>
          </ModalBody>
        </VioletModalContent>
      </VioletModal>
    )
  },
}
