import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetCardVariants = cva("rounded-lg bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "border border-border shadow-sm",
      bordered: "border border-border shadow-sm border-l-4 border-l-primary",
      elevated:
        "shadow-md border border-border/50 hover:shadow-lg transition-[box-shadow,transform] duration-200 ease-out motion-safe:hover:-translate-y-0.5",
      stat: "border border-border shadow-sm p-3",
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
    className={cn("flex flex-col space-y-1 p-5", className)}
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
    className={cn("text-base font-semibold leading-tight tracking-tight", className)}
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
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 pt-0", className)}
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
