import * as React from "react"

import { cn } from "@/lib/utils"
import { violetButtonVariants } from "./violet-button"

type PageItem = number | "ellipsis-left" | "ellipsis-right"

export interface VioletPaginationProps extends React.HTMLAttributes<HTMLElement> {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  disabled?: boolean
  showBoundaryButtons?: boolean
}

function clampPage(page: number, totalPages: number) {
  return Math.min(Math.max(1, page), Math.max(1, totalPages))
}

function getPageRange(page: number, totalPages: number, siblingCount: number) {
  const range: PageItem[] = []
  const normalizedTotal = Math.max(1, totalPages)
  const currentPage = clampPage(page, normalizedTotal)
  const totalVisible = siblingCount * 2 + 5

  if (normalizedTotal <= totalVisible) {
    return Array.from({ length: normalizedTotal }, (_, index) => index + 1)
  }

  const left = Math.max(2, currentPage - siblingCount)
  const right = Math.min(normalizedTotal - 1, currentPage + siblingCount)

  range.push(1)
  if (left > 2) range.push("ellipsis-left")
  for (let i = left; i <= right; i++) range.push(i)
  if (right < normalizedTotal - 1) range.push("ellipsis-right")
  range.push(normalizedTotal)

  return range
}

const VioletPagination = React.forwardRef<HTMLElement, VioletPaginationProps>(
  (
    {
      page,
      totalPages,
      onPageChange,
      siblingCount = 1,
      disabled = false,
      showBoundaryButtons = true,
      className,
      ...props
    },
    ref
  ) => {
    const normalizedTotal = Math.max(1, totalPages)
    const currentPage = clampPage(page, normalizedTotal)
    const pages = getPageRange(currentPage, normalizedTotal, siblingCount)

    if (normalizedTotal <= 1) {
      return null
    }

    const goToPage = (nextPage: number) => {
      const boundedPage = clampPage(nextPage, normalizedTotal)
      if (boundedPage !== currentPage) {
        onPageChange(boundedPage)
      }
    }

    const isFirstPage = currentPage <= 1
    const isLastPage = currentPage >= normalizedTotal

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {showBoundaryButtons && (
          <PaginationButton
            onClick={() => goToPage(1)}
            disabled={disabled || isFirstPage}
            aria-label="Go to first page"
          >
            <FirstIcon />
          </PaginationButton>
        )}
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={disabled || isFirstPage}
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
          typeof p !== "number" ? (
            <span
              key={`${p}-${i}`}
              className="flex h-9 w-9 md:h-8 md:w-8 items-center justify-center text-sm text-muted-foreground"
              aria-hidden
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => goToPage(p)}
              disabled={disabled}
              aria-current={p === currentPage ? "page" : undefined}
              aria-label={
                p === currentPage ? `Current page, page ${p}` : `Go to page ${p}`
              }
              className={cn(
                violetButtonVariants({
                  variant: p === currentPage ? "default" : "ghost",
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
          onClick={() => goToPage(currentPage + 1)}
          disabled={disabled || isLastPage}
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
        {showBoundaryButtons && (
          <PaginationButton
            onClick={() => goToPage(normalizedTotal)}
            disabled={disabled || isLastPage}
            aria-label="Go to last page"
          >
            <LastIcon />
          </PaginationButton>
        )}
      </nav>
    )
  }
)
VioletPagination.displayName = "VioletPagination"

function PaginationButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        violetButtonVariants({ variant: "ghost", size: "icon" }),
        "h-9 w-9 md:h-8 md:w-8",
        className
      )}
      {...props}
    />
  )
}

function FirstIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
      <path d="M7.85355 3.85355C8.04882 3.65829 8.04882 3.34171 7.85355 3.14645C7.65829 2.95118 7.34171 2.95118 7.14645 3.14645L3.14645 7.14645C2.95118 7.34171 2.95118 7.65829 3.14645 7.85355L7.14645 11.8536C7.34171 12.0488 7.65829 12.0488 7.85355 11.8536C8.04882 11.6583 8.04882 11.3417 7.85355 11.1464L4.20711 7.5L7.85355 3.85355ZM11.5 3C11.7761 3 12 3.22386 12 3.5V11.5C12 11.7761 11.7761 12 11.5 12C11.2239 12 11 11.7761 11 11.5V3.5C11 3.22386 11.2239 3 11.5 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

function LastIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
      <path d="M7.14645 3.85355C6.95118 3.65829 6.95118 3.34171 7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L11.8536 7.14645C12.0488 7.34171 12.0488 7.65829 11.8536 7.85355L7.85355 11.8536C7.65829 12.0488 7.34171 12.0488 7.14645 11.8536C6.95118 11.6583 6.95118 11.3417 7.14645 11.1464L10.7929 7.5L7.14645 3.85355ZM3.5 3C3.22386 3 3 3.22386 3 3.5V11.5C3 11.7761 3.22386 12 3.5 12C3.77614 12 4 11.7761 4 11.5V3.5C4 3.22386 3.77614 3 3.5 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

export { VioletPagination }
