import React from "react"
import { default as cn } from "classnames"

export interface ILoaderProps {
	className?: string
}
const Loader: React.FC<ILoaderProps> = ({ className }) => {
	return (
		<>
			<i
				className={cn(
					"rounded-full w-16 h-16 inline-block border-8 animate-spin m-auto",
					className ? className : "border-purple-700 border-r-gray-200"
				)}
				role="status"
			/>
		</>
	)
}

export default Loader
