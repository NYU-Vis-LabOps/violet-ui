import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetCardVariants = cva("min-w-0 rounded-md bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "border border-border shadow-xs",
      bordered: "border border-primary/30 shadow-xs",
      elevated:
        "border border-border/70 shadow-md transition-shadow duration-150 ease-out hover:shadow-md",
      stat: "border border-border shadow-xs p-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface VioletCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof violetCardVariants> {
  borderColor?: string
}

const VioletCard = React.forwardRef<HTMLDivElement, VioletCardProps>(
  ({ className, variant, borderColor, style, ...props }, ref) => {
    const cardStyle =
      variant === "bordered" && borderColor
        ? { ...style, borderColor }
        : style
    return (
      <div
        ref={ref}
        className={cn(violetCardVariants({ variant, className }))}
        style={cardStyle}
        {...props}
      />
    )
  }
)
VioletCard.displayName = "VioletCard"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex min-w-0 flex-col space-y-1 p-5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("break-words text-base font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("break-words text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 break-words p-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex min-w-0 flex-wrap items-center gap-2 p-5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  VioletCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  violetCardVariants,
}
