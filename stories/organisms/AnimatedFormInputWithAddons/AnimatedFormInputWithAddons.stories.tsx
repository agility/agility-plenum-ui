import type { Meta, StoryObj } from "@storybook/react"
import AnimatedFormInputWithAddons, { IAnimatedFormInputWithAddons } from "./AnimatedFormInputWithAddons"

const meta: Meta<typeof AnimatedFormInputWithAddons> = {
	title: "Design System/organisms/Animated Form Input with Addons",
	component: AnimatedFormInputWithAddons,
	tags: ["autodocs"],
	argTypes: {}
}
const DefaultArgs: IAnimatedFormInputWithAddons = {
	id: "test",
	containerStyles: "w-full",
	label: {
		display: "Input Label"
	},
	placeholder: "Placeholder",
	handleChange: (value: string) => {
		console.log(value)
	},
	type: "text",
	value: "",
	addonBTN: {
		icon: { icon: "IconPencil" },
		align: "right",
		ctaLabel: "Edit",
		onClickHandler: () => {
			alert("clicked")
		}
	}
}

export default meta
type Story = StoryObj<typeof AnimatedFormInputWithAddons>

export const DefaultStory: Story = {
	args: {
		...DefaultArgs
	} as IAnimatedFormInputWithAddons
}

export const AnimatedFormInputWithAddonsStory: Story = {
	args: {
		...DefaultArgs,
		label: { display: "label with placeholder" },
		placeholder: "Placeholder"
	} as IAnimatedFormInputWithAddons
}
