import React, { FC } from "react"
import { default as cn } from "classnames"
import { DynamicIcons, IconName } from "../../../../util/DynamicIcons"

export interface InputCtaProps {
	/** Icon name */
	icon?: IconName
	/** CTA label */
	ctaLabel?: string
	/** Alignment */
	align: "left" | "right"
	/** Show the CTA without Background color and a border seperator */
	isClear?: boolean
	/** Onclick callback */
	onClickHandler?(): void
}

/** Comment */
export const InputCta: FC<InputCtaProps> = ({
	icon,
	ctaLabel,
	align = "right",
	isClear = false,
	onClickHandler
}: InputCtaProps): JSX.Element => {
	const handleClick = () => {
		onClickHandler && onClickHandler()
	}
	const buttonStyle = cn(
		"relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:border focus:border-purple-600   ",
		{
			"rounded-r text-gray-700  border-l border-l-gray-300 focus:border-l-2":
				align === "right"
		},
		{
			"rounded-l text-gray-500 border-r border-r-gray-300 focus:border-r-2":
				align === "left"
		},
		{
			"cursor-default": !onClickHandler
		},
		{
			"hover:bg-gray-100": onClickHandler && !isClear
		},
		{
			"border-l-transparent border-r-none -z-10 focus:border-l-purple-600":
				isClear && align === "right"
		},
		{
			"!border-r-none rounded": isClear && align === "left"
		},
		{
			"bg-gray-50": !isClear
		},
		{
			"bg-white": isClear
		}
	)
	return (
		<button type="button" className={buttonStyle} onClick={handleClick}>
			<DynamicIcons
				icon={icon}
				className="-ml- h-5 w-5 text-gray-400"
				outline={false}
			/>
			{ctaLabel && <span>{ctaLabel}</span>}
		</button>
	)
}
