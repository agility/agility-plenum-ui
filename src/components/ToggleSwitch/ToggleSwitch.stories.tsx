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
				<span className="mt-5 block text-xs text-gray-400">
					Note: controls are disabled on this view
				</span>
			</div>
		)
	}
]

export const ToggleSwitchComponentSm = Template.bind({})
ToggleSwitchComponentSm.args = {
	size: "sm",
	onChange: (value: string, isChecked: boolean) => {
		console.log(`Value: ${value} isChecked: ${isChecked}`)
	}
}
ToggleSwitchComponentSm.storyName = "ToggleSwitch Small"

export const ToggleSwitchComponentMd = Template.bind({})
ToggleSwitchComponentMd.args = {
	size: "md",
	onChange: (value: string, isChecked: boolean) => {
		console.log(`Value: ${value} isChecked: ${isChecked}`)
	}
}
ToggleSwitchComponentMd.storyName = "ToggleSwitch Medium"

export const ToggleSwitchComponentLg = Template.bind({})
ToggleSwitchComponentLg.args = {
	size: "lg",
	onChange: (value: string, isChecked: boolean) => {
		console.log(`Value: ${value} isChecked: ${isChecked}`)
	}
}
ToggleSwitchComponentLg.storyName = "ToggleSwitch Large"
