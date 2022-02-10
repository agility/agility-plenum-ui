import React, { FC, Component } from "react";

import "../../tailwind.css"
export interface CheckboxProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	type?: "primary" | "secondary" | "plain";
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * An optional icon
	 */
	icon?: JSX.Element,
	/**
	 * Optional click handler
	 */
	onClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
};

/**
 * Primary UI component for user interaction
 */
export const Checkbox: FC<CheckboxProps> = ({
	type = "plain",
	size = "medium",
	onClick,
	label,
	icon
}: CheckboxProps) => {

	return (
		<button
			type="button"
			className={[
				"inline-flex space-x-2 items-center justify-center  border border-transparent transition-all",
					size === "large"  ? "px-5 py-3 font-medium rounded-md text-lg" :
					size === "medium" ? "px-3 py-2 font-medium rounded-md text-base" :
									    "px-3 py-1 text-sm font-medium rounded",
					type === "primary" ?   "text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800" :
					type === "secondary" ? "text-testColor bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300" :
										   "bg-gray-100 hover:bg-gray-200 border-gray-600 active:bg-gray-300 text-testColor"
				].join(" ")}
			onClick={onClick}
		>
			{icon}<span>{label}</span>
		</button>
	);
};
