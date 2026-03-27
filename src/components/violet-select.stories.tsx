import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletSelect,
  VioletSelectTrigger,
  VioletSelectValue,
  VioletSelectContent,
  VioletSelectItem,
  VioletSelectGroup,
  VioletSelectLabel,
  VioletSelectSeparator,
} from "./violet-select"

const meta: Meta = {
  title: "Components/VioletSelect",
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <VioletSelect>
      <VioletSelectTrigger>
        <VioletSelectValue placeholder="Select a fruit" />
      </VioletSelectTrigger>
      <VioletSelectContent>
        <VioletSelectItem value="apple">Apple</VioletSelectItem>
        <VioletSelectItem value="banana">Banana</VioletSelectItem>
        <VioletSelectItem value="cherry">Cherry</VioletSelectItem>
        <VioletSelectItem value="grape">Grape</VioletSelectItem>
      </VioletSelectContent>
    </VioletSelect>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <VioletSelect>
      <VioletSelectTrigger>
        <VioletSelectValue placeholder="Select a food" />
      </VioletSelectTrigger>
      <VioletSelectContent>
        <VioletSelectGroup>
          <VioletSelectLabel>Fruits</VioletSelectLabel>
          <VioletSelectItem value="apple">Apple</VioletSelectItem>
          <VioletSelectItem value="banana">Banana</VioletSelectItem>
        </VioletSelectGroup>
        <VioletSelectSeparator />
        <VioletSelectGroup>
          <VioletSelectLabel>Vegetables</VioletSelectLabel>
          <VioletSelectItem value="carrot">Carrot</VioletSelectItem>
          <VioletSelectItem value="broccoli">Broccoli</VioletSelectItem>
        </VioletSelectGroup>
      </VioletSelectContent>
    </VioletSelect>
  ),
}

export const ErrorState: Story = {
  render: () => (
    <div>
      <VioletSelect>
        <VioletSelectTrigger error>
          <VioletSelectValue placeholder="Select an option" />
        </VioletSelectTrigger>
        <VioletSelectContent>
          <VioletSelectItem value="a">Option A</VioletSelectItem>
          <VioletSelectItem value="b">Option B</VioletSelectItem>
        </VioletSelectContent>
      </VioletSelect>
      <p className="mt-1.5 text-sm text-destructive">Selection is required.</p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <VioletSelect disabled>
      <VioletSelectTrigger>
        <VioletSelectValue placeholder="Disabled" />
      </VioletSelectTrigger>
      <VioletSelectContent>
        <VioletSelectItem value="a">Option A</VioletSelectItem>
      </VioletSelectContent>
    </VioletSelect>
  ),
}
