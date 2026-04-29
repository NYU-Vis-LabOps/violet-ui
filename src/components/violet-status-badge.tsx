import * as React from "react"

import { cn } from "@/lib/utils"

const STATUS_CONFIG = {
  "not-started": {
    label: "Not Started",
    className: "border-border bg-muted text-muted-foreground",
    dotClassName: "bg-status-neutral-foreground",
  },
  "in-progress": {
    label: "In Progress",
    className: "border-info/20 bg-info-tint text-info-tint-foreground",
    dotClassName: "bg-info",
  },
  "due-soon": {
    label: "Due Soon",
    className: "border-warning/25 bg-warning-tint text-warning-tint-foreground",
    dotClassName: "bg-warning",
  },
  overdue: {
    label: "Overdue",
    className: "border-destructive/20 bg-destructive-tint text-destructive-tint-foreground",
    dotClassName: "bg-destructive",
  },
  completed: {
    label: "Completed",
    className: "border-success/20 bg-success-tint text-success-tint-foreground",
    dotClassName: "bg-success",
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
        "inline-flex h-5 items-center gap-1.5 whitespace-nowrap rounded-full border px-2 text-xs font-medium leading-none transition-colors",
        config.className,
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("h-1.5 w-1.5 rounded-full", config.dotClassName)}
      />
      {label ?? config.label}
    </span>
  )
})
VioletStatusBadge.displayName = "VioletStatusBadge"

export { VioletStatusBadge, STATUS_CONFIG }
