import React, { FC, useEffect, useState } from "react"
import { default as cn } from "classnames"
import { Switch } from "@headlessui/react"

export interface IToggleSwitchProps {
	/** size of the toggle - default value is "md" */
	size?: "sm" | "md" | "lg"
	/** Toggle Switch label */
	label?: string | null
	/** A Classname to be used for the label*/
	labelStyles?: string
	/** A Classname  to style the Switch Group*/
	groupStyles?: string
	/** Toggle Switch ID*/
	id: string
	/** Disabled state - default value is false*/
	isDisabled?: boolean
	/** Whether or not the switch is checked. */
	isChecked: boolean
	/**A function to update isChecked State*/
	onChangeHandler: (state: boolean, value: string) => void
	/** If field is required - default value is false */
	isRequired?: boolean
	/** Error state - default value is false*/
	isError?: boolean
	/** Message or description */
	// message?: string
	/** The name used when using this component inside a form.*/
	name: string
}

/** Comment */
export const ToggleSwitch: FC<IToggleSwitchProps> = ({
	size = "md",
	label,
	labelStyles,
	groupStyles,
	isDisabled,
	isChecked,
	onChangeHandler,
	id,
	name,
	isRequired = false,
	isError = false
	// onChange
}) => {
	const [toggleChecked, setToggleChecked] = useState<boolean>(isChecked)
	const [toggleValue] = useState<"on" | "off">(toggleChecked ? "on" : "off")
	useEffect(() => setToggleChecked(isChecked), [isChecked])

	//Styles for the switch input/button
	const switchStyles = cn(
		"relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-within:ring-2  focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:ring-2  focus:ring-purple-500 focus:ring-opacity-75",
		{ "bg-purple-600": toggleChecked },
		{ "bg-gray-200": !toggleChecked },
		{ "h-[38px] w-[74px]": size === "lg" },
		{ "h-[28px] w-[64px]": size === "md" },
		{ "h-[18px] w-[34px]": size === "sm" },
		{
			"focus-visible:ring-red-600 focus-within:ring-red-600 focus:ring-red-600 !bg-red-400":
				isError
		},
		{ "opacity-75 !bg-purple-300": isDisabled }
	)
	// Styles for the  circular button inside the switch
	const toggleStyles = cn(
		"pointer-events-none inline-block rounded-full bg-white",
		" transform ring-0 transition ease-in-out duration-200",
		{ "translate-x-9": toggleChecked },
		{ "translate-x-0": !toggleChecked },
		{ "h-[34px] w-[34px]": size === "lg" },
		{ "h-[24px] w-[24px]": size === "md" },
		{ "h-[14px] w-[14px] translate-x-4": size === "sm" && toggleChecked },
		{ "h-[14px] w-[14px] translate-x-0": size === "sm" && !toggleChecked }
	)
	const handleToggleChange = (v: boolean | null) => {
		if (v === null) return
		console.log(v)
		setToggleChecked(v)
		onChangeHandler && onChangeHandler(v, toggleValue)
	}

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
						className={cn("mr-2", labelStyles && labelStyles)}
					>
						{label}
						{isRequired && (
							<span className="text-red-500">&nbsp;*</span>
						)}
					</Switch.Label>
				)}
				<Switch
					checked={toggleChecked}
					name={name}
					value={toggleValue}
					id={id}
					className={switchStyles}
					onChange={
						isDisabled
							? () => handleToggleChange(null)
							: (v: boolean) => handleToggleChange(v)
					}
					aria-disabled={isDisabled}
				>
					<span className="sr-only">
						Use space to toggle {toggleChecked ? "on" : "off"}.
					</span>
					<span aria-hidden="true" className={toggleStyles} />
				</Switch>
			</div>
		</Switch.Group>
	)
}
