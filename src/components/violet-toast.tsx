import * as React from "react"
import { Toaster as Sonner, toast } from "sonner"

import { cn } from "@/lib/utils"

type VioletToasterProps = React.ComponentProps<typeof Sonner>

function VioletToaster({ className, ...props }: VioletToasterProps) {
  return (
    <Sonner
      className={cn("toaster group", className)}
      duration={5000}
      style={{ fontFamily: "inherit" }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-md group-[.toaster]:text-sm",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:text-xs",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:rounded-md group-[.toast]:px-2 group-[.toast]:py-1",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:rounded-md group-[.toast]:px-2 group-[.toast]:py-1",
          success:
            "group-[.toaster]:border-success group-[.toaster]:text-success-foreground",
          error:
            "group-[.toaster]:border-destructive group-[.toaster]:text-destructive",
          warning:
            "group-[.toaster]:border-warning group-[.toaster]:text-warning-foreground",
          info:
            "group-[.toaster]:border-info group-[.toaster]:text-info-foreground",
        },
      }}
      {...props}
    />
  )
}

export { VioletToaster, toast }
