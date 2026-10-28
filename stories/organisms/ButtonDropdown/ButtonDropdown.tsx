import { FC } from "react";
import { default as cn } from "classnames";
import { twMerge } from "tailwind-merge";
import Button, { IButtonProps } from "@/stories/atoms/buttons/Button";
import { DynamicIcon } from "@/stories/atoms/icons";
import Dropdown, { IDropdownProps, defaultClassNames } from "../DropdownComponent";

export interface IButtonDropdownProps {
	button: IButtonProps;
	dropDown: IDropdownProps;
	hideDivider?: boolean;
	placement?: IDropdownProps["placement"];
	offsetOptions?: IDropdownProps["offsetOptions"];
	/** Classes applied to the wrapper div (merged last) — e.g. pass "min-w-0" to opt out of the 150px total-width floor. */
	className?: string;
}

/**
 * Primary UI component for user interaction
 */
const ButtonDropdown: FC<IButtonDropdownProps> = ({
	button,
	dropDown,
	hideDivider = false,
	placement = "bottom-end",
	offsetOptions,
	className
}) => {
	const iconTextColours = {
		primary: dropDown.disabled ? "text-gray-300" : "text-primary-100",
		secondary: dropDown.disabled ? "text-gray-400" : "text-primary-700",
		alternative: dropDown.disabled ? "text-gray-500" : "text-gray-700"
	};

	return (
		<div
			className={twMerge(
				// min-w-[150px] is the floor for the WHOLE control (button portion + divider + trigger);
				// the button portion grows to fill it. Consumer className is merged last so min-w-0 opts out.
				"inline-flex items-stretch rounded-[3px] min-w-[130px]",
				className
			)}
		>
			<Button
				{...{
					...button,
					className: twMerge(
						// The Button keeps its own standard focus ring (1px, no offset), matching the trigger's below.
						cn(
							"grow min-w-0 !rounded-r-none !border-r-0 hover:!border-r-0",
							// While focused, lift the button above the divider/trigger so the right
							// side of its ring isn't painted under them.
							"relative focus-visible:z-10",
							"border-r-transparent"
						),
						button.className
					)
				}}
			/>
			{!hideDivider && (
				<div
					className={cn(
						"w-[1px] rt",
						button.actionType === "primary"
							? "bg-primary-700 text-primary-100 hover:border-primary-700 hover:bg-primary-700 disabled:bg-primary-300 disabled:focus-visible:ring-0"
							: "",
						button.actionType === "secondary" ? "bg-primary-200 " : "",
						button.actionType === "alternative" ? "bg-gray-300" : ""
					)}
				></div>
			)}
			<Dropdown
				{...{
					CustomDropdownTrigger: (
						<DynamicIcon
							{...{
								icon: "IconChevronDown",
								className: cn(
									"h-5 w-5 stroke-1 disabled:!bg-gray-50 disabled:focus-visible:ring-0",
									{
										"text-white": button.actionType === "primary",
										"text-primary-300": dropDown.disabled && button.actionType === "secondary",
										"text-gray-300": dropDown.disabled && button.actionType === "alternative",

										"text-primary-700": !dropDown.disabled && button.actionType === "secondary",
										"text-gray-700": !dropDown.disabled && button.actionType === "alternative"
									},
									dropDown.iconClassname
								)
							}}
						/>
					),
					buttonClassname: cn(
						"flex items-center justify-center rounded-l-none border !border-l-0 rounded-r  px-2 transition-all hover:!border-l-0",
						// Focus ring for the trigger only, matching Button's ring style (1px, no offset). !outline-none
						// beats the outline-primary-600 in the Dropdown's defaultClassNames (plain cn, no twMerge).
						// relative keeps it in the same paint phase as the (relative) button, so its ring's
						// left edge isn't painted under the button; z-10 on focus lifts it fully on top.
						"!outline-none focus-visible:ring-1 focus-visible:ring-primary-600 relative focus-visible:z-10",
						button.actionType === "primary"
							? cn(
									"border-primary-600 bg-primary-600 focus-visible:ring-offset-1 focus-visible:ring-offset-white !text-white  hover:border-primary-700 hover:bg-primary-700 active:!border-primary-800 active:bg-primary-800 fill-white",
									"disabled:bg-primary-300 disabled:text-white disabled:hover:none disabled:active:bg-primary-300 disabled:border-primary-300"
							  )
							: "",
						button.actionType === "secondary"
							? cn(
									"border-primary-400 bg-primary-50 text-primary-700   hover:bg-primary-100 active:bg-primary-300 fill-primary-700",
									"disabled:bg-primary-50 disabled:text-grey-50 disabled:hover:none disabled:active:bg-primary-50 "
							  )
							: "",
						button.actionType === "alternative"
							? cn(
									"border-gray-300 bg-white text-gray-700 fill-gray-700  hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100",
									"disabled:bg-gray-50 disabled:text-gray-300 disabled:hover:none disabled:active:bg-gray-100 disabled:border-gray-300"
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
					...(dropDown as IDropdownProps)
				}}
			/>
			<div className="hidden !bg-primary-100 !text-primary-600 transition-all hover:bg-primary-200 focus:bg-primary-300" />
		</div>
	);
};
export default ButtonDropdown;
