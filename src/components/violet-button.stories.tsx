import type { Meta, StoryObj } from "@storybook/react"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletButton> = {
  title: "Components/VioletButton",
  component: VioletButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "ghost", "outline", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon", "pill"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Button",
  },
}

export default meta
type Story = StoryObj<typeof VioletButton>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: "secondary" },
}

export const Destructive: Story = {
  args: { variant: "destructive" },
}

export const Ghost: Story = {
  args: { variant: "ghost" },
}

export const Outline: Story = {
  args: { variant: "outline" },
}

export const Link: Story = {
  args: { variant: "link" },
}

export const Small: Story = {
  args: { size: "sm" },
}

export const Large: Story = {
  args: { size: "lg" },
}

export const Pill: Story = {
  args: { size: "pill" },
}

export const Icon: Story = {
  args: {
    size: "icon",
    children: (
      <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
        <path
          d="M7.5 1.5v12M1.5 7.5h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <VioletButton variant="default">Default</VioletButton>
      <VioletButton variant="secondary">Secondary</VioletButton>
      <VioletButton variant="destructive">Destructive</VioletButton>
      <VioletButton variant="ghost">Ghost</VioletButton>
      <VioletButton variant="outline">Outline</VioletButton>
      <VioletButton variant="link">Link</VioletButton>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <VioletButton size="sm">Small</VioletButton>
      <VioletButton size="default">Default</VioletButton>
      <VioletButton size="lg">Large</VioletButton>
      <VioletButton size="pill">Pill</VioletButton>
    </div>
  ),
}

export const AsChild: Story = {
  render: () => (
    <VioletButton asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Link as Button
      </a>
    </VioletButton>
  ),
}
