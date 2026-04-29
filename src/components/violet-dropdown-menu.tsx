import * as React from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const VioletDropdownMenu = DropdownMenuPrimitive.Root
const VioletDropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const VioletDropdownMenuGroup = DropdownMenuPrimitive.Group
const VioletDropdownMenuSub = DropdownMenuPrimitive.Sub

const VioletDropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-card text-card-foreground p-1 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
VioletDropdownMenuContent.displayName = "VioletDropdownMenuContent"

const VioletDropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    destructive?: boolean
  }
>(({ className, destructive, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-2.5 md:py-1.5 text-sm outline-none transition-colors focus:bg-primary/10 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
      destructive && "text-destructive focus:bg-destructive/10 focus:text-destructive",
      className
    )}
    {...props}
  />
))
VioletDropdownMenuItem.displayName = "VioletDropdownMenuItem"

const VioletDropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
VioletDropdownMenuSeparator.displayName = "VioletDropdownMenuSeparator"

const VioletDropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground", className)}
    {...props}
  />
))
VioletDropdownMenuLabel.displayName = "VioletDropdownMenuLabel"

const VioletDropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-2.5 md:py-1.5 text-sm outline-none focus:bg-primary/10 data-[state=open]:bg-primary/10 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  >
    {children}
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="ml-auto h-4 w-4">
      <path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95005 7.3807 9.95005 7.50005C9.95005 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  </DropdownMenuPrimitive.SubTrigger>
))
VioletDropdownMenuSubTrigger.displayName = "VioletDropdownMenuSubTrigger"

const VioletDropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-card text-card-foreground p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
VioletDropdownMenuSubContent.displayName = "VioletDropdownMenuSubContent"

export {
  VioletDropdownMenu,
  VioletDropdownMenuTrigger,
  VioletDropdownMenuContent,
  VioletDropdownMenuItem,
  VioletDropdownMenuSeparator,
  VioletDropdownMenuLabel,
  VioletDropdownMenuGroup,
  VioletDropdownMenuSub,
  VioletDropdownMenuSubTrigger,
  VioletDropdownMenuSubContent,
}
