import * as React from "react"

import { cn } from "@/lib/utils"

export interface VioletAutocompleteInputOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface VioletAutocompleteInputProps {
  options: VioletAutocompleteInputOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  allowCustomValue?: boolean
  filterOptions?: boolean
  onSearchChange?: (value: string) => void
  onLoadMore?: () => void
  hasMoreOptions?: boolean
  isLoadingOptions?: boolean
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  clearable?: boolean
  stopWheelPropagation?: boolean
  renderOption?: (
    option: VioletAutocompleteInputOption,
    selected: boolean
  ) => React.ReactNode
  className?: string
  id?: string
}

const VioletAutocompleteInput = React.forwardRef<
  HTMLInputElement,
  VioletAutocompleteInputProps
>(
  (
    {
      options,
      value = "",
      onValueChange,
      placeholder = "Select...",
      emptyText = "No results found.",
      allowCustomValue = false,
      filterOptions = true,
      onSearchChange,
      onLoadMore,
      hasMoreOptions = false,
      isLoadingOptions = false,
      disabled = false,
      error = false,
      errorMessage,
      clearable = true,
      stopWheelPropagation = true,
      renderOption,
      className,
      id,
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const listboxId = `${inputId}-listbox`
    const errorId = error && errorMessage ? `${inputId}-error` : undefined
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listRef = React.useRef<HTMLDivElement>(null)
    const [open, setOpen] = React.useState(false)
    const [inputValue, setInputValue] = React.useState("")
    const [highlightIndex, setHighlightIndex] = React.useState(0)
    const skipNextBlurCommit = React.useRef(false)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const selectedOption = React.useMemo(
      () => options.find((option) => option.value === value),
      [options, value]
    )
    const displayValue = selectedOption?.label ?? (allowCustomValue ? value : "")

    const visibleOptions = React.useMemo(() => {
      if (!filterOptions) return options
      const query = inputValue.trim().toLowerCase()
      if (!query || query === displayValue.toLowerCase()) return options
      return options.filter((option) => {
        return (
          option.label.toLowerCase().includes(query) ||
          option.value.toLowerCase().includes(query) ||
          option.description?.toLowerCase().includes(query)
        )
      })
    }, [displayValue, filterOptions, inputValue, options])

    React.useEffect(() => {
      if (!open) {
        setInputValue(displayValue)
      }
    }, [displayValue, open])

    React.useEffect(() => {
      setHighlightIndex(0)
    }, [visibleOptions])

    React.useEffect(() => {
      const list = listRef.current
      if (!list || !open) return
      const items = list.querySelectorAll("[data-autocomplete-item]")
      items[highlightIndex]?.scrollIntoView({ block: "nearest" })
    }, [highlightIndex, open])

    const commitOption = (option: VioletAutocompleteInputOption) => {
      if (option.disabled) return
      skipNextBlurCommit.current = true
      onValueChange?.(option.value)
      setInputValue(option.label)
      setOpen(false)
      inputRef.current?.blur()
    }

    const commitInputValue = () => {
      const trimmed = inputValue.trim()
      const match = options.find(
        (option) => option.label.toLowerCase() === trimmed.toLowerCase()
      )
      if (match) {
        onValueChange?.(match.value)
        setInputValue(match.label)
        setOpen(false)
        return
      }
      if (allowCustomValue && trimmed) {
        onValueChange?.(trimmed)
        setInputValue(trimmed)
      } else {
        setInputValue(displayValue)
      }
      setOpen(false)
    }

    const clearValue = () => {
      onValueChange?.("")
      setInputValue("")
      setOpen(false)
      inputRef.current?.focus()
    }

    const handleListScroll = (event: React.UIEvent<HTMLDivElement>) => {
      if (!onLoadMore || !hasMoreOptions || isLoadingOptions) return
      const target = event.currentTarget
      const remaining = target.scrollHeight - target.scrollTop - target.clientHeight
      if (remaining < 32) {
        onLoadMore()
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        setInputValue(displayValue)
        inputRef.current?.blur()
        return
      }
      if (event.key === "ArrowDown") {
        event.preventDefault()
        setOpen(true)
        setHighlightIndex((index) =>
          Math.min(index + 1, Math.max(visibleOptions.length - 1, 0))
        )
        return
      }
      if (event.key === "ArrowUp") {
        event.preventDefault()
        setHighlightIndex((index) => Math.max(index - 1, 0))
        return
      }
      if (event.key === "Enter") {
        event.preventDefault()
        const highlighted = visibleOptions[highlightIndex]
        if (highlighted) {
          commitOption(highlighted)
        } else {
          commitInputValue()
        }
      }
    }

    return (
      <div className="relative w-full">
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-invalid={error || undefined}
          aria-describedby={errorId}
          disabled={disabled}
          value={open ? inputValue : displayValue}
          placeholder={placeholder}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1.5 text-base md:text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out",
            clearable && (open ? inputValue : displayValue) && "pr-9",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          onChange={(event) => {
            const nextValue = event.target.value
            setInputValue(nextValue)
            onSearchChange?.(nextValue)
            if (!open) setOpen(true)
          }}
          onFocus={() => {
            if (disabled) return
            setInputValue(displayValue)
            setOpen(true)
          }}
          onBlur={() => {
            if (skipNextBlurCommit.current) {
              skipNextBlurCommit.current = false
              return
            }
            commitInputValue()
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {clearable && (open ? inputValue : displayValue) && !disabled && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Clear value"
            onMouseDown={(event) => event.preventDefault()}
            onClick={clearValue}
          >
            <ClearIcon />
          </button>
        )}
        {open && !disabled && (
          <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-card text-card-foreground shadow-md">
            <div
              ref={listRef}
              id={listboxId}
              role="listbox"
              className="max-h-60 overflow-y-auto p-1"
              onScroll={handleListScroll}
              onWheel={stopWheelPropagation ? (e) => e.stopPropagation() : undefined}
            >
              {visibleOptions.length === 0 ? (
                <div className="py-4 text-center text-sm text-muted-foreground">
                  {isLoadingOptions ? "Loading..." : emptyText}
                </div>
              ) : (
                visibleOptions.map((option, index) => {
                  const highlighted = index === highlightIndex
                  const selected = option.value === value
                  return (
                    <div
                      key={option.value}
                      data-autocomplete-item
                      role="option"
                      aria-selected={selected}
                      className={cn(
                        "relative flex cursor-default select-none items-center rounded-sm py-2.5 md:py-1.5 pl-8 pr-2 text-sm outline-none",
                        highlighted
                          ? "bg-primary/10 text-primary"
                          : "text-foreground",
                        option.disabled && "pointer-events-none opacity-50"
                      )}
                      onMouseDown={(event) => event.preventDefault()}
                      onMouseEnter={() => setHighlightIndex(index)}
                      onClick={() => commitOption(option)}
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
                    </div>
                  )
                })
              )}
              {isLoadingOptions && visibleOptions.length > 0 && (
                <div className="py-3 text-center text-sm text-muted-foreground">
                  Loading more...
                </div>
              )}
            </div>
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
VioletAutocompleteInput.displayName = "VioletAutocompleteInput"

function ClearIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

export { VioletAutocompleteInput }
