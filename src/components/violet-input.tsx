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
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted transition-colors duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          aria-invalid={error || undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error && errorMessage && (
          <p id={errorId} className="mt-1.5 text-sm text-destructive" role="alert">{errorMessage}</p>
        )}
      </div>
    )
  }
)
VioletInput.displayName = "VioletInput"

export { VioletInput }
