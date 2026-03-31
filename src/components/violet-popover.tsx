import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function VioletPopover({ ...props }: PopoverPrimitive.PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function VioletPopoverTrigger({
  ...props
}: PopoverPrimitive.PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function VioletPopoverContent({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "isolate z-50 w-auto rounded-md border border-border bg-card text-card-foreground p-4 shadow-lg outline-none",
          "duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export {
  VioletPopover,
  VioletPopoverTrigger,
  VioletPopoverContent,
}
