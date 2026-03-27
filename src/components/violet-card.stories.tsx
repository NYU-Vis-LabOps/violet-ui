import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./violet-card"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletCard> = {
  title: "Components/VioletCard",
  component: VioletCard,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated", "stat"],
    },
    borderColor: { control: "color" },
  },
}

export default meta
type Story = StoryObj<typeof VioletCard>

export const Default: Story = {
  render: (args) => (
    <VioletCard {...args} className="w-[380px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with any elements you need.</p>
      </CardContent>
      <CardFooter>
        <VioletButton>Action</VioletButton>
      </CardFooter>
    </VioletCard>
  ),
}

export const Bordered: Story = {
  render: () => (
    <VioletCard variant="bordered" borderColor="hsl(275, 90%, 29%)" className="w-[380px]">
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>With a colored left border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a left border accent.</p>
      </CardContent>
    </VioletCard>
  ),
}

export const Elevated: Story = {
  render: () => (
    <VioletCard variant="elevated" className="w-[380px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With a stronger shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has an elevated shadow style.</p>
      </CardContent>
    </VioletCard>
  ),
}

export const Stat: Story = {
  render: () => (
    <VioletCard variant="stat" className="w-[200px]">
      <p className="text-sm text-muted-foreground">Total Users</p>
      <p className="text-3xl font-bold">1,234</p>
    </VioletCard>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <VioletCard className="w-[250px]">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent><p>Default card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="bordered" borderColor="hsl(275, 90%, 29%)" className="w-[250px]">
        <CardHeader>
          <CardTitle>Bordered</CardTitle>
        </CardHeader>
        <CardContent><p>Bordered card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="elevated" className="w-[250px]">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent><p>Elevated card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="stat" className="w-[250px]">
        <p className="text-sm text-muted-foreground">Stat</p>
        <p className="text-3xl font-bold">42</p>
      </VioletCard>
    </div>
  ),
}
