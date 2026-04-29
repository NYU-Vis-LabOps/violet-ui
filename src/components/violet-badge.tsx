import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetBadgeVariants = cva(
  "inline-flex h-5 items-center whitespace-nowrap rounded-full border px-2 text-xs font-medium leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground",
        secondary: "border-border bg-muted text-muted-foreground",
        success: "border-success/20 bg-success-tint text-success-tint-foreground",
        destructive: "border-destructive/20 bg-destructive-tint text-destructive-tint-foreground",
        warning: "border-warning/25 bg-warning-tint text-warning-tint-foreground",
        info: "border-info/20 bg-info-tint text-info-tint-foreground",
        outline: "border border-muted-foreground bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface VioletBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof violetBadgeVariants> {}

const VioletBadge = React.forwardRef<HTMLSpanElement, VioletBadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(violetBadgeVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
VioletBadge.displayName = "VioletBadge"

export { VioletBadge, violetBadgeVariants }
