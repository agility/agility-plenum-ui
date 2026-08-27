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
		primary: dropDown.disabled ? "text-gray-300" : "text-violet-100",
		secondary: dropDown.disabled ? "text-gray-400" : "text-purple-700",
		alternative: dropDown.disabled ? "text-gray-500" : "text-gray-700"
	};

	return (
		<div
			className={twMerge(
				// min-w-[150px] is the floor for the WHOLE control (button portion + divider + trigger);
				// the button portion grows to fill it. Consumer className is merged last so min-w-0 opts out.
				"inline-flex items-stretch rounded-[3px] min-w-[150px]",
				className
			)}
		>
			<Button
				{...{
					...button,
					className: twMerge(
						// The Button keeps its own standard focus ring (2px, offset 2), matching the trigger's below.
						cn(
							"grow min-w-0 !rounded-r-none !border-r-0 hover:!border-r-0",
							// While focused, lift the button above the divider/trigger so the right
							// side of its ring isn't painted under them.
							"relative focus:z-10 focus-visible:z-10 focus-within:z-10 active:z-10",
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
							? "bg-violet-700 text-violet-100 hover:border-violet-700 hover:bg-violet-700 disabled:bg-violet-400 disabled:focus-visible:ring-0"
							: "",
						button.actionType === "secondary" ? "bg-purple-200 " : "",
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
										"text-purple-300": dropDown.disabled && button.actionType === "secondary",
										"text-gray-300": dropDown.disabled && button.actionType === "alternative",

										"text-purple-700": !dropDown.disabled && button.actionType === "secondary",
										"text-gray-700": !dropDown.disabled && button.actionType === "alternative"
									},
									dropDown.iconClassname
								)
							}}
						/>
					),
					buttonClassname: cn(
						"flex items-center justify-center rounded-l-none border !border-l-0 rounded-r  px-2 transition-all hover:!border-l-0",
						// Focus ring for the trigger only, matching Button's ring style (2px, offset 2). !outline-none
						// beats the outline-purple-500 in the Dropdown's defaultClassNames (plain cn, no twMerge).
						// relative keeps it in the same paint phase as the (relative) button, so its ring's
						// left edge isn't painted under the button; z-10 on focus lifts it fully on top.
						"!outline-none !ring-offset-white focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 relative focus:z-10 focus-visible:z-10",
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
			<div className="hidden !bg-purple-100 !text-purple-600 transition-all hover:bg-purple-200 focus:bg-purple-300" />
		</div>
	);
};
export default ButtonDropdown;
