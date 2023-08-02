import type { Meta, StoryObj } from "@storybook/react"
import RadialProgress from "./RadialProgress"

const meta: Meta<typeof RadialProgress> = {
	title: "Design System/Atoms/Loaders/RadialProgress",
	component: RadialProgress
}

type Story = StoryObj<typeof RadialProgress>

export const DefaultRadialProgress: Story = {
  args: {
    inputValue: 33,
    radius: 20,
    children: <></>,
  },
}

export default meta
