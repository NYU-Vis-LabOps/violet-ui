import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletDropdownMenu,
  VioletDropdownMenuTrigger,
  VioletDropdownMenuContent,
  VioletDropdownMenuItem,
  VioletDropdownMenuSeparator,
  VioletDropdownMenuLabel,
} from "./violet-dropdown-menu"
import { VioletButton } from "./violet-button"

const meta: Meta = {
  title: "Components/VioletDropdownMenu",
  decorators: [
    (Story) => (
      <div className="flex justify-center p-20">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <VioletDropdownMenu>
      <VioletDropdownMenuTrigger asChild>
        <VioletButton variant="outline">Actions</VioletButton>
      </VioletDropdownMenuTrigger>
      <VioletDropdownMenuContent>
        <VioletDropdownMenuLabel>Request Actions</VioletDropdownMenuLabel>
        <VioletDropdownMenuSeparator />
        <VioletDropdownMenuItem>View Details</VioletDropdownMenuItem>
        <VioletDropdownMenuItem>Approve</VioletDropdownMenuItem>
        <VioletDropdownMenuSeparator />
        <VioletDropdownMenuItem destructive>Deny</VioletDropdownMenuItem>
      </VioletDropdownMenuContent>
    </VioletDropdownMenu>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <VioletDropdownMenu>
      <VioletDropdownMenuTrigger asChild>
        <VioletButton variant="ghost" size="icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
            <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </VioletButton>
      </VioletDropdownMenuTrigger>
      <VioletDropdownMenuContent align="end">
        <VioletDropdownMenuItem>Edit</VioletDropdownMenuItem>
        <VioletDropdownMenuItem>Duplicate</VioletDropdownMenuItem>
        <VioletDropdownMenuSeparator />
        <VioletDropdownMenuItem destructive>Delete</VioletDropdownMenuItem>
      </VioletDropdownMenuContent>
    </VioletDropdownMenu>
  ),
}
