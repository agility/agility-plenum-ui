import Loader from "stories/atoms/loaders/Loader"
import { default as cn } from "classnames"
import React, { HTMLAttributeAnchorTarget, forwardRef } from "react"
import { DynamicIcon, UnifiedIconName, IDynamicIconProps } from "../../icons"

// import Loader from "../loaders/loader/Loader"

export type BTNActionType = "primary" | "secondary" | "alternative" | "danger"

export interface IButtonProps
	extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> {
	/** Is the button a Primary CTA, alternative or danger button? */
	actionType?: BTNActionType
	/** How lg should the button be? - Defaults to 'base'. */
	size?: "xs" | "sm" | "md" | "lg" | "xl"
	/** The Button's text content. */
	label: string
	/** The Icon to be displayed inside the button. */
	icon?: IDynamicIconProps | UnifiedIconName
	/** Does the button width grow to fill it's container? */
	fullWidth?: boolean
	/** Optionally render as anchor tag */
	asLink?: {
		href: string
		target: HTMLAttributeAnchorTarget
		title?: string
	}
	/** The placement of the icon relative to the text content. */
	iconPosition?: "trailing" | "leading"
	/** Use an custom svg element */
	CustomSVGIcon?: JSX.Element
	/** Is the associated content loading? */
	isLoading?: boolean
	className?: string
	iconObj?: React.ReactNode
}
/**
 * Primary UI component for user interaction
 */
const _Button = ({
	actionType = "primary",
	size = "sm",
	label,
	icon,
	iconObj,
	CustomSVGIcon,
	fullWidth = false,
	iconPosition = "trailing",
	asLink,
	isLoading = false,
	className,
	...props
}: IButtonProps, 	
	ref: React.LegacyRef<HTMLButtonElement>
) => {
	const iconStyles = cn(
		{ "text-white h-5 w-5": actionType === "primary" || actionType === "danger" },
		{ "text-purple-700 h-5 w-5 ": actionType === "secondary" },
		{ "text-gray-700  h-5 w-5": actionType === "alternative" }
	)
	const loaderColors = cn(
		{ "border-r-white": actionType === "primary" },
		{ "border-purple-200 border-r-purple-700": actionType === "secondary" },
		{ "border-gray-200 border-r-gray-700": actionType === "alternative" },
		{ "border-red-800 border-r-white": actionType === "danger" }
	)
	const loaderSize = cn({ "h-4 w-4": size === "sm" }, { "h-5 w-5": size === "md" }, { "h-6 w-6 ": size === "lg" })

	return (
		<button
			type="button"
			className={cn(
				"inline-flex items-center justify-center gap-x-2  font-medium p-2 rounded-[3px] !ring-offset-white outline-none   focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2  focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2  active:ring-2 active:ring-purple-600 active:ring-offset-2 transition-all",
				{ "w-full": fullWidth },
				{ "px-[11px] py-[7px] text-xs": size === "xs" },
				{ "px-[13px] py-[9px] text-sm": size === "sm" },
				{ "px-[17px] py-[9px] text-sm": size === "md" },
				{ "px-[17px] py-[9px] text-base": size === "lg" },
				{ "px-[25px] py-[13px] text-base": size === "xl" },
				{
					"bg-purple-600 text-white hover:border-purple-700 hover:bg-purple-700 ": actionType === "primary"
				},
				{
					" bg-purple-50 text-purple-700 hover:bg-purple-200   focus-within:bg-purple-100  focus-visible:bg-purple-100 focus:bg-purple-100 active:bg-purple-100":
						actionType === "secondary"
				},
				{
					"border-gray-300 bg-white border  text-gray-700 hover:bg-gray-50 focus-visible:!border-gray-300 focus-within:!border-gray-300 focus:!border-gray-300 active:!border-gray-300":
						actionType === "alternative"
				},
				{
					" bg-red-600 text-white hover:bg-red-700 <focus-visible:!></focus-visible:!>ring-red-500 focus:!ring-red-500 active:!ring-red-500 focus-within:!ring-red-500 ":
						actionType === "danger"
				},
				className ? className : ""
			)}
			ref={ref}
			{...props}
		>
			{CustomSVGIcon &&
				(isLoading ? (
					<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
				) : (
					<i>{CustomSVGIcon}</i>
				))}
			{iconObj &&
				iconPosition === "leading" &&
				(!isLoading ? (
					<>{iconObj}</>
				) : (
					<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
				))}

			{icon &&
				iconPosition === "leading" &&
				(isLoading ? (
					<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
				) : typeof icon === "string" ? (
					<DynamicIcon {...{ icon: icon, className: iconStyles }} />
				) : (
					<DynamicIcon {...{ ...icon, className: iconStyles }} />
				))}

			{!icon && !CustomSVGIcon && isLoading && (
				<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
			)}
			{label}
			{icon &&
				iconPosition === "trailing" &&
				(isLoading ? (
					<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
				) : typeof icon === "string" ? (
					<DynamicIcon {...{ icon: icon, className: iconStyles }} />
				) : (
					<DynamicIcon {...{ ...icon, className: iconStyles }} />
				))}
			{iconObj &&
				iconPosition === "trailing" &&
				(!isLoading ? (
					<>{iconObj}</>
				) : (
					<div className={cn("h-4 rounded-full w-4 border-2 m-0 animate-spin", loaderColors, loaderSize)} />
				))}
		</button>
	)
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(_Button)

export default Button
