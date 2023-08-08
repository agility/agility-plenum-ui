import React, { FC } from "react"
import { default as cn } from "classnames"
import Button, { IButtonProps } from "@/stories/atoms/buttons/Button"

import { DynamicIcon } from "@/stories/atoms/icons"
import Dropdown, { IDropdownProps, defaultClassNames } from "../DropdownComponent"

export interface IButtonDropdownProps {
	button: IButtonProps
	dropDown: IDropdownProps
	placement?: IDropdownProps["placement"]
	offsetOptions?: IDropdownProps["offsetOptions"]
}

/**
 * Primary UI component for user interaction
 */
const ButtonDropdown: FC<IButtonDropdownProps> = ({ button, dropDown, placement, offsetOptions }) => {
	const dropDownClasses: IDropdownProps["classNames"] = {
		...defaultClassNames,
		groupClassname: cn(
			"flex items-center justify-center rounded-l-none border !border-l-0 rounded-r  px-2 transition-all hover:!border-l-0",
			button.actionType === "primary"
				? "border-purple-600 bg-purple-600  !text-white  hover:border-purple-700 hover:bg-purple-700 active:!border-purple-800 active:!bg-purple-800 fill-white"
				: "",
			button.actionType === "secondary"
				? "border-purple-50 bg-purple-50 !text-purple-700  hover:border-purple-100 hover:bg-purple-100 active:!border-purple-300 active:!bg-purple-300 fill-purple-700"
				: "",
			button.actionType === "alternative"
				? "border-gray-300 bg-white !text-gray-700 fill-gray-700  hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100"
				: ""
		)
	}
	return (
		<div className="flex items-stretch focus-within:ring-purple-600 focus-within:ring-2 focus-within:ring-offset-white focus-within:ring-offset-2 rounded-[3px]">
			<Button
				{...{
					...button,
					className: cn(
						button.className,
						"!rounded-r-none !border-r-0 hover:!border-r-0 !focus:ring-transparent !focus-visible:ring-transparent !focus-within:ring-transparent !focus:ring-0 !focus-within:ring-0 !focus-visible:ring-0 !focus:ring-offset-0 !focus-visible:ring-offset-0 !focus-within:ring-offset-0 !ring-0 outline-none focus:outline-none focus-visible:outline-none focus-within:outline-none !ring-offset-0"
					)
				}}
			/>
			<div
				className={cn(
					"w-[1px] rt",
					button.actionType === "primary" ? "bg-purple-700" : "",
					button.actionType === "secondary" ? "bg-purple-200" : "",
					button.actionType === "alternative" ? "bg-gray-300" : ""
				)}
			></div>
			<Dropdown
				{...{
					...(dropDown as IDropdownProps),
					CustomDropdownTrigger: (
						<DynamicIcon
							{...{
								icon: "ChevronDownIcon",
								className: cn("h-5 w-5", {
									"text-white": button.actionType === "primary",
									"text-purple-700": button.actionType === "secondary",
									"text-gray-700": button.actionType === "alternative"
								})
							}}
						/>
					),
					classNames: dropDownClasses,
					offsetOptions: offsetOptions ?? {
						crossAxis: 0,
						mainAxis: 5, //up/down
						alignmentAxis: -10 //left/right
					},
					placement
				}}
			/>
			<div className="hidden !bg-purple-100 !text-purple-600 transition-all hover:bg-purple-200 focus:bg-purple-300" />
		</div>
	)
}
export default ButtonDropdown
