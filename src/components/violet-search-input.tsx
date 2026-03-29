import * as React from "react"

import { cn } from "@/lib/utils"

export interface VioletSearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void
}

const VioletSearchInput = React.forwardRef<HTMLInputElement, VioletSearchInputProps>(
  ({ className, value, onClear, ...props }, ref) => {
    const hasValue = value !== undefined && value !== ""

    return (
      <div className="relative w-full">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <input
          ref={ref}
          type="search"
          value={value}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background text-foreground pl-9 pr-8 py-1.5 text-base md:text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out [&::-webkit-search-cancel-button]:hidden",
            className
          )}
          {...props}
        />
        {hasValue && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-3.5 w-3.5">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
VioletSearchInput.displayName = "VioletSearchInput"

export { VioletSearchInput }
