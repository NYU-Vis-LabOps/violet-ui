import { useState, useEffect } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletProgress } from "./violet-progress"

const meta: Meta<typeof VioletProgress> = {
  title: "Components/VioletProgress",
  component: VioletProgress,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    size: { control: "select", options: ["sm", "default", "lg"] },
    variant: { control: "select", options: ["default", "success", "warning", "destructive"] },
  },
}

export default meta
type Story = StoryObj<typeof VioletProgress>

export const Default: Story = {
  args: { value: 60 },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <p className="text-sm text-muted-foreground mb-1">Small</p>
        <VioletProgress value={40} size="sm" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">Default</p>
        <VioletProgress value={60} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">Large</p>
        <VioletProgress value={80} size="lg" />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <p className="text-sm text-muted-foreground mb-1">Default (primary)</p>
        <VioletProgress value={70} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">Success</p>
        <VioletProgress value={100} variant="success" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">Warning</p>
        <VioletProgress value={55} variant="warning" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">Destructive</p>
        <VioletProgress value={30} variant="destructive" />
      </div>
    </div>
  ),
}

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        setValue((prev) => (prev >= 100 ? 0 : prev + 2))
      }, 100)
      return () => clearInterval(timer)
    }, [])
    return (
      <div className="w-80">
        <p className="text-sm text-muted-foreground mb-2">Loading... {value}%</p>
        <VioletProgress value={value} />
      </div>
    )
  },
}
