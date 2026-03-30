import * as React from "react"

import { cn } from "@/lib/utils"

/* ── Root ─────────────────────────────────────────────────────────── */

export interface VioletSidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  width?: number
}

const VioletSidebar = React.forwardRef<HTMLElement, VioletSidebarProps>(
  (
    {
      collapsed = false,
      onCollapsedChange,
      width = 240,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <aside
      ref={ref}
      data-collapsed={collapsed || undefined}
      style={{ "--sidebar-width": `${width}px` } as React.CSSProperties}
      className={cn(
        "flex h-full flex-col border-r border-border bg-card text-card-foreground transition-[width] duration-200 ease-out overflow-hidden",
        collapsed ? "w-0 md:w-14" : "w-[var(--sidebar-width)]",
        className
      )}
      {...props}
    >
      {onCollapsedChange && (
        <div className="flex items-center justify-end p-2">
          <button
            type="button"
            onClick={() => onCollapsedChange(!collapsed)}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
              {collapsed ? (
                <path
                  d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95005 7.3807 9.95005 7.50005C9.95005 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      )}
      <nav className="flex-1 overflow-y-auto py-2">{children}</nav>
    </aside>
  )
)
VioletSidebar.displayName = "VioletSidebar"

/* ── Section ──────────────────────────────────────────────────────── */

export interface VioletSidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const VioletSidebarSection = React.forwardRef<
  HTMLDivElement,
  VioletSidebarSectionProps
>(({ title, className, children, ...props }, ref) => (
  <div ref={ref} className={cn("px-2 py-1", className)} {...props}>
    {title && (
      <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
    )}
    <div className="flex flex-col gap-0.5">{children}</div>
  </div>
))
VioletSidebarSection.displayName = "VioletSidebarSection"

/* ── Item ─────────────────────────────────────────────────────────── */

export interface VioletSidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
}

const VioletSidebarItem = React.forwardRef<
  HTMLButtonElement,
  VioletSidebarItemProps
>(({ active, icon, className, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    data-active={active || undefined}
    className={cn(
      "flex w-full items-center gap-2 rounded-md px-2 py-2 md:py-1.5 text-sm font-medium text-foreground/80 transition-colors duration-150 ease-out hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      active && "bg-primary/10 text-primary font-semibold",
      className
    )}
    {...props}
  >
    {icon && (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        {icon}
      </span>
    )}
    <span className="truncate">{children}</span>
  </button>
))
VioletSidebarItem.displayName = "VioletSidebarItem"

export { VioletSidebar, VioletSidebarSection, VioletSidebarItem }
