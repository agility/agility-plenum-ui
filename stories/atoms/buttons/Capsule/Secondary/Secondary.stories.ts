import type { Meta, StoryObj } from "@storybook/react"
import { defaultIcon } from "../../Button/defaultArgs"
import Capsule from "../Capsule"

const meta: Meta<typeof Capsule> = {
	title: "Design System/atoms/Buttons/Capsule/Secondary",
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
export const Secondary: Story = {
	args: {
		label: "Secondary",
		onClick: () => {
			window.alert("Button clicked!")
		},
		actionType: "secondary"
	}
}
