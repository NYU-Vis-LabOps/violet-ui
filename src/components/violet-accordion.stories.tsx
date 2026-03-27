import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletAccordion,
  VioletAccordionItem,
  VioletAccordionTrigger,
  VioletAccordionContent,
} from "./violet-accordion"

const meta: Meta<typeof VioletAccordion> = {
  title: "Components/VioletAccordion",
  component: VioletAccordion,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
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
type Story = StoryObj<typeof VioletAccordion>

export const Default: Story = {
  render: () => (
    <VioletAccordion type="single" collapsible>
      <VioletAccordionItem value="item-1">
        <VioletAccordionTrigger>What is violet-ui?</VioletAccordionTrigger>
        <VioletAccordionContent>
          A custom component registry based on shadcn/ui, themed with NYU brand colors.
        </VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-2">
        <VioletAccordionTrigger>How do I install components?</VioletAccordionTrigger>
        <VioletAccordionContent>
          Use the shadcn CLI to add components from the violet-ui registry URL.
        </VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-3">
        <VioletAccordionTrigger>Can I customize the theme?</VioletAccordionTrigger>
        <VioletAccordionContent>
          Yes. Override the CSS custom properties defined in violet-theme.css to match your brand.
        </VioletAccordionContent>
      </VioletAccordionItem>
    </VioletAccordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <VioletAccordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <VioletAccordionItem value="item-1">
        <VioletAccordionTrigger>Section One</VioletAccordionTrigger>
        <VioletAccordionContent>
          Content for section one. Multiple items can be open at the same time.
        </VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-2">
        <VioletAccordionTrigger>Section Two</VioletAccordionTrigger>
        <VioletAccordionContent>
          Content for section two. This is also open by default.
        </VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-3">
        <VioletAccordionTrigger>Section Three</VioletAccordionTrigger>
        <VioletAccordionContent>
          Content for section three.
        </VioletAccordionContent>
      </VioletAccordionItem>
    </VioletAccordion>
  ),
}

export const SingleDefaultOpen: Story = {
  render: () => (
    <VioletAccordion type="single" collapsible defaultValue="item-2">
      <VioletAccordionItem value="item-1">
        <VioletAccordionTrigger>First Item</VioletAccordionTrigger>
        <VioletAccordionContent>First item content.</VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-2">
        <VioletAccordionTrigger>Second Item (default open)</VioletAccordionTrigger>
        <VioletAccordionContent>
          This item is open by default.
        </VioletAccordionContent>
      </VioletAccordionItem>
      <VioletAccordionItem value="item-3">
        <VioletAccordionTrigger>Third Item</VioletAccordionTrigger>
        <VioletAccordionContent>Third item content.</VioletAccordionContent>
      </VioletAccordionItem>
    </VioletAccordion>
  ),
}
