import React, { FC } from "react"
import { default as cn } from "classnames"

import { Button, ButtonProps } from "../Button/Button"
import { Dropdown, IDropdownProps, defaultClassNames } from "../Dropdown"
export interface ButtonDropDownProps {
	button: ButtonProps
	dropDown: IDropdownProps
	xPosition?: "left" | "right"
}

/**
 * Primary UI component for user interaction
 */
export const ButtonDropDown: FC<ButtonDropDownProps> = ({ button, dropDown }) => {
	const dropDownClasses: IDropdownProps["classNames"] = {
		...defaultClassNames,
		groupClassname: cn(
			"flex items-center justify-center rounded-l-none border !border-l-0 rounded-r  px-2 transition-all hover:!border-l-0",
			button.type === "primary"
				? "border-purple-600 bg-purple-600  !text-white  hover:border-purple-700 hover:bg-purple-700 active:!border-purple-800 active:!bg-purple-800 fill-white"
				: "",
			button.type === "secondary"
				? "border-purple-50 bg-purple-50 !text-purple-700  hover:border-purple-100 hover:bg-purple-100 active:!border-purple-300 active:!bg-purple-300 fill-purple-700"
				: "",
			button.type === "alternative"
				? "border-gray-300 bg-white !text-gray-700 fill-gray-700  hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100"
				: ""
		)
	}
	return (
		<div className="flex items-stretch">
			<Button
				{...button}
				className="!rounded-r-none !border-r-0 hover:!border-r-0"
			/>
			<div
				className={cn(
					"w-[1px]",
					button.type === "primary" ? "bg-purple-700" : "",
					button.type === "secondary" ? "bg-purple-200" : "",
					button.type === "alternative" ? "bg-gray-300" : ""
				)}
			>
				ds
			</div>
			<Dropdown
				{...{
					...(dropDown as IDropdownProps),
					classNames: dropDownClasses
				}}
			/>
			<div className="hidden !bg-purple-100 !text-purple-600 transition-all hover:bg-purple-200 focus:bg-purple-300" />
		</div>
	)
}
