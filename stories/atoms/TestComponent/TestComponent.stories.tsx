
import type { Meta, StoryObj } from "@storybook/react"
import TestComponent, { ITestComponentProps } from "./TestComponent"

const meta: Meta<typeof TestComponent> = {
  title: "",
  component: TestComponent,
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof TestComponent>
