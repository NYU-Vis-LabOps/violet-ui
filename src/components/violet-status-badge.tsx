import * as React from "react"

import { cn } from "@/lib/utils"

const STATUS_CONFIG = {
  "not-started": {
    label: "Not Started",
    className: "bg-status-neutral text-status-neutral-foreground",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-info-tint text-info",
  },
  "due-soon": {
    label: "Due Soon",
    className: "bg-warning-tint text-warning-tint-foreground",
  },
  overdue: {
    label: "Overdue",
    className: "bg-destructive-tint text-destructive",
  },
  completed: {
    label: "Completed",
    className: "bg-success-tint text-success",
  },
} as const

export type StatusType = keyof typeof STATUS_CONFIG

export interface VioletStatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusType
  label?: string
}

const VioletStatusBadge = React.forwardRef<
  HTMLSpanElement,
  VioletStatusBadgeProps
>(({ status, label, className, ...props }, ref) => {
  const config = STATUS_CONFIG[status]
  return (
    <span
      ref={ref}
      role="status"
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        config.className,
        className
      )}
      {...props}
    >
      {label ?? config.label}
    </span>
  )
})
VioletStatusBadge.displayName = "VioletStatusBadge"

export { VioletStatusBadge, STATUS_CONFIG }
