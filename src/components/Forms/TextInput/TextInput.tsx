import React, { FC, forwardRef, useEffect, useRef, useState } from "react"
import { default as cn } from "classnames"

import { InputCounter } from "../InputCounter"
import { BaseField } from "../BaseField"
import { InputLabel } from "../InputLabel"

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
	id: string
	/** Input Name */
	name: string
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
		value: externalValue
	}: TextInputProps,
	ref: React.Ref<HTMLInputElement>
) => {
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused))
	const [isActive, setIsActive] = useState<boolean>(false)
	const [value, setValue] = useState<string | undefined>(defaultValue || "")
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setValue(externalValue)
	}, [externalValue])

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

	const className = cn(
		"border py-2 px-3 rounded text-sm leading-5 font-normal w-full",
		{ "border-gray-300 shadow-sm": !isFocus && !isError },
		{
			"focus:ring-purple-500 border-purple-500 outline-purple-500 shadow-none":
				isFocus && !isError
		},
		{ "focus:ring-red-500 !border-red-500 shadow-none": isError }
	)

	const discriptionStyles = cn(
		"text-sm mt-1 block",
		{ "text-gray-500": !isError },
		{ "text-red-500": isError }
	)

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
					className={className}
					isDisabled={isDisabled}
					value={value}
					defaultValue={defaultValue}
					maxLength={maxLength}
				/>
				<div className="flex flex-row space-x-3">
					<div className="grow">
						{message && <span className={discriptionStyles}>{message}</span>}
					</div>
					{isShowCounter && (
						<div className="shrink-0">
							<InputCounter current={Number(value?.length)} limit={maxLength} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

const _TextInput = forwardRef<HTMLInputElement, TextInputProps>(TextInput)
export { _TextInput as TextInput }
