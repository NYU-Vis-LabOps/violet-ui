import * as React from "react"

import { cn } from "@/lib/utils"

const VioletEmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center py-12 px-4 text-center",
      className
    )}
    {...props}
  />
))
VioletEmptyState.displayName = "VioletEmptyState"

const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:h-6 [&>svg]:w-6",
      className
    )}
    {...props}
  />
))
EmptyStateIcon.displayName = "EmptyStateIcon"

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-semibold text-foreground", className)}
    {...props}
  />
))
EmptyStateTitle.displayName = "EmptyStateTitle"

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground",
      className
    )}
    {...props}
  />
))
EmptyStateDescription.displayName = "EmptyStateDescription"

const EmptyStateAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4", className)} {...props} />
))
EmptyStateAction.displayName = "EmptyStateAction"

export {
  VioletEmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
}
