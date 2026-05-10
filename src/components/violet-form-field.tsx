import * as React from "react"

import { cn } from "@/lib/utils"
import { VioletLabel } from "./violet-label"

export interface VioletFormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  htmlFor?: string
  required?: boolean
  description?: string
  descriptionPlacement?: "below-label" | "inline"
  error?: boolean
  errorMessage?: string
}

const VioletFormField = React.forwardRef<HTMLDivElement, VioletFormFieldProps>(
  (
    {
      label,
      htmlFor,
      required,
      description,
      descriptionPlacement = "below-label",
      error,
      errorMessage,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const errorId = error && errorMessage && htmlFor ? `${htmlFor}-error` : undefined
    const descId = description && htmlFor ? `${htmlFor}-desc` : undefined
    const inlineDescription = description && descriptionPlacement === "inline"

    return (
      <div ref={ref} className={cn("space-y-1.5", className)} {...props}>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <VioletLabel htmlFor={htmlFor}>
            {label}
            {required && <span className="ml-0.5 text-destructive" aria-hidden>*</span>}
          </VioletLabel>
          {inlineDescription && (
            <p id={descId} className="text-xs leading-none text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {description && !inlineDescription && (
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
