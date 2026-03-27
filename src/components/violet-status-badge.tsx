import * as React from "react"

import { cn } from "@/lib/utils"

const STATUS_CONFIG = {
  "not-started": {
    label: "Not Started",
    className: "bg-[#e9ecef] text-[#6c757d]",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-[#e3f2fd] text-[#007bff]",
  },
  "due-soon": {
    label: "Due Soon",
    className: "bg-[#fff3cd] text-[#fd7e14]",
  },
  overdue: {
    label: "Overdue",
    className: "bg-[#f8d7da] text-[#dc3545]",
  },
  completed: {
    label: "Completed",
    className: "bg-[#d4edda] text-[#28a745]",
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
