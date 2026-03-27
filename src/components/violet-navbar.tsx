import * as React from "react"

import { cn } from "@/lib/utils"

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface NavUser {
  name: string
  avatar?: string
}

export interface VioletNavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  links: NavLink[]
  user?: NavUser
  onMenuClick?: () => void
}

const VioletNavbar = React.forwardRef<HTMLElement, VioletNavbarProps>(
  ({ className, logo, links, user, onMenuClick, ...props }, ref) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const initials = user?.name
      ? user.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : null

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-12 bg-primary flex items-center px-4 md:px-6 shadow-md",
          className
        )}
        {...props}
      >
        {/* Logo */}
        <div className="flex-shrink-0">{logo}</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 text-sm font-medium hover:text-primary-foreground transition-colors duration-150"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex-1" />

        {/* User avatar (desktop) */}
        {user && (
          <div className="hidden md:flex items-center">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
                {initials}
              </div>
            )}
          </div>
        )}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => {
            setMobileOpen((prev) => !prev)
            onMenuClick?.()
          }}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="absolute top-12 left-0 right-0 bg-primary md:hidden flex flex-col p-5 gap-3 min-h-[calc(100vh-3rem)] shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 text-sm font-medium hover:text-primary-foreground py-2 transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            {user && (
              <div className="mt-auto flex items-center gap-3 pt-6 border-t border-primary-foreground/20">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground">
                    {initials}
                  </div>
                )}
                <span className="text-primary-foreground text-sm">
                  {user.name}
                </span>
              </div>
            )}
          </div>
        )}
      </nav>
    )
  }
)
VioletNavbar.displayName = "VioletNavbar"

export { VioletNavbar }
