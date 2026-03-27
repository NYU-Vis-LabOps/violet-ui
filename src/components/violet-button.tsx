import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-[hsl(272,57%,39%)] text-primary-foreground shadow-sm hover:brightness-110",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80",
        destructive:
          "bg-gradient-to-r from-destructive to-[hsl(354,80%,45%)] text-destructive-foreground shadow-sm hover:brightness-110",
        ghost:
          "text-primary hover:bg-[hsl(277,33%,93%)] hover:text-primary",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        link:
          "text-primary underline-offset-4 hover:underline hover:scale-100 active:scale-100",
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-sm",
        default: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10 p-2",
        pill: "px-4 py-1.5 rounded-full text-sm",
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
