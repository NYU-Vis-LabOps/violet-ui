import * as React from "react"

import { cn } from "@/lib/utils"

export interface VioletInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorMessage?: string
}

const VioletInput = React.forwardRef<HTMLInputElement, VioletInputProps>(
  ({ className, type, error, errorMessage, id, ...props }, ref) => {
    const errorId = error && errorMessage ? `${id ?? "input"}-error` : undefined
    return (
      <div className="w-full">
        <input
          type={type}
          id={id}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-base md:text-sm shadow-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted transition-all duration-200 ease-out",
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
VioletInput.displayName = "VioletInput"

export { VioletInput }
