import * as React from "react"

import { cn } from "@/lib/utils"

/* ── Context ─────────────────────────────────────────────────────── */

interface StepperContextValue {
  activeStep: number
  orientation: "horizontal" | "vertical"
}

const StepperContext = React.createContext<StepperContextValue>({
  activeStep: 0,
  orientation: "horizontal",
})

/* ── Root ─────────────────────────────────────────────────────────── */

export interface VioletStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number
  orientation?: "horizontal" | "vertical"
}

const VioletStepper = React.forwardRef<HTMLDivElement, VioletStepperProps>(
  ({ activeStep = 0, orientation = "horizontal", className, children, ...props }, ref) => (
    <StepperContext.Provider value={{ activeStep, orientation }}>
      <div
        ref={ref}
        data-orientation={orientation}
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col",
          className
        )}
        role="list"
        {...props}
      >
        {children}
      </div>
    </StepperContext.Provider>
  )
)
VioletStepper.displayName = "VioletStepper"

/* ── Step ─────────────────────────────────────────────────────────── */

export interface VioletStepProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
}

const VioletStep = React.forwardRef<HTMLDivElement, VioletStepProps>(
  ({ index = 0, className, children, ...props }, ref) => {
    const { activeStep, orientation } = React.useContext(StepperContext)
    const state = index < activeStep ? "completed" : index === activeStep ? "active" : "inactive"

    return (
      <div
        ref={ref}
        role="listitem"
        aria-current={state === "active" ? "step" : undefined}
        data-state={state}
        data-orientation={orientation}
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
VioletStep.displayName = "VioletStep"

/* ── Indicator ────────────────────────────────────────────────────── */

export interface VioletStepIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
}

const VioletStepIndicator = React.forwardRef<HTMLDivElement, VioletStepIndicatorProps>(
  ({ index = 0, className, ...props }, ref) => {
    const { activeStep } = React.useContext(StepperContext)
    const state = index < activeStep ? "completed" : index === activeStep ? "active" : "inactive"

    return (
      <div
        ref={ref}
        data-state={state}
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-200 ease-out",
          state === "completed" && "border-primary bg-primary text-primary-foreground",
          state === "active" && "border-primary bg-background text-primary",
          state === "inactive" && "border-muted-foreground/30 bg-background text-muted-foreground",
          className
        )}
        {...props}
      >
        {state === "completed" ? (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          index + 1
        )}
      </div>
    )
  }
)
VioletStepIndicator.displayName = "VioletStepIndicator"

/* ── Separator ────────────────────────────────────────────────────── */

export interface VioletStepSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
}

const VioletStepSeparator = React.forwardRef<HTMLDivElement, VioletStepSeparatorProps>(
  ({ index = 0, className, ...props }, ref) => {
    const { activeStep, orientation } = React.useContext(StepperContext)
    const completed = index < activeStep

    return (
      <div
        ref={ref}
        data-state={completed ? "completed" : "inactive"}
        className={cn(
          "transition-colors duration-200 ease-out",
          orientation === "horizontal"
            ? "mx-2 h-0.5 flex-1 min-w-8"
            : "ml-4 mt-1 mb-1 w-0.5 min-h-6",
          completed ? "bg-primary" : "bg-muted-foreground/20",
          className
        )}
        {...props}
      />
    )
  }
)
VioletStepSeparator.displayName = "VioletStepSeparator"

/* ── Title & Description ──────────────────────────────────────────── */

const VioletStepTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
))
VioletStepTitle.displayName = "VioletStepTitle"

const VioletStepDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
))
VioletStepDescription.displayName = "VioletStepDescription"

export {
  VioletStepper,
  VioletStep,
  VioletStepIndicator,
  VioletStepSeparator,
  VioletStepTitle,
  VioletStepDescription,
}
