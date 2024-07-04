import { default as cn } from "classnames"
import { HTMLAttributeAnchorTarget } from "react"
import { BTNActionType, IButtonProps } from "../Button/Button"
import { UnifiedIconName } from "../../icons/DynamicIcon"

/**
 * Capsule Style Button
 */
export interface ICapsuleProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	/** Is the button a Primary CTA, alternative or danger button? */
	actionType: BTNActionType
	/** How lg should the button be? - Defaults to 'base'. */
	size?: "xs" | "sm" | "md" | "lg" | "xl"
	/** The Button's text content. */
	label: string
	/** Does the button width grow to fill it's container? */
	fullWidth?: boolean
	/** Optionally render as anchor tag */
	asLink?: {
		href: string
		target: HTMLAttributeAnchorTarget
		title?: string
	}
	/** Is the associated content loading? */
	isLoading?: boolean
	/**Optional Classname String*/
	className?: string
}
const Capsule = ({
	actionType = "primary",
	size = "sm",
	label,
	fullWidth = false,
	asLink,
	isLoading = false,
	className,
	...props
}: ICapsuleProps) => {
	const iconStyles = cn(
		{ "text-white": actionType === "primary" || actionType === "danger" },
		{ "text-purple-700": actionType === "secondary" },
		{ "text-gray-700": actionType === "alternative" }
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
				"inline-flex items-center justify-center gap-x-2 text-sm  p-2  !ring-offset-white outline-none   focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2  focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2  active:ring-2 active:ring-purple-600 active:ring-offset-2 transition-all",
				{ "w-full": fullWidth },
				{ "px-[11px] py-[7px] text-xs rounded-[15px]": size === "xs" },
				{ "px-[15px] py-[9px] text-sm rounded-[17px]": size === "sm" },
				{ "px-[17px] py-[9px] text-sm rounded-[19px]": size === "md" },
				{ "px-[17px] py-[9px] text-base rounded-[21px]": size === "lg" },
				{ "px-[25px] py-[13px] text-base rounded-[25px]": size === "xl" },
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
			{...props}
		>
			{label}
		</button>
	)
}

export default Capsule
