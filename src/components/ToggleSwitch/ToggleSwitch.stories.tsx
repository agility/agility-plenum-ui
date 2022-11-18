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
const toggleBaseArgs: IToggleSwitchProps = {
	id: "",
	isChecked: false,
	name: "",
	isDisabled: false,
	isRequired: false,
	size: "md",
	label: "",
	onChangeHandler: (state, value) => {
		console.log(
			`toggle is currently set to ${value}. toggle checked state is currently ${state}`
		)
	}
}
export const AllVariations = Template.bind({})
AllVariations.decorators = [
	() => {
		return (
			<div className="grid grid-flow-row gap-4">
				<ToggleSwitch
					{...(ToggleSwitchComponentSmDisabled.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentSmChecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentSmUnchecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentSmError.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentSmRequired.args as IToggleSwitchProps)}
				/>

				<ToggleSwitch
					{...(ToggleSwitchComponentMdDisabled.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentMdChecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentMdUnchecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentMdError.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentMdRequired.args as IToggleSwitchProps)}
				/>

				<ToggleSwitch
					{...(ToggleSwitchComponentLgDisabled.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentLgChecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentLgUnchecked.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentLgError.args as IToggleSwitchProps)}
				/>
				<ToggleSwitch
					{...(ToggleSwitchComponentLgRequired.args as IToggleSwitchProps)}
				/>

				<span className="mt-5 block text-xs text-gray-400">
					Note: controls are disabled on this view
				</span>
			</div>
		)
	}
]
//SMALL TOGGLES
export const ToggleSwitchComponentSmDisabled = Template.bind({})
ToggleSwitchComponentSmDisabled.args = {
	...toggleBaseArgs,
	size: "sm",
	isDisabled: true,
	label: "disabled",
	isChecked: true
}
ToggleSwitchComponentSmDisabled.storyName = "ToggleSwitch Small - Disabled"

export const ToggleSwitchComponentSmChecked = Template.bind({})
ToggleSwitchComponentSmChecked.args = {
	...toggleBaseArgs,
	size: "sm",
	label: "small on",
	isChecked: true
}
ToggleSwitchComponentSmChecked.storyName = "ToggleSwitch Small - Checked"

export const ToggleSwitchComponentSmUnchecked = Template.bind({})
ToggleSwitchComponentSmUnchecked.args = {
	...toggleBaseArgs,
	size: "sm",
	label: "small off",
	isChecked: false
}
ToggleSwitchComponentSmUnchecked.storyName = "ToggleSwitch Small - Unchecked"

export const ToggleSwitchComponentSmError = Template.bind({})
ToggleSwitchComponentSmError.args = {
	...toggleBaseArgs,
	size: "sm",
	label: "small error",
	isChecked: false,
	isError: true
}
ToggleSwitchComponentSmError.storyName = "ToggleSwitch Small - Error"

export const ToggleSwitchComponentSmRequired = Template.bind({})
ToggleSwitchComponentSmRequired.args = {
	...toggleBaseArgs,
	size: "sm",
	label: "small required",
	isChecked: false,
	isRequired: true
}
ToggleSwitchComponentSmRequired.storyName = "ToggleSwitch Small - isRequired"

// MEDIUM TOGGLES
export const ToggleSwitchComponentMdDisabled = Template.bind({})
ToggleSwitchComponentMdDisabled.args = {
	...toggleBaseArgs,
	size: "md",
	isDisabled: true,
	label: "medium disabled",
	isChecked: true
}
ToggleSwitchComponentMdDisabled.storyName = "ToggleSwitch Medium - Disabled"

export const ToggleSwitchComponentMdChecked = Template.bind({})
ToggleSwitchComponentMdChecked.args = {
	...toggleBaseArgs,
	size: "md",
	label: "medium on",
	isChecked: true
}
ToggleSwitchComponentMdChecked.storyName = "ToggleSwitch Medium - Checked"

export const ToggleSwitchComponentMdUnchecked = Template.bind({})
ToggleSwitchComponentMdUnchecked.args = {
	...toggleBaseArgs,
	size: "md",
	label: "medium off",
	isChecked: false
}
ToggleSwitchComponentMdUnchecked.storyName = "ToggleSwitch Medium - Unchecked"

export const ToggleSwitchComponentMdError = Template.bind({})
ToggleSwitchComponentMdError.args = {
	...toggleBaseArgs,
	size: "md",
	label: "medium error",
	isChecked: false,
	isError: true
}
ToggleSwitchComponentMdError.storyName = "ToggleSwitch Medium - Error"

export const ToggleSwitchComponentMdRequired = Template.bind({})
ToggleSwitchComponentMdRequired.args = {
	...toggleBaseArgs,
	size: "md",
	label: "medium required",
	isChecked: false,
	isRequired: true
}
ToggleSwitchComponentMdRequired.storyName = "ToggleSwitch Medium - isRequired"

// LARGE TOGGLES
export const ToggleSwitchComponentLgDisabled = Template.bind({})
ToggleSwitchComponentLgDisabled.args = {
	...toggleBaseArgs,
	size: "lg",
	isDisabled: true,
	label: "large disabled",
	isChecked: true
}
ToggleSwitchComponentLgDisabled.storyName = "ToggleSwitch Large - Disabled"

export const ToggleSwitchComponentLgChecked = Template.bind({})
ToggleSwitchComponentLgChecked.args = {
	...toggleBaseArgs,
	size: "lg",
	label: "large on",
	isChecked: true
}
ToggleSwitchComponentLgChecked.storyName = "ToggleSwitch Large - Checked"

export const ToggleSwitchComponentLgUnchecked = Template.bind({})
ToggleSwitchComponentLgUnchecked.args = {
	...toggleBaseArgs,
	size: "lg",
	label: "large off",
	isChecked: false
}
ToggleSwitchComponentLgUnchecked.storyName = "ToggleSwitch Large - Unchecked"

export const ToggleSwitchComponentLgError = Template.bind({})
ToggleSwitchComponentLgError.args = {
	...toggleBaseArgs,
	size: "lg",
	label: "large error",
	isChecked: false,
	isError: true
}
ToggleSwitchComponentLgError.storyName = "ToggleSwitch Large - Error"

export const ToggleSwitchComponentLgRequired = Template.bind({})
ToggleSwitchComponentLgRequired.args = {
	...toggleBaseArgs,
	size: "lg",
	label: "large required",
	isChecked: false,
	isRequired: true
}
ToggleSwitchComponentLgRequired.storyName = "ToggleSwitch Large - isRequired"