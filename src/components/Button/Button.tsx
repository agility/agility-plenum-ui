import React, { forwardRef, HTMLAttributeAnchorTarget } from "react"
import { default as cn } from "classnames"
import { DynamicIcons, IconName } from "../../util/DynamicIcons"

import { Loader } from "../../util/Loader"
export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	type?: "primary" | "secondary" | "alternative" | "danger"
	/**
	 * How large should the button be?
	 */
	size?: "sm" | "base" | "lg"
	/**
	 * Button contents
	 */
	label?: string
	/**
	 * An optional icon
	 */
	icon?: IconName
	/**
	 * Optional click handler
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	/**
	 * If button should be disabled
	 */
	isDisabled?: boolean
	/**
	 * Shows loading indicator
	 */
	isLoading?: boolean

	/**
	 * If button should be of type submit
	 */
	isSubmit?: boolean

	isWidthFull?: boolean

	/**
	 * Add on classes
	 */
	className?: string

	iconObj?: React.ReactNode
	title?: string
	/**
	 * Optionally render as anchor tag
	 */
	asLink?: {
		href: string
		target: HTMLAttributeAnchorTarget
		title?: string
	}
}

/**
 * Primary UI component for user interaction
 */
const Button = (
	{
		type = "primary",
		size = "base",
		onClick,
		label,
		isDisabled,
		icon,
		iconObj,
		isLoading = false,
		isSubmit = false,
		isWidthFull = false,
		className,
		title,
		asLink
	}: ButtonProps,

	ref: React.LegacyRef<HTMLButtonElement>
) => {
	const iconStyles = cn(
		"h-5 w-5",
		{ "text-white": type === "primary" || type === "danger" },
		{ "text-purple-700": type === "secondary" },
		{ "text-gray-700": type === "alternative" }
	)

	return !asLink ? (
		<button
			ref={ref}
			type={isSubmit ? "submit" : "button"}
			title={title}
			className={cn(
				"inline-flex items-center justify-center space-x-2 rounded border transition-all",
				{ "w-full": isWidthFull === true },
				{ "px-4 py-2 text-sm": size === "sm" },
				{ "px-5 py-2 text-base": size === "base" },
				{ "px-5 py-2 text-lg": size === "lg" },
				{
					"cursor-auto  opacity-50": isDisabled
				},
				{
					"active: border-purple-600 bg-purple-600 text-white hover:border-purple-700 hover:bg-purple-700 active:border-purple-800 active:bg-purple-800":
						type === "primary"
				},
				{
					"border-purple-100 bg-purple-100 text-purple-700 hover:border-purple-200 hover:bg-purple-200 hover:text-purple-700 active:border-purple-300 active:bg-purple-300":
						type === "secondary"
				},
				{
					"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100":
						type === "alternative"
				},
				{
					"border-red-300 bg-red-600 text-white hover:bg-red-700 hover:text-white":
						type === "danger"
				},
				className
			)}
			onClick={
				!isDisabled
					? onClick
					: () => {
							null
					  }
			}
			disabled={isDisabled}
			aria-disabled={isDisabled}
		>
			{iconObj &&
				(isLoading ? (
					<Loader classes="h-5 w-5 border-2" />
				) : (
					<>{iconObj}</>
				))}

			{icon &&
				(isLoading ? (
					<Loader classes="h-5 w-5 border-2" />
				) : (
					<DynamicIcons
						icon={icon}
						className={iconStyles}
						outline={false}
					/>
				))}

			{!icon && !iconObj && isLoading && (
				<Loader classes="h-5 w-5 border-2" />
			)}

			{label && <span>{label}</span>}
		</button>
	) : (
		<a
			type={isSubmit ? "submit" : "button"}
			title={asLink.title || title}
			href={asLink.href}
			className={cn(
				"inline-flex items-center justify-center space-x-2 rounded border transition-all",
				{ "w-full": isWidthFull === true },
				{ "px-4 py-2 text-sm": size === "sm" },
				{ "px-5 py-2 text-base": size === "base" },
				{ "px-5 py-2 text-lg": size === "lg" },
				{
					"cursor-auto  opacity-50": isDisabled
				},
				{
					"active: border-purple-600 bg-purple-600 text-white hover:border-purple-700 hover:bg-purple-700 active:border-purple-800 active:bg-purple-800":
						type === "primary"
				},
				{
					"border-purple-100 bg-purple-100 text-purple-700 hover:border-purple-200 hover:bg-purple-200 hover:text-purple-700 active:border-purple-300 active:bg-purple-300":
						type === "secondary"
				},
				{
					"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100":
						type === "alternative"
				},
				{
					"border-red-300 bg-red-600 text-white hover:bg-red-700 hover:text-white":
						type === "danger"
				},
				className
			)}
			aria-disabled={isDisabled}
		>
			{iconObj &&
				(isLoading ? (
					<Loader classes="h-5 w-5 border-2" />
				) : (
					<>{iconObj}</>
				))}

			{icon &&
				(isLoading ? (
					<Loader classes="h-5 w-5 border-2" />
				) : (
					<DynamicIcons
						icon={icon}
						className={iconStyles}
						outline={false}
					/>
				))}

			{!icon && !iconObj && isLoading && (
				<Loader classes="h-5 w-5 border-2" />
			)}

			{label && <span>{label}</span>}
		</a>
	)
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(Button)
export { _Button as Button }
