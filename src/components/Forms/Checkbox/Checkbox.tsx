import React, { FC } from "react"
import { default as cn } from "classnames"
import { InputLabel } from "../InputLabel"
import { useId } from "../../../util/useID"

export interface CheckboxProps {
	/** Checkbox label */
	label: string
	/** Checkbox ID */
	id?: string
	/** Disabled state */
	isDisabled?: boolean
	/** value */
	value?: string
	/** Check state */
	isChecked?: boolean
	/** If field is required */
	isRequired?: boolean
	/** Error state */
	isError?: boolean
	/** Message or description */
	message?: string
	/** Callback on input change */
	onChange?(value: string, isChecked: boolean): void
	/** Font weight for the checkbox label*/
	labelWeight?:
		| "thin"
		| "extralight"
		| "light"
		| "normal"
		| "medium"
		| "semibold"
		| "bold"
		| "extrabold"
		| "black"
}

/** Comment */
export const Checkbox: FC<CheckboxProps> = ({
	label,
	id,
	isDisabled,
	isChecked,
	isRequired,
	isError,
	message,
	value,
	onChange,
	labelWeight = "medium"
}: CheckboxProps) => {
	const uniqueID = useId()
	if (!id) id = `cb-${uniqueID}`

	const checboxStyles = cn(
		"focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded",
		{ "border-red-500 shadow-none": isError }
	)
	const wrapperStyles = cn("relative flex items-start", {
		"opacity-50": isDisabled
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = e.currentTarget.value
		const targetChecked = e.currentTarget.checked
		typeof onChange === "function" && onChange(targetValue, targetChecked)
	}

	return (
		<div className={wrapperStyles}>
			<div className="flex h-5 items-center">
				<input
					id={id}
					aria-describedby={`${id}-description`}
					name={id}
					value={value}
					type="checkbox"
					className={checboxStyles}
					disabled={isDisabled}
					checked={isChecked}
					onChange={(e) => {
						handleChange(e)
					}}
				/>
			</div>
			<div className="ml-3 text-sm">
				<label
					htmlFor={id}
					className={cn(`font-${labelWeight} text-gray-700`)}
				>
					<InputLabel label={label} isRequired={isRequired} id={id} />
				</label>
				{message && (
					<p id={`${id}-description`} className="text-gray-500">
						{message}
					</p>
				)}
			</div>
		</div>
	)
}
