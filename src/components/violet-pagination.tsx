import * as React from "react"

import { cn } from "@/lib/utils"
import { violetButtonVariants } from "./violet-button"

export interface VioletPaginationProps extends React.HTMLAttributes<HTMLElement> {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

function getPageRange(page: number, totalPages: number, siblingCount: number) {
  const range: (number | "ellipsis")[] = []
  const left = Math.max(2, page - siblingCount)
  const right = Math.min(totalPages - 1, page + siblingCount)

  range.push(1)
  if (left > 2) range.push("ellipsis")
  for (let i = left; i <= right; i++) range.push(i)
  if (right < totalPages - 1) range.push("ellipsis")
  if (totalPages > 1) range.push(totalPages)

  return range
}

const VioletPagination = React.forwardRef<HTMLElement, VioletPaginationProps>(
  ({ page, totalPages, onPageChange, siblingCount = 1, className, ...props }, ref) => {
    const pages = getPageRange(page, totalPages, siblingCount)

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className={cn(
            violetButtonVariants({ variant: "ghost", size: "icon" }),
            "h-9 w-9 md:h-8 md:w-8"
          )}
          aria-label="Previous page"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
            <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </button>

        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span
              key={`ellipsis-${i}`}
              className="flex h-9 w-9 md:h-8 md:w-8 items-center justify-center text-sm text-muted-foreground"
              aria-hidden
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                violetButtonVariants({
                  variant: p === page ? "default" : "ghost",
                  size: "icon",
                }),
                "h-9 w-9 md:h-8 md:w-8 text-sm"
              )}
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className={cn(
            violetButtonVariants({ variant: "ghost", size: "icon" }),
            "h-9 w-9 md:h-8 md:w-8"
          )}
          aria-label="Next page"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
            <path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95005 7.3807 9.95005 7.50005C9.95005 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    )
  }
)
VioletPagination.displayName = "VioletPagination"

export { VioletPagination }
