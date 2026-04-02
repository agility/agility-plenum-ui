import React from "react";
import { default as cn } from "classnames";

export interface ILoaderProps {
	size?: "lg" | "md" | "sm";
	variant?: "primary" | "black" | "white";
	className?: string;
}
const Loader: React.FC<ILoaderProps> = ({ size = "lg", variant = "primary", className }) => {
	return (
		<>
			<i
				className={cn(
					"rounded-full inline-block animate-spinSlower m-auto",
					size === "lg" ? "w-10 h-10 border-2" : size === "md" ? "w-5 h-5 border" : "w-4 h-4 border",
					variant === "primary"
						? "border-transparent-black-20 border-r-violet-800"
						: variant === "black"
						? "border-transparent-black-20 border-r-black"
						: "border-transparent-white-50 border-r-white",
					className
				)}
				role="status"
			/>
		</>
	);
};

export default Loader;
