import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import { BRAND_CONFIG } from "../../common"
import { DynamicIcons, IDynamicIconsProps } from "./DynamicIcons"

export default {
	title: `${BRAND_CONFIG.brandTitle}/Components/DynamicIcons`,
	component: DynamicIcons
} as Meta

const Template: Story<IDynamicIconsProps> = (args) => (
	<div className="text-center">
		<DynamicIcons {...args} />
	</div>
)
const baseArgs: IDynamicIconsProps = {
	icon: "EmojiHappyIcon",
	outline: false
}

export const AllVariations = Template.bind({})
AllVariations.decorators = [
	() => {
		return <DynamicIcons {...(HeroIcon.args as IDynamicIconsProps)} />
	}
]

export const HeroIcon = Template.bind({})
HeroIcon.args = { ...baseArgs }

export const TablerIcon = Template.bind({})
TablerIcon.args = { ...baseArgs, icon: "IconAccessible" }

export const FAIcon = Template.bind({})
FAIcon.args = { ...baseArgs, icon: "FaYoutubeSquare" }
