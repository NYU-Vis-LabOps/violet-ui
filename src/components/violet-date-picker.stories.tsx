import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { addDays } from "date-fns"
import {
  VioletDatePicker,
  VioletDateRangePicker,
  VioletCalendar,
} from "./violet-date-picker"

const meta: Meta = {
  title: "Components/VioletDatePicker",
  decorators: [
    (Story) => (
      <div className="flex justify-center p-10">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

/* ── Single date ─────────────────────────────────────────────────── */

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    return (
      <div className="w-[260px]">
        <VioletDatePicker
          value={date}
          onChange={setDate}
          placeholder="Select a date"
        />
      </div>
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <div className="w-[260px]">
        <VioletDatePicker value={date} onChange={setDate} />
      </div>
    )
  },
}

export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <div className="w-[260px]">
        <VioletDatePicker
          value={date}
          onChange={setDate}
          formatStr="yyyy-MM-dd"
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[260px]">
      <VioletDatePicker disabled placeholder="Not available" />
    </div>
  ),
}

export const ErrorState: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    return (
      <div className="w-[260px] space-y-1.5">
        <VioletDatePicker
          value={date}
          onChange={setDate}
          error
          placeholder="Date of birth"
        />
        <p className="text-sm text-destructive">
          Date of birth is required.
        </p>
      </div>
    )
  },
}

/* ── Date range ──────────────────────────────────────────────────── */

export const DateRange: Story = {
  render: () => {
    const [range, setRange] = useState<
      { from: Date; to?: Date } | undefined
    >()
    return (
      <div className="w-[320px]">
        <VioletDateRangePicker value={range} onChange={setRange} />
      </div>
    )
  },
}

export const DateRangeWithValue: Story = {
  render: () => {
    const today = new Date()
    const [range, setRange] = useState<
      { from: Date; to?: Date } | undefined
    >({ from: today, to: addDays(today, 14) })
    return (
      <div className="w-[320px]">
        <VioletDateRangePicker value={range} onChange={setRange} />
      </div>
    )
  },
}

/* ── Inline calendar ─────────────────────────────────────────────── */

export const CalendarInline: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <VioletCalendar mode="single" selected={date} onSelect={setDate} />
    )
  },
}
