import * as React from "react"

import { cn } from "@/lib/utils"

export interface VioletTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  errorMessage?: string
}

const VioletTextarea = React.forwardRef<HTMLTextAreaElement, VioletTextareaProps>(
  ({ className, error, errorMessage, id, ...props }, ref) => {
    const errorId = error && errorMessage ? `${id ?? "textarea"}-error` : undefined
    return (
      <div className="w-full">
        <textarea
          id={id}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background text-foreground px-3 py-2 text-base md:text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted transition-all duration-200 ease-out resize-y",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          aria-invalid={error || undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error && errorMessage && (
          <p id={errorId} className="mt-1.5 text-xs font-medium text-destructive" role="alert">{errorMessage}</p>
        )}
      </div>
    )
  }
)
VioletTextarea.displayName = "VioletTextarea"

export { VioletTextarea }
