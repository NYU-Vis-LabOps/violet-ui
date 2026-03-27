import type { Meta, StoryObj } from "@storybook/react"
import { VioletNavbar } from "./violet-navbar"

const sampleLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Docs", href: "https://docs.example.com", external: true },
]

const sampleUser = { name: "Jane Doe" }

const meta: Meta<typeof VioletNavbar> = {
  title: "Components/VioletNavbar",
  component: VioletNavbar,
  argTypes: {
    onMenuClick: { action: "menuClick" },
  },
  args: {
    links: sampleLinks,
    user: sampleUser,
    logo: <span className="text-primary-foreground font-bold text-lg">Violet UI</span>,
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletNavbar>

export const Default: Story = {}

export const WithAvatar: Story = {
  args: {
    user: {
      name: "Jane Doe",
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=JD&backgroundColor=ab82c5",
    },
  },
}

export const NoUser: Story = {
  args: { user: undefined },
}

export const MinimalLinks: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ],
  },
}
