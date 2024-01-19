import React, { FC } from "react"
import { default as cn } from "classnames"
import Button, { IButtonProps } from "@/stories/atoms/buttons/Button"

import { DynamicIcon } from "@/stories/atoms/icons"
import Dropdown, { IDropdownProps, defaultClassNames } from "../DropdownComponent"

export interface IButtonDropdownProps {
	button: IButtonProps
	dropDown: IDropdownProps
	hideDivider?: false
	placement?: IDropdownProps["placement"]
	offsetOptions?: IDropdownProps["offsetOptions"]
}

/**
 * Primary UI component for user interaction
 */
const ButtonDropdown: FC<IButtonDropdownProps> = ({ button, dropDown, hideDivider = false, placement = "bottom-end", offsetOptions }) => {
	return (
		<div className="flex items-stretch focus-within:ring-purple-600 focus-within:ring-2 focus-within:ring-offset-white focus-within:ring-offset-2 rounded-[3px]">
			<Button
				{...{
					...button,
					className: cn(
						button.className,
						"!rounded-r-none !border-r-0 hover:!border-r-0 !focus:ring-transparent !focus-visible:ring-transparent !focus-within:ring-transparent !focus:ring-0 !focus-within:ring-0 !focus-visible:ring-0 !focus:ring-offset-0 !focus-visible:ring-offset-0 !focus-within:ring-offset-0 !ring-0 outline-none focus:outline-none focus-visible:outline-none focus-within:outline-none !ring-offset-0",
						"border-r-transparent"
					)
				}}
			/>
			{!hideDivider && <div
				className={cn(
					"w-[1px] rt",
					button.actionType === "primary"
						? "bg-violet-700 text-violet-100 hover:border-violet-700 hover:bg-violet-700 disabled:bg-violet-400 disabled:focus-visible:ring-0"
						: "",
					button.actionType === "secondary" ? "bg-purple-200 " : "",
					button.actionType === "alternative" ? "bg-gray-300" : ""
				)}
			></div>}
			<Dropdown
				{...{
					CustomDropdownTrigger: (
						<DynamicIcon
							{...{
								icon: "IconChevronDown",
								className: cn("h-5 w-5", {
									"text-violet-100": button.actionType === "primary",
									"text-purple-700 ": button.actionType === "secondary",
									"text-gray-700": button.actionType === "alternative"
								},
								dropDown.iconClassname
								),
							}}
						/>
					),
					buttonClassname: cn(
						"flex items-center justify-center rounded-l-none border !border-l-0 rounded-r  px-2 transition-all hover:!border-l-0",
						button.actionType === "primary"
							? cn(
									"border-violet-700 bg-violet-800  !text-white  hover:border-violet-700 hover:bg-violet-700 active:!border-violet-800 active:bg-violet-800 fill-white",
									"disabled:bg-violet-400 disabled:text-white disabled:hover:none disabled:active:bg-violet-400 disabled:border-violet-400"
							  )
							: "",
						button.actionType === "secondary"
							? cn(
									"border-purple-400 bg-purple-50 text-purple-700   hover:bg-purple-100 active:bg-purple-300 fill-purple-700",
									"disabled:bg-purple-50 disabled:text-grey-50 disabled:hover:none disabled:active:bg-purple-50 "
							  )
							: "",
						button.actionType === "alternative"
							? cn(
									"border-gray-300 bg-white text-gray-700 fill-gray-700  hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100",
									"disabled:bg-gray-100 disabled:text-gray-500 disabled:hover:none disabled:active:bg-gray-100 disabled:border-gray-300"
							  )
							: "",
						dropDown.buttonClassname
					),
					offsetOptions: offsetOptions ?? {
						crossAxis: 0,
						mainAxis: -4, //up/down
						alignmentAxis: 0 //left/right
					},
					placement,
					...(dropDown as IDropdownProps),
				}}
			/>
			<div className="hidden !bg-purple-100 !text-purple-600 transition-all hover:bg-purple-200 focus:bg-purple-300" />
		</div>
	)
}
export default ButtonDropdown
