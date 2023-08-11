import React, { forwardRef, useEffect, useId, useState } from "react"
import { default as cn } from "classnames"
import InputLabel from "../InputLabel"
import InputCounter from "../InputCounter"
export interface ITextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
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
	/** Number of cols */
	cols?: number
	placeholder?: string
	className?: string
	ref?: React.LegacyRef<HTMLTextAreaElement>
}

const Textarea: React.FC<ITextareaProps> = ({
	id,
	name,
	label,
	isError,
	isRequired,
	isDisabled,
	defaultValue,
	message,
	isShowCounter,
	maxLength,
	rows = 12,
	cols = 48,
	onChange,
	value: externalValue,
	placeholder,
	className,
	ref,
	...rest
}) => {
	const uniqueID = useId()
	const [value, setValue] = useState<string | undefined>(externalValue || defaultValue || "")
	const handleOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const targetValue = e.currentTarget.value
		typeof onChange === "function" && onChange(targetValue)
		setValue(targetValue)
	}

	const discriptionStyles = cn("text-sm mt-1 block", { "text-gray-500": !isError }, { "text-red-500": isError })

	useEffect(() => {
		//if the external value is updated by the parent component, reset the value in here...
		if (externalValue !== undefined && externalValue !== null) {
			setValue(externalValue)
		}
	}, [externalValue])

	if (!id) id = `ta-${uniqueID}`

	return (
		<div>
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
					cols={cols}
					className={cn(
						"block w-full rounded focus:border-purple-500 focus:ring-purple-500 sm:text-sm",
						{ "border-gray-300 ": !isError },
						{
							"border-red-500 outline-red-500 focus:ring-red-500": isError
						},
						className
					)}
					disabled={isDisabled}
					defaultValue={defaultValue}
					value={value}
					placeholder={placeholder}
					{...rest}
				/>
			</div>
			<div className="flex flex-row space-x-3">
				<div className="grow">{message && <span className={discriptionStyles}>{message}</span>}</div>
				{isShowCounter && (
					<div className="shrink-0">
						<InputCounter current={Number(value?.length)} limit={maxLength} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Textarea
