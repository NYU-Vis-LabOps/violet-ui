import * as React from "react"

import { cn } from "@/lib/utils"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export interface VioletFileUploadProps {
  accept?: string
  maxSize?: number
  multiple?: boolean
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  onChange?: (files: File[]) => void
  className?: string
}

const VioletFileUpload = React.forwardRef<HTMLDivElement, VioletFileUploadProps>(
  (
    {
      accept,
      maxSize = MAX_FILE_SIZE,
      multiple = false,
      disabled = false,
      error,
      errorMessage,
      onChange,
      className,
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const [files, setFiles] = React.useState<File[]>([])
    const [sizeError, setSizeError] = React.useState<string | null>(null)

    const handleFiles = React.useCallback(
      (incoming: FileList | null) => {
        if (!incoming) return
        const valid: File[] = []
        let oversized = false
        for (const file of Array.from(incoming)) {
          if (file.size > maxSize) {
            oversized = true
          } else {
            valid.push(file)
          }
        }
        setSizeError(
          oversized
            ? `Some files exceed ${Math.round(maxSize / 1024 / 1024)}MB limit and were skipped.`
            : null
        )
        setFiles(valid)
        onChange?.(valid)
      },
      [maxSize, onChange]
    )

    const handleDragOver = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault()
        if (!disabled) setIsDragging(true)
      },
      [disabled]
    )

    const handleDragLeave = React.useCallback(() => setIsDragging(false), [])

    const handleDrop = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        if (!disabled) handleFiles(e.dataTransfer.files)
      },
      [disabled, handleFiles]
    )

    const handleClick = () => {
      if (!disabled) inputRef.current?.click()
    }

    const removeFile = (index: number) => {
      const next = files.filter((_, i) => i !== index)
      setFiles(next)
      onChange?.(next)
    }

    const formatSize = (bytes: number) => {
      if (bytes < 1024) return `${bytes} B`
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleClick()
            }
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-input bg-background px-6 py-8 text-center cursor-pointer transition-all duration-200 ease-out",
            "hover:border-primary/50 hover:bg-primary/5",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            isDragging && "border-primary bg-primary/5",
            error && "border-destructive",
            disabled && "cursor-not-allowed opacity-50 hover:border-input hover:bg-background"
          )}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            className="h-8 w-8 text-muted-foreground"
          >
            <path
              d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-foreground">
              Drop files here or click to browse
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Max {Math.round(maxSize / 1024 / 1024)}MB per file
            </p>
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => handleFiles(e.target.files)}
          className="sr-only"
          tabIndex={-1}
          aria-hidden
        />

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between rounded-md border border-border bg-card text-card-foreground px-3 py-2 text-sm"
              >
                <span className="truncate text-foreground">{file.name}</span>
                <span className="ml-2 flex items-center gap-2 shrink-0">
                  <span className="text-xs text-muted-foreground">{formatSize(file.size)}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Remove ${file.name}`}
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
                </span>
              </li>
            ))}
          </ul>
        )}

        {(sizeError || (error && errorMessage)) && (
          <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
            {sizeError || errorMessage}
          </p>
        )}
      </div>
    )
  }
)
VioletFileUpload.displayName = "VioletFileUpload"

export { VioletFileUpload }
