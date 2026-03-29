import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  VioletStepper,
  VioletStep,
  VioletStepIndicator,
  VioletStepSeparator,
  VioletStepTitle,
  VioletStepDescription,
} from "./violet-stepper"
import { VioletButton } from "./violet-button"

const meta: Meta<typeof VioletStepper> = {
  title: "Components/VioletStepper",
  component: VioletStepper,
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletStepper>

const steps = [
  { title: "Submitted", description: "Request created" },
  { title: "Tier 1 Review", description: "Department approver" },
  { title: "Tier 2 Review", description: "Admin review" },
  { title: "Completed", description: "Access granted" },
]

export const Default: Story = {
  render: () => (
    <VioletStepper activeStep={1}>
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <VioletStep index={i}>
            <VioletStepIndicator index={i} />
            <div className="ml-2">
              <VioletStepTitle>{step.title}</VioletStepTitle>
              <VioletStepDescription>{step.description}</VioletStepDescription>
            </div>
          </VioletStep>
          {i < steps.length - 1 && <VioletStepSeparator index={i} />}
        </React.Fragment>
      ))}
    </VioletStepper>
  ),
}

export const AllCompleted: Story = {
  render: () => (
    <VioletStepper activeStep={4}>
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <VioletStep index={i}>
            <VioletStepIndicator index={i} />
            <div className="ml-2">
              <VioletStepTitle>{step.title}</VioletStepTitle>
            </div>
          </VioletStep>
          {i < steps.length - 1 && <VioletStepSeparator index={i} />}
        </React.Fragment>
      ))}
    </VioletStepper>
  ),
}

export const Vertical: Story = {
  render: () => (
    <VioletStepper activeStep={2} orientation="vertical">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <VioletStep index={i}>
            <VioletStepIndicator index={i} />
            <div className="ml-3">
              <VioletStepTitle>{step.title}</VioletStepTitle>
              <VioletStepDescription>{step.description}</VioletStepDescription>
            </div>
          </VioletStep>
          {i < steps.length - 1 && <VioletStepSeparator index={i} />}
        </React.Fragment>
      ))}
    </VioletStepper>
  ),
}

export const Interactive: Story = {
  render: function InteractiveStepper() {
    const [step, setStep] = React.useState(0)
    return (
      <div className="space-y-6">
        <VioletStepper activeStep={step}>
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <VioletStep index={i}>
                <VioletStepIndicator index={i} />
                <div className="ml-2">
                  <VioletStepTitle>{s.title}</VioletStepTitle>
                </div>
              </VioletStep>
              {i < steps.length - 1 && <VioletStepSeparator index={i} />}
            </React.Fragment>
          ))}
        </VioletStepper>
        <div className="flex gap-2">
          <VioletButton
            variant="outline"
            size="sm"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Previous
          </VioletButton>
          <VioletButton
            size="sm"
            onClick={() => setStep((s) => Math.min(steps.length, s + 1))}
            disabled={step >= steps.length}
          >
            Next
          </VioletButton>
        </div>
      </div>
    )
  },
}
