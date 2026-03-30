import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletTimeline,
  VioletTimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "./violet-timeline"

const meta: Meta<typeof VioletTimeline> = {
  title: "Components/VioletTimeline",
  component: VioletTimeline,
}

export default meta
type Story = StoryObj<typeof VioletTimeline>

export const AuditLog: Story = {
  render: () => (
    <VioletTimeline className="max-w-md">
      <VioletTimelineItem>
        <TimelineConnector />
        <TimelineDot variant="success" />
        <TimelineContent>
          <p className="text-sm font-medium">Request approved</p>
          <p className="text-xs text-muted-foreground">
            Approved by Dr. Smith — Mar 15, 2025 at 2:30 PM
          </p>
        </TimelineContent>
      </VioletTimelineItem>
      <VioletTimelineItem>
        <TimelineConnector />
        <TimelineDot variant="info" />
        <TimelineContent>
          <p className="text-sm font-medium">Under review</p>
          <p className="text-xs text-muted-foreground">
            Assigned to Building Manager — Mar 14, 2025 at 10:00 AM
          </p>
        </TimelineContent>
      </VioletTimelineItem>
      <VioletTimelineItem>
        <TimelineConnector />
        <TimelineDot variant="default" />
        <TimelineContent>
          <p className="text-sm font-medium">Request submitted</p>
          <p className="text-xs text-muted-foreground">
            Submitted by Jane Doe — Mar 13, 2025 at 4:15 PM
          </p>
        </TimelineContent>
      </VioletTimelineItem>
      <VioletTimelineItem>
        <TimelineDot variant="neutral" />
        <TimelineContent>
          <p className="text-sm font-medium">Draft created</p>
          <p className="text-xs text-muted-foreground">
            Created by Jane Doe — Mar 12, 2025 at 9:00 AM
          </p>
        </TimelineContent>
      </VioletTimelineItem>
    </VioletTimeline>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <VioletTimeline className="max-w-sm">
      {(
        ["default", "success", "info", "warning", "destructive", "neutral"] as const
      ).map((variant) => (
        <VioletTimelineItem key={variant}>
          <TimelineConnector />
          <TimelineDot variant={variant} />
          <TimelineContent>
            <p className="text-sm font-medium capitalize">{variant}</p>
            <p className="text-xs text-muted-foreground">Timeline dot variant</p>
          </TimelineContent>
        </VioletTimelineItem>
      ))}
    </VioletTimeline>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <VioletTimeline className="max-w-md">
      <VioletTimelineItem>
        <TimelineConnector className="left-[11px] top-7" />
        <TimelineDot
          variant="success"
          icon={
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <TimelineContent>
          <p className="text-sm font-medium">Completed</p>
          <p className="text-xs text-muted-foreground">With check icon</p>
        </TimelineContent>
      </VioletTimelineItem>
      <VioletTimelineItem>
        <TimelineConnector className="left-[11px] top-7" />
        <TimelineDot
          variant="warning"
          icon={
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
              <path
                d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.5551 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18779 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98663 7.5 8.98663C7.2208 8.98663 6.99152 8.766 6.98079 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72601 7.49989 9.72601C7.9141 9.72601 8.24989 10.0618 8.24989 10.476Z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <TimelineContent>
          <p className="text-sm font-medium">Warning raised</p>
          <p className="text-xs text-muted-foreground">With warning icon</p>
        </TimelineContent>
      </VioletTimelineItem>
      <VioletTimelineItem>
        <TimelineDot
          variant="destructive"
          icon={
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <TimelineContent>
          <p className="text-sm font-medium">Request denied</p>
          <p className="text-xs text-muted-foreground">With close icon</p>
        </TimelineContent>
      </VioletTimelineItem>
    </VioletTimeline>
  ),
}
