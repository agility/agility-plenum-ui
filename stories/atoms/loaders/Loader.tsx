import React from "react";
import { default as cn } from "classnames";

export interface ILoaderProps {
	className?: string;
}
const Loader: React.FC<ILoaderProps> = ({ className }) => {
	return (
		<>
			<i
				className={cn(
					"rounded-full w-16 h-16 inline-block border-4 animate-spinSlower m-auto",
					className ? className : "border-gray-200 border-r-violet-800"
				)}
				role="status"
			/>
		</>
	);
};

export default Loader;
