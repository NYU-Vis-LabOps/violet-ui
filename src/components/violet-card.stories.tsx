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
    <VioletCard {...args} className="w-full max-w-[380px]">
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
    <VioletCard variant="bordered" borderColor="hsl(275, 90%, 29%)" className="w-full max-w-[380px]">
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>With a restrained accent border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card uses a full border accent.</p>
      </CardContent>
    </VioletCard>
  ),
}

export const Elevated: Story = {
  render: () => (
    <VioletCard variant="elevated" className="w-full max-w-[380px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With a subtle lifted surface.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card keeps elevation quiet and steady.</p>
      </CardContent>
    </VioletCard>
  ),
}

export const Stat: Story = {
  render: () => (
    <VioletCard variant="stat" className="w-full max-w-[220px]">
      <p className="text-sm text-muted-foreground">Total Users</p>
      <p className="text-3xl font-bold">1,234</p>
    </VioletCard>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      <VioletCard>
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent><p>Default card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="bordered" borderColor="hsl(275, 90%, 29%)">
        <CardHeader>
          <CardTitle>Bordered</CardTitle>
        </CardHeader>
        <CardContent><p>Bordered card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent><p>Elevated card variant.</p></CardContent>
      </VioletCard>
      <VioletCard variant="stat">
        <p className="text-sm text-muted-foreground">Stat</p>
        <p className="text-3xl font-bold">42</p>
      </VioletCard>
    </div>
  ),
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      <VioletCard className="min-h-32">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Base card</p>
        </CardContent>
      </VioletCard>
      <VioletCard variant="elevated" className="min-h-32">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">With shadow</p>
        </CardContent>
      </VioletCard>
      <VioletCard variant="stat" className="min-h-32 sm:col-span-2 lg:col-span-1">
        <CardHeader className="h-full justify-between gap-6">
          <CardDescription className="max-w-36">Total Students</CardDescription>
          <CardTitle className="text-2xl">1,284</CardTitle>
        </CardHeader>
      </VioletCard>
    </div>
  ),
}

export const NarrowContent: Story = {
  render: () => (
    <div className="w-56">
      <VioletCard>
        <CardHeader>
          <CardTitle>VeryLongResearchDatasetNameWithoutConvenientBreaks</CardTitle>
          <CardDescription>
            Approval workflow configuration for a compact review panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This card stays inside narrow containers without forcing horizontal overflow.
          </p>
        </CardContent>
      </VioletCard>
    </div>
  ),
}
