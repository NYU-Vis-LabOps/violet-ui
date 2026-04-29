import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetAvatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-7 w-7 text-xs",
        default: "h-9 w-9 text-sm",
        lg: "h-11 w-11 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface VioletAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof violetAvatarVariants> {}

const VioletAvatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  VioletAvatarProps
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(violetAvatarVariants({ size, className }))}
    {...props}
  />
))
VioletAvatar.displayName = "VioletAvatar"

const VioletAvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
VioletAvatarImage.displayName = "VioletAvatarImage"

const VioletAvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-medium",
      className
    )}
    {...props}
  />
))
VioletAvatarFallback.displayName = "VioletAvatarFallback"

export { VioletAvatar, VioletAvatarImage, VioletAvatarFallback, violetAvatarVariants }
