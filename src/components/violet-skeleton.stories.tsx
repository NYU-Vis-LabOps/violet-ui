import type { Meta, StoryObj } from "@storybook/react"
import { VioletSkeleton } from "./violet-skeleton"

const meta: Meta<typeof VioletSkeleton> = {
  title: "Components/VioletSkeleton",
  component: VioletSkeleton,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletSkeleton>

export const Default: Story = {
  render: () => <VioletSkeleton className="h-4 w-[250px]" />,
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <VioletSkeleton className="h-[125px] w-full rounded-lg" />
      <div className="space-y-2">
        <VioletSkeleton className="h-4 w-[250px]" />
        <VioletSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-3">
      <VioletSkeleton className="h-9 w-full" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <VioletSkeleton className="h-6 flex-1" />
          <VioletSkeleton className="h-6 w-[100px]" />
          <VioletSkeleton className="h-6 w-[80px]" />
        </div>
      ))}
    </div>
  ),
}

export const FormSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <VioletSkeleton className="h-4 w-[80px]" />
        <VioletSkeleton className="h-9 w-full" />
      </div>
      <div className="space-y-1.5">
        <VioletSkeleton className="h-4 w-[120px]" />
        <VioletSkeleton className="h-9 w-full" />
      </div>
      <div className="space-y-1.5">
        <VioletSkeleton className="h-4 w-[60px]" />
        <VioletSkeleton className="h-[80px] w-full" />
      </div>
    </div>
  ),
}
