import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-muted text-foreground",
        success: "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]",
        info: "bg-[hsl(var(--info))] text-[hsl(var(--info-foreground))]",
        outline: "border border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface VioletBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof violetBadgeVariants> {}

const VioletBadge = React.forwardRef<HTMLDivElement, VioletBadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(violetBadgeVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
VioletBadge.displayName = "VioletBadge"

export { VioletBadge, violetBadgeVariants }
