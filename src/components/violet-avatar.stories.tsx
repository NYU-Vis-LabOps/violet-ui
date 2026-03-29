import type { Meta, StoryObj } from "@storybook/react"
import { VioletAvatar, VioletAvatarImage, VioletAvatarFallback } from "./violet-avatar"

const meta: Meta<typeof VioletAvatar> = {
  title: "Components/VioletAvatar",
  component: VioletAvatar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof VioletAvatar>

export const WithImage: Story = {
  render: (args) => (
    <VioletAvatar {...args}>
      <VioletAvatarImage src="https://i.pravatar.cc/150?u=violet" alt="User" />
      <VioletAvatarFallback>JD</VioletAvatarFallback>
    </VioletAvatar>
  ),
}

export const WithFallback: Story = {
  render: (args) => (
    <VioletAvatar {...args}>
      <VioletAvatarImage src="/broken-image.jpg" alt="User" />
      <VioletAvatarFallback>JD</VioletAvatarFallback>
    </VioletAvatar>
  ),
}

export const Small: Story = {
  args: { size: "sm" },
  render: (args) => (
    <VioletAvatar {...args}>
      <VioletAvatarFallback>AB</VioletAvatarFallback>
    </VioletAvatar>
  ),
}

export const Large: Story = {
  args: { size: "lg" },
  render: (args) => (
    <VioletAvatar {...args}>
      <VioletAvatarFallback>CD</VioletAvatarFallback>
    </VioletAvatar>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <VioletAvatar size="sm">
        <VioletAvatarFallback>SM</VioletAvatarFallback>
      </VioletAvatar>
      <VioletAvatar size="default">
        <VioletAvatarFallback>MD</VioletAvatarFallback>
      </VioletAvatar>
      <VioletAvatar size="lg">
        <VioletAvatarFallback>LG</VioletAvatarFallback>
      </VioletAvatar>
    </div>
  ),
}
