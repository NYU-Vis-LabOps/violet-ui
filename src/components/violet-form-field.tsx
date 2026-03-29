import * as React from "react"

import { cn } from "@/lib/utils"
import { VioletLabel } from "./violet-label"

export interface VioletFormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  htmlFor?: string
  required?: boolean
  description?: string
  error?: boolean
  errorMessage?: string
}

const VioletFormField = React.forwardRef<HTMLDivElement, VioletFormFieldProps>(
  ({ label, htmlFor, required, description, error, errorMessage, children, className, ...props }, ref) => {
    const errorId = error && errorMessage && htmlFor ? `${htmlFor}-error` : undefined
    const descId = description && htmlFor ? `${htmlFor}-desc` : undefined
    return (
      <div ref={ref} className={cn("space-y-1.5", className)} {...props}>
        <VioletLabel htmlFor={htmlFor}>
          {label}
          {required && <span className="ml-0.5 text-destructive" aria-hidden>*</span>}
        </VioletLabel>
        {description && (
          <p id={descId} className="text-xs text-muted-foreground">{description}</p>
        )}
        {children}
        {error && errorMessage && (
          <p id={errorId} className="text-xs font-medium text-destructive" role="alert">{errorMessage}</p>
        )}
      </div>
    )
  }
)
VioletFormField.displayName = "VioletFormField"

export { VioletFormField }
