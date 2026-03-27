import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetCardVariants = cva("rounded-lg bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "border border-border shadow-sm",
      bordered: "border border-border shadow-sm border-l-4",
      elevated: "shadow-md",
      stat: "border border-border shadow-sm p-4",
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
        ? { ...style, borderLeftColor: borderColor }
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
    className={cn("flex flex-col space-y-1.5 p-6", className)}
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
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
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
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
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
