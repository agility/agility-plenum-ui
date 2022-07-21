import React, {  forwardRef, useEffect, useRef, useState } from "react"
import { default as cn } from "classnames"

import { InputCounter } from "../InputCounter"
import { BaseField } from "../BaseField"
import { InputLabel } from "../InputLabel"
import { useId } from "../../../util/useID"

type Type =
	| "text"
	| "email"
	| "number"
	| "password"
	| "search"
	| "tel"
	| "url"
	| "date"
	| "datetime-local"
	| "month"
	| "time"
	| "week"
	| "currency"

export interface TextInputProps {
	/** Input type*/
	type: Type
	/** Input ID */
	id?: string
	/** Input Name */
	name?: string
	/** Label for the input */
	label: string
	/** Force the focus state on the input */
	isFocused?: boolean
	/** Error state */
	isError?: boolean
	/** If field is required */
	isRequired?: boolean
	/** Disabled state */
	isDisabled?: boolean
	/** Set default value */
	defaultValue?: string
	/** Message shown under the text field */
	message?: string
	/** Input character counter */
	isShowCounter?: boolean
	/** Max length of input character  */
	maxLength?: number
	/** Callback on change */
	onChange?(value: string): void
	/** input value */
	value?: string

	className?:string
}

const TextInput = (
	{
		label,
		isFocused,
		isError,
		id,
		name,
		isRequired,
		type,
		defaultValue,
		isDisabled,
		message,
		isShowCounter,
		maxLength = 100,
		onChange,
		value: externalValue,
		className
	}: TextInputProps,
	ref: React.Ref<HTMLInputElement>
) => {
	const uniqueID = useId()
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused))
	const [isActive, setIsActive] = useState<boolean>(false)
	const [value, setValue] = useState<string | undefined>(
		externalValue || defaultValue || ""
	)
	const inputRef = useRef<HTMLInputElement>(null)

	// set force focus
	useEffect(() => {
		const input = inputRef.current
		if (!input || isFocus === undefined || isDisabled) return
		if (isFocus) {
			input.focus()
			setIsActive(true)
		} else {
			input.blur()
		}
	}, [isFocus])

	// set label as active if default value is set
	useEffect(() => {
		const input = inputRef.current
		if (!input || defaultValue === undefined || defaultValue === "") return
		setIsActive(true)
	}, [defaultValue])

	const handleInputFocus = (): void => {
		setIsFocus(true)
		// add other focus effects here
	}

	const handleInputBlur = (): void => {
		const input = inputRef.current
		setIsFocus(false)
		setIsActive(!(input && input.value === ""))
	}


	const discriptionStyles = cn(
		"text-sm mt-1 block",
		{ "text-gray-500": !isError },
		{ "text-red-500": isError }
	)

	if (!id) id = `input-${uniqueID}`
	if (!name) name = id

	console.log()

	return (
		<div>
			<InputLabel
				isPlaceholder
				label={label}
				isRequired={isRequired}
				id={id}
				isError={isError}
				isActive={true}
				isDisabled={isDisabled}
			/>
			<div>
				<BaseField
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					onChange={onChange}
					onValueChange={setValue}
					ref={ref}
					type={type}
					name={name}
					id={id}
					className={cn(
						"w-full rounded border py-2 px-3 text-sm font-normal leading-5",
						{ "border-gray-300": !isFocus && !isError },
						{
							"border-purple-500 shadow-none outline-purple-500 focus:ring-purple-500":
								isFocus && !isError
						},
						{
							"!border-red-500 shadow-none focus:ring-red-500":
								isError
						},
						className
					)}
					isDisabled={isDisabled}
					value={value}
					defaultValue={defaultValue}
					maxLength={maxLength}
				/>
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
		</div>
	)
}

const _TextInput = forwardRef<HTMLInputElement, TextInputProps>(TextInput)
export { _TextInput as TextInput }
