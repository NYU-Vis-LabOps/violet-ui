import * as React from "react"

import { cn } from "@/lib/utils"

const VioletSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-pulse rounded-md bg-muted", className)}
    {...props}
  />
))
VioletSkeleton.displayName = "VioletSkeleton"

export { VioletSkeleton }
