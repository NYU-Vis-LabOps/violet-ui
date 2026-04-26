import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletModal,
  VioletModalTrigger,
  VioletModalClose,
  VioletModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from "./violet-modal"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletModalContent> = {
  title: "Components/VioletModal",
  component: VioletModalContent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
    },
  },
}

export default meta
type Story = StoryObj<typeof VioletModalContent>

const ModalTemplate = ({ size }: { size?: "sm" | "default" | "lg" | "xl" | "full" }) => (
  <VioletModal>
    <VioletModalTrigger asChild>
      <VioletButton>Open Modal ({size ?? "default"})</VioletButton>
    </VioletModalTrigger>
    <VioletModalContent size={size}>
      <ModalHeader>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalDescription>This is a description of the modal.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <p>Modal body content goes here. You can place any content inside.</p>
      </ModalBody>
      <ModalFooter>
        <VioletModalClose asChild>
          <VioletButton variant="outline">Cancel</VioletButton>
        </VioletModalClose>
        <VioletButton>Confirm</VioletButton>
      </ModalFooter>
    </VioletModalContent>
  </VioletModal>
)

export const Default: Story = {
  render: () => <ModalTemplate />,
}

export const Small: Story = {
  render: () => <ModalTemplate size="sm" />,
}

export const Large: Story = {
  render: () => <ModalTemplate size="lg" />,
}

export const ExtraLarge: Story = {
  render: () => <ModalTemplate size="xl" />,
}

export const Full: Story = {
  render: () => <ModalTemplate size="full" />,
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ModalTemplate size="sm" />
      <ModalTemplate />
      <ModalTemplate size="lg" />
      <ModalTemplate size="xl" />
      <ModalTemplate size="full" />
    </div>
  ),
}

export const SemanticTitleDescription: Story = {
  render: () => (
    <VioletModal>
      <VioletModalTrigger asChild>
        <VioletButton>Open semantic modal</VioletButton>
      </VioletModalTrigger>
      <VioletModalContent>
        <ModalHeader>
          <ModalTitle>Dialog title primitive</ModalTitle>
          <ModalDescription>
            This description is wired through the Radix Dialog description primitive.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-muted-foreground">
            Screen readers should receive the title and description without Radix warnings.
          </p>
        </ModalBody>
      </VioletModalContent>
    </VioletModal>
  ),
}
