import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const VioletModal = DialogPrimitive.Root
const VioletModalTrigger = DialogPrimitive.Trigger
const VioletModalClose = DialogPrimitive.Close
const VioletModalPortal = DialogPrimitive.Portal

const VioletModalOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-neutral-950/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
VioletModalOverlay.displayName = "VioletModalOverlay"

const modalContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-2rem)] translate-x-[-50%] translate-y-[-50%] gap-3 rounded-md border border-border bg-card text-card-foreground shadow-lg duration-150 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      size: {
        sm: "max-w-md",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-5xl",
        full: "max-w-[95vw] max-h-[90vh]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface VioletModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {}

const VioletModalContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  VioletModalContentProps
>(({ className, size, children, ...props }, ref) => (
  <VioletModalPortal>
    <VioletModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalContentVariants({ size, className }))}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm p-2 -m-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="h-4 w-4"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </VioletModalPortal>
))
VioletModalContent.displayName = "VioletModalContent"

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1 p-5 border-b border-border",
      className
    )}
    {...props}
  />
))
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-snug tracking-tight", className)}
    {...props}
  />
))
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-5 overflow-y-auto max-h-[60vh]", className)}
    {...props}
  />
))
ModalBody.displayName = "ModalBody"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-end space-x-2 p-5 border-t border-border",
      className
    )}
    {...props}
  />
))
ModalFooter.displayName = "ModalFooter"

export {
  VioletModal,
  VioletModalTrigger,
  VioletModalClose,
  VioletModalContent,
  VioletModalOverlay,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  modalContentVariants,
}
