import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md active:shadow-sm",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md active:shadow-sm",
        ghost:
          "text-primary hover:bg-primary/10 hover:text-primary",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary active:text-primary-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-7 px-2.5 py-1 text-xs",
        default: "h-9 px-3.5 py-1.5 text-sm",
        lg: "h-11 px-5 py-2.5 text-base",
        icon: "h-9 w-9 p-2",
        pill: "px-3.5 py-1 rounded-full text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface VioletButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof violetButtonVariants> {
  asChild?: boolean
}

const VioletButton = React.forwardRef<HTMLButtonElement, VioletButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(violetButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
VioletButton.displayName = "VioletButton"

export { VioletButton, violetButtonVariants }
