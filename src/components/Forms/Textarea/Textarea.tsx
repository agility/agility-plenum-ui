import React, { forwardRef, useState } from "react"
import { default as cn } from "classnames"
import { InputCounter } from "../InputCounter"
import { InputLabel } from "../InputLabel"
import { useId } from "../../../util/useID"

export interface TextareaProps {
	/** Input ID */
	id?: string
	/** Input Name */
	name?: string
	/** Label for the input */
	label?: string
	/** Error state */
	isError?: boolean
	/** If field is required */
	isRequired?: boolean
	/** Disabled state */
	isDisabled?: boolean
	/** Set default value */
	defaultValue?: string

	value?: string

	/** Message shown under the text field */
	message?: string
	/** Input character counter */
	isShowCounter?: boolean
	/** Max length of input character  */
	maxLength?: number
	/** Callback on change */
	onChange?(value: string): void
	/** Number of rows */
	rows?: number
	placeholder?: string
	className?: string
}

const Textarea = (
	{
		id,
		name,
		label,
		isError,
		isRequired,
		isDisabled,
		defaultValue,
		message,
		isShowCounter,
		maxLength = 500,
		rows = 4,
		onChange,
		value: externalValue,
		placeholder,
		className
	}: TextareaProps,
	ref: React.LegacyRef<HTMLTextAreaElement>
) => {
	const uniqueID = useId()
	const [value, setValue] = useState<string | undefined>(
		externalValue || defaultValue || ""
	)
	const handleOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const targetValue = e.currentTarget.value
		typeof onChange === "function" && onChange(targetValue)
		setValue(targetValue)
	}

	const discriptionStyles = cn(
		"text-sm mt-1 block",
		{ "text-gray-500": !isError },
		{ "text-red-500": isError }
	)

	if (!id) id = `ta-${uniqueID}`

	return (
		<div className={cn({ "opacity-50": isDisabled })}>
			{label && (
				<InputLabel
					isPlaceholder
					isActive
					label={label}
					isRequired={isRequired}
					id={id}
					isError={isError}
					isDisabled={isDisabled}
				/>
			)}
			<div>
				<textarea
					ref={ref}
					maxLength={maxLength}
					onChange={handleOnchange}
					rows={rows}
					name={name}
					id={id}
					className={cn(
						"block w-full rounded focus:border-purple-500 focus:ring-purple-500 sm:text-sm",
						{ "border-gray-300 ": !isError },
						{
							"border-red-500 outline-red-500 focus:ring-red-500":
								isError
						},
						className
					)}
					defaultValue={defaultValue}
					value={value}
					placeholder={placeholder}
				/>
			</div>
			<div className="flex flex-row space-x-3">
				<div className="grow">
					{message && (
						<span className={discriptionStyles}>{message}</span>
					)}
				</div>
				{isShowCounter && (
					<div className="shrink-0">
						<InputCounter
							current={Number(value?.length)}
							limit={maxLength}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

const _Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(Textarea)
export { _Textarea as Textarea }
