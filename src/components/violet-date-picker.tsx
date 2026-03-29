import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { violetButtonVariants } from "./violet-button"
import {
  VioletPopover,
  VioletPopoverTrigger,
  VioletPopoverContent,
} from "./violet-popover"

/* ── Calendar ─────────────────────────────────────────────────────── */

function VioletCalendar({ className, classNames, ...props }: DayPickerProps) {
  return (
    <DayPicker
      className={cn("p-0", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-3",
        month_caption: "flex justify-center items-center h-7",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        button_previous: cn(
          violetButtonVariants({ variant: "ghost", size: "icon" }),
          "absolute left-1 top-0 h-7 w-7"
        ),
        button_next: cn(
          violetButtonVariants({ variant: "ghost", size: "icon" }),
          "absolute right-1 top-0 h-7 w-7"
        ),
        month_grid: "border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground w-8 text-[0.8rem] font-normal",
        week: "flex mt-1",
        day: "relative p-0 text-center text-sm",
        day_button: cn(
          violetButtonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        selected:
          "bg-primary text-primary-foreground rounded-md hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-muted rounded-md",
        outside: "text-muted-foreground opacity-50",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-primary/10 aria-selected:text-foreground rounded-none",
        range_start: "rounded-r-none",
        range_end: "rounded-l-none",
        hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  )
}
VioletCalendar.displayName = "VioletCalendar"

/* ── DatePicker ───────────────────────────────────────────────────── */

export interface VioletDatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  className?: string
  formatDate?: (date: Date) => string
}

function defaultFormat(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

const VioletDatePicker = React.forwardRef<HTMLButtonElement, VioletDatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = "Pick a date",
      disabled,
      error,
      className,
      formatDate = defaultFormat,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    return (
      <VioletPopover open={open} onOpenChange={setOpen}>
        <VioletPopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-base md:text-sm shadow-xs ring-offset-background transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !value && "text-muted-foreground",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
          >
            <span className="truncate">
              {value ? formatDate(value) : placeholder}
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="h-4 w-4 shrink-0 opacity-50"
            >
              <path
                d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </VioletPopoverTrigger>
        <VioletPopoverContent align="start" className="w-auto p-3">
          <VioletCalendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date)
              setOpen(false)
            }}
            defaultMonth={value}
          />
        </VioletPopoverContent>
      </VioletPopover>
    )
  }
)
VioletDatePicker.displayName = "VioletDatePicker"

export { VioletCalendar, VioletDatePicker }
