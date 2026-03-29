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

export const Default: Story = {
  render: () => <PaginationDemo totalPages={10} />,
}

export const FewPages: Story = {
  render: () => <PaginationDemo totalPages={3} />,
}

export const ManyPages: Story = {
  render: () => <PaginationDemo totalPages={50} />,
}
