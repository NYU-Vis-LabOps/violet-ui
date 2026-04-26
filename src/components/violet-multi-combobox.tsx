import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  VioletPopover,
  VioletPopoverContent,
  VioletPopoverTrigger,
} from "./violet-popover"
import { VioletTag } from "./violet-tag"

export interface VioletMultiComboboxOption {
  value: string
  label: string
  group?: string
  description?: string
  disabled?: boolean
}

export interface VioletMultiComboboxProps {
  options: VioletMultiComboboxOption[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  selectedLabel?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  showSelectedChips?: boolean
  showSelectAll?: boolean
  showClear?: boolean
  stopWheelPropagation?: boolean
  renderOption?: (
    option: VioletMultiComboboxOption,
    selected: boolean
  ) => React.ReactNode
  renderSelectedLabel?: (selected: VioletMultiComboboxOption[]) => React.ReactNode
  className?: string
  id?: string
}

const VioletMultiCombobox = React.forwardRef<
  HTMLButtonElement,
  VioletMultiComboboxProps
>(
  (
    {
      options,
      value = [],
      onValueChange,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyText = "No results found.",
      selectedLabel = "items",
      disabled = false,
      error = false,
      errorMessage,
      showSelectedChips = true,
      showSelectAll = false,
      showClear = true,
      stopWheelPropagation = true,
      renderOption,
      renderSelectedLabel,
      className,
      id,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    const optionMap = React.useMemo(() => {
      return new Map(options.map((option) => [option.value, option]))
    }, [options])

    const selectedOptions = React.useMemo(
      () =>
        value
          .map((selectedValue) => optionMap.get(selectedValue))
          .filter((option): option is VioletMultiComboboxOption => Boolean(option)),
      [optionMap, value]
    )

    const selectableValues = React.useMemo(
      () => options.filter((option) => !option.disabled).map((option) => option.value),
      [options]
    )

    const triggerLabel = React.useMemo(() => {
      if (renderSelectedLabel) return renderSelectedLabel(selectedOptions)
      if (selectedOptions.length === 0) return ""
      if (selectedOptions.length === 1) return selectedOptions[0].label
      return `${selectedOptions.length} ${selectedLabel} selected`
    }, [renderSelectedLabel, selectedLabel, selectedOptions])

    const groups = React.useMemo(() => {
      const map = new Map<string, VioletMultiComboboxOption[]>()
      for (const option of options) {
        const key = option.group ?? ""
        const items = map.get(key) ?? []
        items.push(option)
        map.set(key, items)
      }
      return map
    }, [options])

    const updateValue = (nextValue: string[]) => {
      onValueChange?.(nextValue)
    }

    const toggleValue = (option: VioletMultiComboboxOption) => {
      if (option.disabled) return
      const nextValue = value.includes(option.value)
        ? value.filter((item) => item !== option.value)
        : [...value, option.value]
      updateValue(nextValue)
    }

    const clearValue = () => updateValue([])

    const toggleAll = () => {
      const allSelected = selectableValues.every((optionValue) =>
        value.includes(optionValue)
      )
      updateValue(allSelected ? [] : selectableValues)
    }

    const errorId =
      error && errorMessage ? `${id ?? "multi-combobox"}-error` : undefined
    const allSelected =
      selectableValues.length > 0 &&
      selectableValues.every((optionValue) => value.includes(optionValue))

    return (
      <div className="w-full">
        <VioletPopover open={open} onOpenChange={setOpen}>
          <VioletPopoverTrigger
            ref={ref}
            id={id}
            role="combobox"
            aria-expanded={open}
            aria-invalid={error || undefined}
            aria-describedby={errorId}
            disabled={disabled}
            className={cn(
              "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background text-foreground px-3 py-1.5 text-base md:text-sm shadow-xs ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out",
              error && "border-destructive focus-visible:ring-destructive",
              !triggerLabel && "text-muted-foreground",
              className
            )}
          >
            <span className="truncate">{triggerLabel || placeholder}</span>
            <ChevronSortIcon />
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
                <SearchIcon />
                <CommandPrimitive.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder={searchPlaceholder}
                  className="flex h-9 w-full bg-transparent py-2 text-base md:text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {(showSelectAll || showClear) && (
                <div className="flex items-center justify-between gap-2 border-b border-border px-2 py-1">
                  {showSelectAll ? (
                    <button
                      type="button"
                      className="rounded-sm px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={toggleAll}
                    >
                      {allSelected ? "Deselect all" : "Select all"}
                    </button>
                  ) : (
                    <span />
                  )}
                  {showClear && value.length > 0 && (
                    <button
                      type="button"
                      className="rounded-sm px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={clearValue}
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}
              <CommandPrimitive.List
                className="max-h-60 overflow-y-auto p-1"
                aria-multiselectable="true"
                onWheel={stopWheelPropagation ? (e) => e.stopPropagation() : undefined}
              >
                <CommandPrimitive.Empty className="py-4 text-center text-sm text-muted-foreground">
                  {emptyText}
                </CommandPrimitive.Empty>
                {[...groups.entries()].map(([group, items]) => (
                  <CommandPrimitive.Group
                    key={group}
                    heading={group || undefined}
                    className={cn(
                      group &&
            "[&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:pl-2 [&_[cmdk-group-heading]]:pr-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-muted-foreground"
                    )}
                  >
                    {items.map((option) => {
                      const selected = value.includes(option.value)
                      return (
                        <CommandPrimitive.Item
                          key={option.value}
                          value={`${option.label} ${option.description ?? ""} ${option.value}`}
                          disabled={option.disabled}
                          onSelect={() => toggleValue(option)}
                          aria-selected={selected}
                          className="relative flex cursor-default select-none items-center rounded-sm py-2.5 md:py-1.5 pl-8 pr-2 text-sm outline-none data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                        >
                          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                            {selected && <CheckIcon />}
                          </span>
                          {renderOption ? (
                            renderOption(option, selected)
                          ) : (
                            <span className="min-w-0">
                              <span className="block truncate">{option.label}</span>
                              {option.description && (
                                <span className="block truncate text-xs text-muted-foreground">
                                  {option.description}
                                </span>
                              )}
                            </span>
                          )}
                        </CommandPrimitive.Item>
                      )
                    })}
                  </CommandPrimitive.Group>
                ))}
              </CommandPrimitive.List>
            </CommandPrimitive>
          </VioletPopoverContent>
        </VioletPopover>
        {showSelectedChips && selectedOptions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {selectedOptions.map((option) => (
              <VioletTag
                key={option.value}
                variant="secondary"
                onRemove={() => toggleValue(option)}
              >
                {option.label}
              </VioletTag>
            ))}
          </div>
        )}
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
VioletMultiCombobox.displayName = "VioletMultiCombobox"

function ChevronSortIcon() {
  return (
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
  )
}

function SearchIcon() {
  return (
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
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4 text-primary">
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

export { VioletMultiCombobox }
