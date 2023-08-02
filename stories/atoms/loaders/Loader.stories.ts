import type { Meta, StoryObj } from "@storybook/react"
import Loader from "./Loader"

const meta: Meta<typeof Loader> = {
	title: "Design System/Atoms/Loaders/Loader",
	component: Loader
}

type Story = StoryObj<typeof Loader>

export const DefaultLoader: Story = {
  args: { className: "" },
}

export default meta
