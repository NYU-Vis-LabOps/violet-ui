import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ── Root ─────────────────────────────────────────────────────────── */

const VioletTimeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("relative flex flex-col", className)}
    {...props}
  />
))
VioletTimeline.displayName = "VioletTimeline"

/* ── Item ─────────────────────────────────────────────────────────── */

const VioletTimelineItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("relative flex gap-3 pb-6 last:pb-0", className)}
    {...props}
  />
))
VioletTimelineItem.displayName = "VioletTimelineItem"

/* ── Dot ──────────────────────────────────────────────────────────── */

const dotVariants = cva(
  "relative z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full mt-1",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        info: "bg-info",
        warning: "bg-warning",
        destructive: "bg-destructive",
        neutral: "bg-muted-foreground/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TimelineDotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dotVariants> {
  icon?: React.ReactNode
}

const iconDotForeground: Record<string, string> = {
  default: "text-primary-foreground",
  success: "text-success-foreground",
  info: "text-info-foreground",
  warning: "text-warning-foreground",
  destructive: "text-destructive-foreground",
  neutral: "text-background",
}

const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ className, variant, icon, ...props }, ref) =>
    icon ? (
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          dotVariants({ variant, className: "" }),
          iconDotForeground[variant ?? "default"],
          className
        )}
        {...props}
      >
        {icon}
      </div>
    ) : (
      <div
        ref={ref}
        className={cn(dotVariants({ variant, className }))}
        {...props}
      />
    )
)
TimelineDot.displayName = "TimelineDot"

/* ── Connector ────────────────────────────────────────────────────── */

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-[5.5px] top-4 bottom-0 w-px bg-border",
      className
    )}
    {...props}
  />
))
TimelineConnector.displayName = "TimelineConnector"

/* ── Content ──────────────────────────────────────────────────────── */

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 min-w-0 -mt-0.5", className)}
    {...props}
  />
))
TimelineContent.displayName = "TimelineContent"

export {
  VioletTimeline,
  VioletTimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  dotVariants,
}
