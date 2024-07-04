import React from "react"
import { default as cn } from "classnames"
import { ClassNameWithAutocomplete } from "@/utils/types"
import { DynamicIcon } from "../icons"
export interface IBadgeProps {
	/** The content scheme of the badge */
	color: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "basic" | "pink"
	/** Render with slightly rounded corners or as a pill shape */
	variant: "rounded" | "pill"
	/** The text content of the badge */
	label: string
	/** The size of the badge */
	size?: "sm" | "lg"
	/** Render a loader inside the badge */
	loading?: boolean
	/** Render with a small circle in a darker shade of the color chosen*/
	statusDot?: boolean
	/** Render with a button to remove the badge */
	removeButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	/** Render the badge as a clickable button */
	actionButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
const Badge: React.FC<IBadgeProps> = ({
	color,
	variant,
	label,
	size = "sm",
	loading,
	statusDot,
	removeButton,
	actionButton
}) => {
	const badgeStyles = cn(
		"text-sm flex items-center py-[2px] focus:ring-1 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white outline-0",
		{
			"rounded-[3px]": variant === "rounded",
			"rounded-full px-[6px]": variant === "pill",
			"rounded-full": variant === "pill" && size === "lg",
			"px-[6px] text-xs": size === "sm",
			"px-[10px]": size === "lg",
			"pl-[10px]": !statusDot && size === "lg",
			"pl-2": !statusDot && size === "sm",
			"pr-3": !removeButton && size === "lg",
			"pr-[10px]": !removeButton && size === "sm",
			"gap-x-[6px]": statusDot || removeButton || loading,
			"bg-purple-100 text-purple-800 ": color === "primary",
			"bg-violet-100 text-violet-800": color === "secondary",
			"bg-pink-100 text-pink-800": color === "pink",
			"bg-red-100 text-red-800": color === "danger",
			"bg-blue-100 text-blue-800": color === "info",
			"bg-green-100 text-green-800": color === "success",
			"bg-yellow-100 text-yellow-800": color === "warning",
			"bg-gray-100 text-gray-800": color === "basic"
		}
	)
	const statusDotStyles = cn("rounded-full h-[6px] p-[1px] w-[6px]", {
		"bg-purple-400 text-purple-400": color === "primary",
		"bg-violet-400 text-violet-400": color === "secondary",
		"bg-pink-400 text-pink-400": color === "pink",
		"bg-red-400 text-red-400": color === "danger",
		"bg-blue-400 text-blue-400": color === "info",
		"bg-green-400 text-green-400": color === "success",
		"bg-yellow-400 text-yellow-400": color === "warning",
		"bg-gray-400 text-gray-400": color === "basic"
	})
	const removeButtonStyles: ClassNameWithAutocomplete = cn(
		"h-4 w-4 group-focus-within:ring-1 group-focus-within:ring-purple-600 rounded-full  group-focus-within:ring-offset-[1px] group-focus-within:ring-offset-white outline-0",
		{
			"text-purple-400": color === "primary",
			"text-violet-400": color === "secondary",
			"text-pink-400": color === "pink",
			"text-red-400": color === "danger",
			"text-blue-400": color === "info",
			"text-green-400": color === "success",
			"text-yellow-400": color === "warning",
			"text-gray-400": color === "basic"
		}
	)

	const loaderStyles = cn("h-4 w-4 rounded-full border-2 animate-spin", {
		"border-purple-400 !border-r-purple-200": color === "primary",
		"border-violet-400 !border-r-violet-200": color === "secondary",
		"border-pink-400 !border-r-pink-200": color === "pink",
		"border-red-400 !border-r-red-200": color === "danger",
		"border-blue-400 !border-r-blue-200": color === "info",
		"border-green-400 !border-r-green-200": color === "success",
		"border-yellow-400 !border-r-yellow-200": color === "warning",
		"border-gray-400 !border-r-gray-200": color === "basic"
	})

	return actionButton ? (
		<button {...{ ...actionButton, className: badgeStyles }}>
			{statusDot && <div className={statusDotStyles} role="status" />}
			{label}
			{removeButton && (
				<button
					{...{
						removeButton,
						"aria-label": `Remove ${label}`,
						className: `${removeButton?.className || ""} group outline-0 `
					}}
				>
					<DynamicIcon {...{ icon: "IconX", className: removeButtonStyles }} />
				</button>
			)}
		</button>
	) : (
		<div className={badgeStyles}>
			{loading && <div className={loaderStyles} role="status" />}
			{!loading && statusDot && <div className={statusDotStyles} role="status" />}
			{label}
			{!loading && removeButton && (
				<button
					{...{
						...removeButton,
						"aria-label": `Remove ${label}`,
						className: `${removeButton?.className || ""} group outline-0 `
					}}
				>
					<DynamicIcon {...{ icon: "IconX", className: removeButtonStyles }} />
				</button>
			)}
		</div>
	)
}

export default Badge
