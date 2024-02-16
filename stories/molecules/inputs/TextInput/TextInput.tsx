import React, { forwardRef, useEffect, useId, useRef, useState } from "react"
import { default as cn } from "classnames"
import InputLabel from "../InputLabel"
import InputField, { AcceptedInputTypes } from "../InputField"
import InputCounter from "../InputCounter"

export interface ITextInputProps {
	/** Input type*/
	type: AcceptedInputTypes
	/** Input ID */
	id?: string
	/** Input Name */
	name?: string
	/** Label for the input */
	label?: string
	/** Force the focus state on the input */
	isFocused?: boolean
	/** Error state */
	isError?: boolean
	/** If field is required */
	isRequired?: boolean
	/** Disabled state */
	isDisabled?: boolean
	/** Readonly state */
	isReadonly?: boolean
	/** Set default value */
	defaultValue?: string
	/** Message shown under the text field */
	message?: string
	/** Input character counter */
	isShowCounter?: boolean
	/** Max length of input character  */
	maxLength?: number
	/** Callback on change */
	handleChange(value: string): void
	/** input value */
	value: string
	/**Placeholder input text*/
	placeholder?: string

	className?: string
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
		isReadonly,
		message,
		isShowCounter,
		maxLength,
		handleChange,
		placeholder,
		value: externalValue,
		className,
		...props
	}: ITextInputProps,
	ref: React.Ref<HTMLInputElement>
) => {
	const uniqueID = useId()
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused))

	const [value, setValue] = useState<string>(externalValue || defaultValue || "")
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		//if the external value is updated by the parent component, reset the value in here...
		if (externalValue !== undefined && externalValue !== null) {
			setValue(externalValue)
		}
	}, [externalValue])

	// set force focus
	useEffect(() => {
		const input = inputRef.current
		if (!input || isFocus === undefined || isDisabled) return
		if (isFocus) {
			input.focus()
		} else {
			input.blur()
		}
	}, [isFocus])

	// set label as active if default value is set
	useEffect(() => {
		const input = inputRef.current
		if (!input || defaultValue === undefined || defaultValue === "") return
	}, [defaultValue])

	const handleInputFocus = () => setIsFocus(true)
	// add other focus effects here

	const handleInputBlur = () => setIsFocus(false)

	if (!id) id = `input-${uniqueID}`
	if (!name) name = id

	return (
		<div className="relative">
			<InputLabel
				isPlaceholder={true}
				label={label}
				isRequired={isRequired}
				id={id}
				isError={isError}
				isActive={true}
				isDisabled={isDisabled}
			/>
			<InputField
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				handleChange={(v: string) => {
					setValue(v)
					handleChange(v)
				}}
				ref={ref}
				type={type}
				name={name}
				id={id}
				className={cn(
					"w-full rounded border py-2 px-3 text-sm font-normal leading-5",
					{ "border-gray-300": !isFocus && !isError && !isDisabled },
					{
						"!border-purple-500 shadow-none outline-purple-500 focus:!ring-purple-500": isFocus && !isError && !isDisabled
					},
					{
						"!border-red-500 shadow-none focus:ring-red-500": isError
					},
					{
						"placeholder:text-gray-300 !border-gray-300 !outline-gray-300 focus:!ring-gray-300" : isDisabled
					},
					className
				)}
				isDisabled={isDisabled}
				isReadonly={isReadonly}
				value={value}
				defaultValue={defaultValue}
				maxLength={maxLength}
				placeholder={placeholder}
				{...props}
			/>
			<div className="flex flex-row space-x-3">
				<div className="grow">
					{message && (
						<span className={cn("mt-1 block text-sm", isError ? "text-red-500" : "text-gray-500")}>
							{message}
						</span>
					)}
				</div>
				{isShowCounter && (
					<div className="shrink-0">
						<InputCounter current={Number(value?.length)} limit={maxLength ?? 150} />
					</div>
				)}
			</div>
		</div>
	)
}

const _TextInput = forwardRef<HTMLInputElement, ITextInputProps>(TextInput)
export default _TextInput
