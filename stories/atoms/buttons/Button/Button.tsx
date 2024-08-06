import Loader from "stories/atoms/loaders/Loader"
import { default as cn } from "classnames"
import React, { HTMLAttributeAnchorTarget, forwardRef } from "react"
import { DynamicIcon, UnifiedIconName, IDynamicIconProps } from "../../icons"

// import Loader from "../loaders/loader/Loader"

export type BTNActionType = "primary" | "secondary" | "alternative" | "danger" | "warning"

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
	iconClassName?: string
}
/**
 * Primary UI component for user interaction
 */
const _Button = (
	{
		actionType = "primary",
		size = "sm",
		label,
		icon,
		iconObj,
		CustomSVGIcon,
		fullWidth = false,
		iconPosition = "leading",
		asLink,
		isLoading = false,
		className,
		iconClassName,
		...props
	}: IButtonProps,
	ref: React.LegacyRef<HTMLButtonElement>
) => {
	let iconStyles = cn(
		{ "text-white h-5 w-5 stroke-[1.5]": actionType === "primary" || actionType === "danger" },
		{ "text-purple-700 h-5 w-5 stroke-[1.5]": actionType === "secondary" },
		{ "text-gray-400 h-5 w-5 stroke-[1.5]": actionType === "alternative" },
		{ "text-transparent-black-40 h-5 w-5 stroke-[1.5]": actionType === "warning" }
	)

	if (iconClassName) {
		iconStyles = cn(iconStyles, iconClassName)
	}

	const loaderColors = cn(
		{ "border-r-white": actionType === "primary" },
		{ "border-purple-200 border-r-purple-700": actionType === "secondary" },
		{ "border-gray-200 border-r-gray-700": actionType === "alternative" },
		{ "border-red-800 border-r-white": actionType === "danger" },
		{ "border-yellow-800 border-r-transparent-black-70": actionType === "warning" }
	)
	const loaderSize = cn({ "h-4 w-4": size === "sm" }, { "h-5 w-5": size === "md" }, { "h-6 w-6 ": size === "lg" })

	return asLink ? (
		//@ts-ignore
		<a
			{...{
				href: asLink.href,
				target: asLink.target,
				title: asLink.title,
				className: cn(
					"inline-flex items-center justify-center gap-x-2  font rounded-[3px] !ring-offset-white outline-none   focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2  focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2  active:ring-2 active:ring-purple-600 active:ring-offset-2 transition-all",
					{ "w-full": fullWidth },
					{ "px-[11px] py-[7px] text-xs": size === "xs" },
					{ "px-[13px] py-[9px] text-sm": size === "sm" },
					{ "px-[17px] py-[9px] text-sm": size === "md" },
					{ "px-[17px] py-[9px] text-base": size === "lg" },
					{ "px-[25px] py-[13px] text-base": size === "xl" },
					{
						"bg-violet-800 text-white hover:border-violet-700 hover:bg-violet-700 disabled:bg-violet-400 disabled:focus-visible:ring-0":
							actionType === "primary"
					},
					{
						" bg-purple-50  border-purple-400 border hover:border-purple-500 text-purple-700 hover:bg-purple-100   focus-within:bg-purple-100  focus-visible:bg-purple-100 focus:bg-purple-100 active:bg-purple-100 disabled:bg-purple-50 disabled:text-purple-300 disabled:focus-visible:ring-0":
							actionType === "secondary"
					},
					{
						"border-gray-300 bg-white border  text-gray-700 hover:bg-gray-50 focus-visible:!border-gray-300 focus-within:!border-gray-300 focus:!border-gray-300 active:!border-gray-300 disabled:bg-gray-50 disabled:text-gray-300 disabled:focus-visible:ring-0":
							actionType === "alternative"
					},
					{
						" bg-red-600 text-white hover:bg-red-700 <focus-visible:!></focus-visible:!>ring-red-500 focus:!ring-red-500 active:!ring-red-500 focus-within:!ring-red-500 disabled:bg-red-400 disabled:text-gray-50 disabled:focus-visible:ring-0":
							actionType === "danger"
					},
					{
						" bg-yellow-500 text-transparent-black-70 hover:bg-yellow-700 <focus-visible:!></focus-visible:!>ring-yellow-500 focus:!ring-yellow-500 active:!ring-yellow-500 focus-within:!ring-yellow-500 disabled:bg-yellow-400 disabled:text-transparent-black-70 disabled:focus-visible:ring-0":
							actionType === "warning"
					},
					className ? className : ""
				),
				onClick: props.onClick
			}}
		>
			{" "}
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
		</a>
	) : (
		<button
			type="button"
			className={cn(
				"inline-flex items-center justify-center gap-x-2 rounded-[3px] !ring-offset-white outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2  focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2  active:ring-2 active:ring-purple-600 active:ring-offset-2 transition-all",
				{ "w-full": fullWidth },
				{ "px-[11px] py-[7px] text-xs": size === "xs" },
				{ "px-[13px] py-[9px] text-sm": size === "sm" },
				{ "px-[17px] py-[9px] text-sm": size === "md" },
				{ "px-[17px] py-[9px] text-base": size === "lg" },
				{ "px-[25px] py-[13px] text-base": size === "xl" },
				{
					"bg-violet-800 text-white hover:border-violet-700 hover:bg-violet-700 disabled:bg-violet-400 disabled:focus-visible:ring-0":
						actionType === "primary"
				},
				{
					" bg-purple-50  border-purple-400 border hover:border-purple-500 text-purple-700 hover:bg-purple-100   focus-within:bg-purple-100  focus-visible:bg-purple-100 focus:bg-purple-100 active:bg-purple-100 disabled:bg-purple-50 disabled:text-purple-300 disabled:focus-visible:ring-0":
						actionType === "secondary"
				},
				{
					"border-gray-300 bg-white border  text-gray-700 hover:bg-gray-50 focus-visible:!border-gray-300 focus-within:!border-gray-300 focus:!border-gray-300 active:!border-gray-300 disabled:bg-gray-50 disabled:text-gray-300 disabled:focus-visible:ring-0":
						actionType === "alternative"
				},
				{
					" bg-red-600 text-white hover:bg-red-700 <focus-visible:!></focus-visible:!>ring-red-500 focus:!ring-red-500 active:!ring-red-500 focus-within:!ring-red-500 disabled:bg-red-400 disabled:text-gray-50 disabled:focus-visible:ring-0":
						actionType === "danger"
				},
				{
					" bg-yellow-500 text-transparent-black-70 hover:bg-yellow-700 <focus-visible:!></focus-visible:!>ring-yellow-500 focus:!ring-yellow-500 active:!ring-yellow-500 focus-within:!ring-yellow-500 disabled:bg-yellow-300 disabled:text-transparent-black-30 disabled:focus-visible:ring-0":
						actionType === "warning"
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
