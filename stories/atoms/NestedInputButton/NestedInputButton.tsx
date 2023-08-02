import React from "react"
import { DynamicIcon, IDynamicIconProps } from "../icons"
import { default as cn } from "classnames"
export interface INestedInputButtonProps {
	/** Icon to be included*/
	icon?: IDynamicIconProps
	/** CTA label */
	ctaLabel?: string
	/** Alignment */
	align: "left" | "right"
	/** Show the CTA without Background color and a border seperator */
	isClear?: boolean
	/** Onclick callback */
	onClickHandler?(): void
	buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

const NestedInputButton: React.FC<INestedInputButtonProps> = ({
	icon,
	ctaLabel,
	align = "right",
	isClear = false,
	onClickHandler,
	buttonProps
}) => {
	const handleClick = () => {
		onClickHandler && onClickHandler()
	}
	const buttonStyle = cn(
		"relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500",
		{
			"rounded-r text-gray-500 -ml-px": align === "right"
		},
		{
			"rounded-l text-gray-500 -mr-px": align === "left"
		},
		{
			"cursor-default": !onClickHandler
		},
		{
			"hover:bg-gray-100": onClickHandler && !isClear
		},
		{
			"!border-l-white": isClear && align === "right"
		},
		{
			"!border-r-white": isClear && align === "left"
		},
		{
			"bg-gray-50": !isClear
		},
		{
			"bg-white": isClear
		}
	)
	return (
		<button {...{ ...buttonProps, className: buttonStyle, onClick: handleClick }}>
			{icon && <DynamicIcon {...{ ...icon, className: "text-gray-400" }} />}
			{ctaLabel && <span>{ctaLabel}</span>}
		</button>
	)
}

export default NestedInputButton
