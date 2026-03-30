import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { violetButtonVariants } from "./violet-button"

const VioletConfirmDialogTrigger = AlertDialogPrimitive.Trigger

export interface VioletConfirmDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: "default" | "destructive"
  onConfirm: () => void
  children?: React.ReactNode
}

const VioletConfirmDialog = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  VioletConfirmDialogProps
>(
  (
    {
      open,
      onOpenChange,
      title,
      description,
      confirmLabel = "Confirm",
      cancelLabel = "Cancel",
      variant = "default",
      onConfirm,
      children,
    },
    ref
  ) => (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content
          ref={ref}
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[min(28rem,calc(100vw-2rem))] translate-x-[-50%] translate-y-[-50%] border border-border bg-card text-card-foreground shadow-xl rounded-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        >
          <div className="p-5">
            <AlertDialogPrimitive.Title className="text-lg font-semibold leading-snug tracking-tight">
              {title}
            </AlertDialogPrimitive.Title>
            {description && (
              <AlertDialogPrimitive.Description className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </AlertDialogPrimitive.Description>
            )}
          </div>
          <div className="flex items-center justify-end gap-2 border-t border-border p-5">
            <AlertDialogPrimitive.Cancel
              className={cn(
                violetButtonVariants({ variant: "outline", size: "default" })
              )}
            >
              {cancelLabel}
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action
              onClick={onConfirm}
              className={cn(
                violetButtonVariants({
                  variant: variant === "destructive" ? "destructive" : "default",
                  size: "default",
                })
              )}
            >
              {confirmLabel}
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
)
VioletConfirmDialog.displayName = "VioletConfirmDialog"

export { VioletConfirmDialog, VioletConfirmDialogTrigger }
