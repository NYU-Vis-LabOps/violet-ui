import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletPagination } from "./violet-pagination"

const meta: Meta<typeof VioletPagination> = {
  title: "Components/VioletPagination",
  component: VioletPagination,
  decorators: [
    (Story) => (
      <div className="flex justify-center p-10">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletPagination>

function PaginationDemo({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useState(1)
  return (
    <VioletPagination
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  )
}

function DisabledPaginationDemo() {
  const [page, setPage] = useState(4)
  return (
    <VioletPagination
      page={page}
      totalPages={12}
      disabled
      onPageChange={setPage}
    />
  )
}

export const Default: Story = {
  render: () => <PaginationDemo totalPages={10} />,
}

export const FewPages: Story = {
  render: () => <PaginationDemo totalPages={3} />,
}

export const ManyPages: Story = {
  render: () => <PaginationDemo totalPages={50} />,
}

export const WithBoundaryButtons: Story = {
  render: () => <PaginationDemo totalPages={20} />,
}

export const Disabled: Story = {
  render: () => <DisabledPaginationDemo />,
}

export const SinglePageHidden: Story = {
  render: () => (
    <div className="rounded-md border border-border p-4 text-sm text-muted-foreground">
      <VioletPagination page={1} totalPages={1} onPageChange={() => undefined} />
      Single-page pagination renders no navigation.
    </div>
  ),
}

export const ClampedOutOfRange: Story = {
  render: () => (
    <VioletPagination page={99} totalPages={8} onPageChange={() => undefined} />
  ),
}
