import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  VioletPopover,
  VioletPopoverContent,
  VioletPopoverTrigger,
} from "./violet-popover"

export interface ComboboxOption {
  value: string
  label: string
  group?: string
}

export interface VioletComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  allowCustomValue?: boolean
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  className?: string
  id?: string
}

const VioletCombobox = React.forwardRef<HTMLButtonElement, VioletComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = "Select...",
      emptyText = "No results found.",
      allowCustomValue = false,
      disabled = false,
      error = false,
      errorMessage,
      className,
      id,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    const selectedLabel = React.useMemo(() => {
      const match = options.find((o) => o.value === value)
      return match?.label ?? (allowCustomValue && value ? value : "")
    }, [options, value, allowCustomValue])

    const groups = React.useMemo(() => {
      const map = new Map<string, ComboboxOption[]>()
      for (const opt of options) {
        const key = opt.group ?? ""
        const arr = map.get(key) ?? []
        arr.push(opt)
        map.set(key, arr)
      }
      return map
    }, [options])

    const handleSelect = (selectedValue: string) => {
      onValueChange?.(selectedValue === value ? "" : selectedValue)
      setOpen(false)
      setSearch("")
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (allowCustomValue && e.key === "Enter" && search) {
        const match = options.find(
          (o) => o.label.toLowerCase() === search.toLowerCase()
        )
        if (!match) {
          onValueChange?.(search)
          setOpen(false)
          setSearch("")
        }
      }
    }

    const errorId =
      error && errorMessage ? `${id ?? "combobox"}-error` : undefined

    return (
      <div className="w-full">
        <VioletPopover open={open} onOpenChange={setOpen}>
          <VioletPopoverTrigger asChild>
            <button
              ref={ref}
              id={id}
              type="button"
              role="combobox"
              aria-expanded={open}
              aria-invalid={error || undefined}
              aria-describedby={errorId}
              disabled={disabled}
              className={cn(
                "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-base md:text-sm shadow-xs ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out",
                error && "border-destructive focus-visible:ring-destructive",
                !selectedLabel && "text-muted-foreground",
                className
              )}
            >
              <span className="truncate">
                {selectedLabel || placeholder}
              </span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="ml-2 h-4 w-4 shrink-0 opacity-50"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.64245 3.00605 7.35753 3.00605 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </VioletPopoverTrigger>
          <VioletPopoverContent
            className="w-[var(--radix-popover-trigger-width)] p-0"
            align="start"
          >
            <CommandPrimitive
              className="flex h-full w-full flex-col overflow-hidden rounded-md bg-card text-card-foreground"
              shouldFilter={true}
            >
              <div className="flex items-center border-b border-border px-3">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="mr-2 h-4 w-4 shrink-0 opacity-50"
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <CommandPrimitive.Input
                  value={search}
                  onValueChange={setSearch}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  className="flex h-9 w-full bg-transparent py-2 text-base md:text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <CommandPrimitive.List className="max-h-60 overflow-y-auto p-1">
                <CommandPrimitive.Empty className="py-4 text-center text-sm text-muted-foreground">
                  {emptyText}
                </CommandPrimitive.Empty>
                {[...groups.entries()].map(([group, items]) => (
                  <CommandPrimitive.Group
                    key={group}
                    heading={group || undefined}
                    className={cn(
                      group &&
                        "[&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:pl-2 [&_[cmdk-group-heading]]:pr-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
                    )}
                  >
                    {items.map((opt) => (
                      <CommandPrimitive.Item
                        key={opt.value}
                        value={opt.label}
                        onSelect={() => handleSelect(opt.value)}
                        className="relative flex cursor-default select-none items-center rounded-sm py-2.5 md:py-1.5 pl-8 pr-2 text-sm outline-none data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                      >
                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                          {opt.value === value && (
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              className="h-4 w-4"
                            >
                              <path
                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                        {opt.label}
                      </CommandPrimitive.Item>
                    ))}
                  </CommandPrimitive.Group>
                ))}
              </CommandPrimitive.List>
            </CommandPrimitive>
          </VioletPopoverContent>
        </VioletPopover>
        {error && errorMessage && (
          <p
            id={errorId}
            className="mt-1.5 text-xs font-medium text-destructive"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
VioletCombobox.displayName = "VioletCombobox"

export { VioletCombobox }
