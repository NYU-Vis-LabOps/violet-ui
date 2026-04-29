import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function VioletPopover({ ...props }: PopoverPrimitive.PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

const VioletPopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  PopoverPrimitive.PopoverTriggerProps
>(({ ...props }, ref) => {
  return <PopoverPrimitive.Trigger ref={ref} data-slot="popover-trigger" {...props} />
})
VioletPopoverTrigger.displayName = "VioletPopoverTrigger"

const VioletPopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverPrimitive.PopoverContentProps
>(({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}, ref) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        data-slot="popover-content"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "isolate pointer-events-auto z-50 w-auto rounded-md border border-border bg-card text-card-foreground p-4 shadow-md outline-none",
          "duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
VioletPopoverContent.displayName = "VioletPopoverContent"

export {
  VioletPopover,
  VioletPopoverTrigger,
  VioletPopoverContent,
}
