import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletTooltipProvider,
  VioletTooltip,
  VioletTooltipTrigger,
  VioletTooltipContent,
} from "./violet-tooltip"
import { VioletButton } from "./violet-button"

const meta: Meta = {
  title: "Components/VioletTooltip",
  decorators: [
    (Story) => (
      <VioletTooltipProvider delayDuration={200}>
        <div className="flex items-center justify-center p-20">
          <Story />
        </div>
      </VioletTooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <VioletTooltip>
      <VioletTooltipTrigger asChild>
        <VioletButton variant="outline">Hover me</VioletButton>
      </VioletTooltipTrigger>
      <VioletTooltipContent>
        This is a tooltip
      </VioletTooltipContent>
    </VioletTooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <VioletTooltip key={side}>
          <VioletTooltipTrigger asChild>
            <VioletButton variant="ghost" size="sm">{side}</VioletButton>
          </VioletTooltipTrigger>
          <VioletTooltipContent side={side}>
            Tooltip on {side}
          </VioletTooltipContent>
        </VioletTooltip>
      ))}
    </div>
  ),
}
