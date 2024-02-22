import React, { FC, useState } from "react"
import { default as cn } from "classnames"

export type SelectOptions = {
	label: string
	value: string
}
export interface InputSelectProps {
	align: "left" | "right"
	/** Show the CTA without Background color and a border seperator */
	inputOptions: SelectOptions[]
	/** Onclick callback */
	onSelectOption?(value: string): void
	className?: string
	isDisabled?: boolean
}

/** Comment */
export const InputSelect: FC<InputSelectProps> = ({
	inputOptions,
	onSelectOption,
	align = "right",
	className,
	isDisabled
}: InputSelectProps): JSX.Element | null => {
	const [selectedOption, setSelectedOption] = useState<string>(inputOptions[0].value)

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const targetValue = e.target.value
		onSelectOption && onSelectOption(targetValue)
		setSelectedOption(targetValue)
	}

	if (!inputOptions?.length) return null
	return (
		<select
			className={cn(
				"relative z-10 inline-flex items-center space-x-2 border border-gray-300 bg-white px-4 py-2 pr-7 text-sm font-medium",
				"focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500",
				align === "right"
					? "-ml-px rounded-r border-l-white text-gray-700"
					: align === "left"
					? "-mr-px rounded-l border-r-white text-gray-500 focus-within:z-10"
					: "",
				!onSelectOption ? "cursor-default" : "",
				className
			)}
			onChange={handleChange}
			value={selectedOption}
			disabled={isDisabled}
		>
			{inputOptions.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
