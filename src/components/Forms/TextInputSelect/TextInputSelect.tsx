import React, { FC, useEffect, useRef, useState } from "react"
import { default as cn } from "classnames"

import { InputCounter } from "../InputCounter"
import { BaseField } from "../BaseField"
import { InputSelect } from "./InputSelect"
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
export type SelectOptions = {
	label: string
	value: string
}

export interface TextInputSelectProps {
	/** Input type*/
	type: Type
	/** Input ID */
	id?: string
	/** Input Name */
	name?: string
	/** Label for the input */
	label?: string
	/** placeholder for the input */
	placeholder?: string
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
	/** Set value */
	value?: string
	/** Message shown under the text field */
	message?: string
	/** Input character counter */
	isShowCounter?: boolean
	/** Max length of input character  */
	maxLength?: number
	/** Select input location  */
	selectLocation?: "left" | "right"
	/** Prefix  */
	prefix?: string
	/** List of options to show on the select field  */
	inputOptions?: SelectOptions[]
	/** Callback on base input */
	onChange?(value: string): void
	/** Callback on input select field */
	onSelectOption?(value: string): void
}

export const TextInputSelect: FC<TextInputSelectProps> = ({
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
	maxLength,
	placeholder,
	inputOptions,
	selectLocation = "right",
	prefix,
	onChange,
	onSelectOption,
	value: externalValue
}: TextInputSelectProps) => {
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused))
	const [value, setValue] = useState<string | undefined>(defaultValue || "")
	const inputRef = useRef<HTMLInputElement>(null)

	const uniqueID = useId()
	if (!id) id = `select-${uniqueID}`
	if (!name) name = id

	useEffect(() => {
		setValue(externalValue)
	}, [externalValue])

	// set force focus
	useEffect(() => {
		const input = inputRef.current
		if (
			!input ||
			isFocus === undefined ||
			isFocused === undefined ||
			isDisabled
		)
			return
		if (isFocus || isFocused) {
			input.focus()
		} else {
			input.blur()
		}
	}, [isFocus, isFocused])

	// set label as active if default value is set
	useEffect(() => {
		const input = inputRef.current
		if (!input || defaultValue === undefined || defaultValue === "") return
	}, [defaultValue])

	const handleInputFocus = (): void => {
		setIsFocus(true)
		// add other focus effects here
	}

	const handleInputBlur = (): void => {
		setIsFocus(false)
		// add other focus effects here
	}
	const labelStyles = cn(
		"block inline-block font-medium transition-all text-sm text-gray-700 mb-1",
		{
			"text-red-500 bg-white": isError
		}
	)

	const discriptionStyles = cn(
		"text-sm mt-1 block",
		{ "text-gray-500": !isError },
		{ "text-red-500": isError }
	)



	return (
		<div>
			{label && (
				<label htmlFor={id} className={labelStyles}>
					{label}
					{isRequired && <span className="text-red-500"> *</span>}
				</label>
			)}
			<div className="flex">
				{inputOptions?.length && selectLocation === "left" && (
					<InputSelect
						inputOptions={inputOptions}
						align="left"
						onSelectOption={onSelectOption}
						className={cn(isError ? "border-red-500" : "")}
						isDisabled={isDisabled}
					/>
				)}
				<div className="relative flex-grow focus-within:z-20">
					{prefix && (
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<span className="text-gray-500 sm:text-sm">
								{prefix}
							</span>
						</div>
					)}
					<BaseField
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={onChange}
						onValueChange={setValue}
						ref={inputRef}
						type={type}
						name={name}
						id={id}
						className={cn(
							"w-full border border-gray-300 py-2 px-3 text-sm font-normal leading-5",
							"focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm",
							selectLocation === "right"
								? `rounded-l`
								: `rounded-r`,
							isError ? "border-red-500" : "",
							prefix ? `pl-7` : ""
						)}
						isDisabled={isDisabled}
						defaultValue={defaultValue}
						value={value}
						maxLength={maxLength}
						placeholder={placeholder}
					/>
				</div>
				{inputOptions?.length && selectLocation === "right" && (
					<InputSelect
						inputOptions={inputOptions}
						align={"right"}
						onSelectOption={onSelectOption}
						isDisabled={isDisabled}
						className={cn(isError ? "border-red-500" : "")}
					/>
				)}
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
