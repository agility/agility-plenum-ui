import type { Meta, StoryObj } from "@storybook/react"
import { defaultIcon } from "../../Button/defaultArgs"
import Capsule from "../Capsule"
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Capsule> = {
	title: "Design System/Atoms/Buttons/Capsule/Danger",
	component: Capsule,
	tags: ["autodocs"],
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=243-12178&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}

export default meta
type Story = StoryObj<typeof Capsule>
export const Danger: Story = {
	args: {
		label: "Danger",
		onClick: () => {
			window.alert("Button clicked!")
		},
		actionType: "danger"
	}
}
