import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import { ToggleSwitch, IToggleSwitchProps } from "./ToggleSwitch"
import { BRAND_CONFIG } from "../../common"

export default {
	title: `${BRAND_CONFIG.brandTitle}/Components/ToggleSwitch`,
	component: ToggleSwitch
} as Meta
const Template: Story<IToggleSwitchProps> = (args) => <ToggleSwitch {...args} />

export const AllVariations = Template.bind({})
AllVariations.decorators = [
	() => {
		return (
			<div className="grid grid-flow-row gap-4">
				<ToggleSwitch
					{...(ToggleSwitchComponentSm.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentMd.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentLg.args as IToggleSwitchProps)}
				/>
				<span className="block mt-5 text-xs text-gray-400">
					Note: controls are disabled on this view
				</span>
			</div>
		)
	}
]

export const ToggleSwitchComponentSm = Template.bind({})
ToggleSwitchComponentSm.args = {
	size: "sm",
	isDisabled: true,
	label: "Is Disabled",
	value: "on",
	isChecked: true
}
ToggleSwitchComponentSm.storyName = "ToggleSwitch Small"

export const ToggleSwitchComponentMd = Template.bind({})
ToggleSwitchComponentMd.args = {
	size: "md",
	isChecked: true,
	label: "checked"
}
ToggleSwitchComponentMd.storyName = "ToggleSwitch Medium"

export const ToggleSwitchComponentLg = Template.bind({})
ToggleSwitchComponentLg.args = {
	size: "lg",
	value: "on",
	label: "on"
}
ToggleSwitchComponentLg.storyName = "ToggleSwitch Large"
