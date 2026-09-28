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
	isError?: boolean
}

/** Comment */
export const InputSelect: FC<InputSelectProps> = ({
	inputOptions,
	onSelectOption,
	align = "right",
	className,
	isDisabled,
	isError
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
				// h-9 matches InputField so the input and select form one flush 36px row.
				"relative z-10 inline-flex h-9 items-center space-x-2 border border-gray-300 bg-white px-4 py-0 pr-7 text-sm leading-5",
				// Same focus treatment as InputField: a single 1px violet border, no ring.
				"focus:outline-none focus:!ring-0",
				isError ? "border-red-500" : "focus:!border-violet-700",
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
