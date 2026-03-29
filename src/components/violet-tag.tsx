import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const violetTagVariants = cva(
  "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-muted text-foreground",
        outline: "border border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface VioletTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof violetTagVariants> {
  onRemove?: () => void
}

const VioletTag = React.forwardRef<HTMLSpanElement, VioletTagProps>(
  ({ className, variant, onRemove, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(violetTagVariants({ variant, className }))}
        {...props}
      >
        <span className="truncate max-w-[12rem]">{children}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-0.5 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Remove"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </span>
    )
  }
)
VioletTag.displayName = "VioletTag"

export { VioletTag, violetTagVariants }
