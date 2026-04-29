import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input motion-safe:transition-colors motion-safe:duration-200 motion-safe:ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        default: "h-6 w-11",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-sm ring-0 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        default: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface VioletSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const VioletSwitch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  VioletSwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(switchVariants({ size, className }))}
    ref={ref}
    {...props}
  >
    <SwitchPrimitive.Thumb className={cn(thumbVariants({ size }))} />
  </SwitchPrimitive.Root>
))
VioletSwitch.displayName = "VioletSwitch"

export { VioletSwitch, switchVariants }
