import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletDatePicker, VioletCalendar } from "./violet-date-picker"

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

export const Disabled: Story = {
  render: () => (
    <div className="w-[260px]">
      <VioletDatePicker disabled placeholder="Not available" />
    </div>
  ),
}

export const CalendarInline: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <VioletCalendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    )
  },
}
