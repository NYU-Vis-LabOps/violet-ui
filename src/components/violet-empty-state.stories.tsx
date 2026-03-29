import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletEmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
} from "./violet-empty-state"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletEmptyState> = {
  title: "Components/VioletEmptyState",
  component: VioletEmptyState,
}

export default meta
type Story = StoryObj<typeof VioletEmptyState>

const InboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <VioletEmptyState>
      <EmptyStateIcon>
        <InboxIcon />
      </EmptyStateIcon>
      <EmptyStateTitle>No requests yet</EmptyStateTitle>
      <EmptyStateDescription>
        When room access requests are submitted, they will appear here.
      </EmptyStateDescription>
      <EmptyStateAction>
        <VioletButton>Create Request</VioletButton>
      </EmptyStateAction>
    </VioletEmptyState>
  ),
}

export const NoResults: Story = {
  render: () => (
    <VioletEmptyState>
      <EmptyStateIcon>
        <SearchIcon />
      </EmptyStateIcon>
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>
        Try adjusting your search or filter criteria.
      </EmptyStateDescription>
    </VioletEmptyState>
  ),
}

export const Minimal: Story = {
  render: () => (
    <VioletEmptyState>
      <EmptyStateTitle>Nothing here</EmptyStateTitle>
      <EmptyStateDescription>
        This section is empty.
      </EmptyStateDescription>
    </VioletEmptyState>
  ),
}
