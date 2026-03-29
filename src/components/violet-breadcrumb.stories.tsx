import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./violet-breadcrumb"

const meta: Meta<typeof VioletBreadcrumb> = {
  title: "Components/VioletBreadcrumb",
  component: VioletBreadcrumb,
}

export default meta
type Story = StoryObj<typeof VioletBreadcrumb>

export const Default: Story = {
  render: () => (
    <VioletBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Requests</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </VioletBreadcrumb>
  ),
}

export const TwoLevels: Story = {
  render: () => (
    <VioletBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Room Access</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </VioletBreadcrumb>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <VioletBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </VioletBreadcrumb>
  ),
}

export const DeepNavigation: Story = {
  render: () => (
    <VioletBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Departments</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Computer Science</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Room 305</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </VioletBreadcrumb>
  ),
}
