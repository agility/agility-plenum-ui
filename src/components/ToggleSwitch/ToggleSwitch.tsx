import React, { FC, useState } from "react"
import { default as cn } from "classnames"
import { Switch } from "@headlessui/react"

export interface IToggleSwitchProps {
	/** size state */
	size?: "sm" | "md" | "lg"
	/** Toggle Switch label */
	label?: string
	/** A Classname string to be used for the label*/
	labelStyles?: string
	/** A Classname string to style the Switch Group*/
	groupStyles?: string
	/** Toggle Switch ID */
	id?: string
	/** Disabled state */
	isDisabled?: boolean
	/** The value used when using this component inside a form, if it is checked.*/
	value: string
	/** Whether or not the switch is checked. */
	isChecked: boolean
	/** If field is required */
	isRequired?: boolean
	/** Error state */
	// isError?: boolean
	/** Message or description */
	// message?: string
	/** The function to call when the switch is toggled. */
	onChange?: (value: string, isChecked: boolean) => void
	/** The name used when using this component inside a form.*/
	name: string
}

/** Comment */
export const ToggleSwitch: FC<IToggleSwitchProps> = ({
	size = "md",
	label = "Label",
	labelStyles,
	groupStyles,
	isDisabled,
	value = "Toggle value",
	isChecked = false,
	onChange,
	id = "",
	name
}) => {
	const [checked, setChecked] = useState<boolean>(isChecked)
	const [toggleValue, setToggleValue] = useState<string>(value)
	const handleToggleChange = () => {
		setChecked(!checked)
		typeof onChange === "function" && onChange(toggleValue, checked)
	}
	const switchStyles = cn(
		"relative inline-flex flex-shrink-0",
		"border-2 border-transparent rounded-full cursor-pointer",
		"transition-colors ease-in-out duration-200 focus:outline-none",
		"focus-visible:ring-2  focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
		isDisabled && "opacity-75 bg-red-200",
		{ "bg-purple-600": checked },
		{ "bg-gray-200": !checked },
		{ "h-[38px] w-[74px]": size === "lg" },
		{ "h-[28px] w-[64px]": size === "md" },
		{ "h-[18px] w-[34px]": size === "sm" }
	)
	// the circular button inside the switch
	const toggleStyles = cn(
		"pointer-events-none inline-block rounded-full bg-white",
		" transform ring-0 transition ease-in-out duration-200",
		{ "translate-x-9": checked },
		{ "translate-x-0": !checked },
		{ "h-[34px] w-[34px]": size === "lg" },
		{ "h-[24px] w-[24px]": size === "md" },
		{ "h-[14px] w-[14px] translate-x-4": size === "sm" && checked },
		{ "h-[14px] w-[14px] translate-x-0": size === "sm" && !checked }
	)

	return (
		<Switch.Group>
			<div
				className={cn(
					"flex items-center justify-between text-center",
					groupStyles && groupStyles
				)}
			>
				{label && (
					<Switch.Label
						className={cn(
							"mr-2",
							labelStyles && labelStyles,
							isDisabled && "opacity-50"
						)}
					>
						{label}
					</Switch.Label>
				)}
				<Switch
					checked={checked}
					name={name}
					value={toggleValue}
					id={id}
					className={switchStyles}
					onChange={!isDisabled ? handleToggleChange : () => ""}
					aria-disabled={isDisabled}
				>
					<span className="sr-only">
						Use space to toggle {toggleValue}.
					</span>
					<span aria-hidden="true" className={toggleStyles} />
				</Switch>
			</div>
		</Switch.Group>
	)
}
