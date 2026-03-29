import type { Meta, StoryObj } from "@storybook/react"
import { VioletTabs, VioletTabsList, VioletTabsTrigger, VioletTabsContent } from "./violet-tabs"

const meta: Meta<typeof VioletTabs> = {
  title: "Components/VioletTabs",
  component: VioletTabs,
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletTabs>

export const Default: Story = {
  render: () => (
    <VioletTabs defaultValue="pending">
      <VioletTabsList>
        <VioletTabsTrigger value="pending">Pending</VioletTabsTrigger>
        <VioletTabsTrigger value="approved">Approved</VioletTabsTrigger>
        <VioletTabsTrigger value="denied">Denied</VioletTabsTrigger>
      </VioletTabsList>
      <VioletTabsContent value="pending">
        <div className="rounded-md border border-border p-4 text-sm text-foreground">
          3 requests awaiting approval.
        </div>
      </VioletTabsContent>
      <VioletTabsContent value="approved">
        <div className="rounded-md border border-border p-4 text-sm text-foreground">
          12 requests approved this month.
        </div>
      </VioletTabsContent>
      <VioletTabsContent value="denied">
        <div className="rounded-md border border-border p-4 text-sm text-foreground">
          2 requests denied.
        </div>
      </VioletTabsContent>
    </VioletTabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <VioletTabs defaultValue="overview">
      <VioletTabsList>
        <VioletTabsTrigger value="overview">Overview</VioletTabsTrigger>
        <VioletTabsTrigger value="settings" disabled>Settings</VioletTabsTrigger>
        <VioletTabsTrigger value="audit">Audit Log</VioletTabsTrigger>
      </VioletTabsList>
      <VioletTabsContent value="overview">
        <div className="rounded-md border border-border p-4 text-sm text-foreground">
          System overview content.
        </div>
      </VioletTabsContent>
      <VioletTabsContent value="audit">
        <div className="rounded-md border border-border p-4 text-sm text-foreground">
          Audit log entries.
        </div>
      </VioletTabsContent>
    </VioletTabs>
  ),
}
