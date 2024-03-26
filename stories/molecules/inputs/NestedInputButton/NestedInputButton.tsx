import React from "react"
import { DynamicIcon, IDynamicIconProps } from "@/stories/atoms/icons"
import { default as cn } from "classnames"
export interface INestedInputButtonProps
	extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> {
	/** Icon to be included*/
	icon?: IDynamicIconProps
	/** CTA label */
	ctaLabel?: string
	/** Alignment */
	align: "left" | "right"
	/** Show the CTA without Background color and a border seperator */
	isClear?: boolean
}

const NestedInputButton: React.FC<INestedInputButtonProps> = ({
	icon,
	ctaLabel,
	align = "right",
	isClear = false,
	...props
}) => {
	const { ...buttonProps } = props
	const { onClick } = buttonProps
	const buttonStyle = cn(
		"relative flex items-center space-x-2 px-4 py-2 leading-5 border border-gray-300 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500",
		{
			"rounded-r text-gray-500 -ml-px": align === "right"
		},
		{
			"rounded-l text-gray-500 -mr-px": align === "left"
		},
		{
			"cursor-default": !onClick
		},
		{
			"hover:bg-gray-100": onClick && !isClear
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
		<button
			{...{
				...buttonProps,
				className: buttonStyle,
				onClick: (e) => {
					e.preventDefault()
					onClick && onClick(e)
				}
			}}
		>
			{icon && <DynamicIcon {...{ ...icon, className: "text-gray-400 h-5 w-5" }} />}
			{ctaLabel && <span>{ctaLabel}</span>}
		</button>
	)
}

export default NestedInputButton
