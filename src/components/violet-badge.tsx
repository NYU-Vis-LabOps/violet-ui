import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-muted text-foreground",
        success: "bg-success text-success-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
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
