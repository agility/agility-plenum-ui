import React, { forwardRef, useEffect, useRef, useState } from "react"
import { default as cn } from "classnames"
import { DynamicIcons, IconName } from "../../../util/DynamicIcons"

import { InputCounter } from "../InputCounter"
import { BaseField } from "../BaseField"
import { InputCta } from "./InputCta"
import { InputLabel } from "../InputLabel"
import { useId } from "../../../util/useID"
import { SearchCircleIcon } from "@heroicons/react/solid"

export type Type =
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

export interface TextInputAddonProps {
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
	/** Leading icon displayed within the input  */
	leadIcon?: IconName
	/** Trailing icon displayed within the input  */
	trailIcon?: IconName
	/** Icon within the input field at the begining of the field*/
	inlineIcon?: IconName
	/** Icon within the input field at the end of the field*/
	inlineTrailingIcon?: IconName
	/** Trailing label for the input CTA */
	trailLabel?: string
	/** Leading label for input CTA  */
	leadLabel?: string
	/** Remove bg and border from CTA  */
	clearCta?: "left" | "right" | "both" | "none"
	className?: string
	/** Callback on change */
	onChange?(value: string): void
	/** Callback on Cta click */
	onCtaClick?(): void
}

const TextInputAddon = (
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
		placeholder,
		leadIcon,
		trailIcon,
		inlineIcon,
		inlineTrailingIcon,
		trailLabel,
		leadLabel,
		clearCta = "none",
		onChange,
		onCtaClick,
		value: externalValue,
		className
	}: TextInputAddonProps,
	ref: React.Ref<HTMLInputElement>
) => {
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused))
	const [value, setValue] = useState<string | undefined>(defaultValue || "")
	const inputRef = useRef<HTMLInputElement>(null)

	const uniqueID = useId()
	if (!id) id = `input-${uniqueID}`
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

	const discriptionStyles = cn(
		"text-sm mt-1 block",
		{ "text-gray-500": !isError },
		{ "text-red-500": isError }
	)

	return (
		<div>
			{label && (
				<InputLabel
					label={label}
					isRequired={isRequired}
					id={id}
					isError={isError}
					isDisabled={isDisabled}
				/>
			)}
			<div className="flex">
				{(leadIcon || leadLabel) && (
					<InputCta
						icon={leadIcon}
						ctaLabel={leadLabel}
						align="left"
						isClear={clearCta === "left" || clearCta === "both"}
					/>
				)}
				<div className="relative flex-grow">
					{inlineIcon && (
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<DynamicIcons
								icon={inlineIcon}
								className="h-5 w-5 text-gray-400"
								outline={false}
							/>
						</div>
					)}

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
							"w-full rounded border border-gray-300 py-2 px-3 text-sm font-normal leading-5 outline-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ",
							{
								"!border-red-500 shadow-none !outline-red-500 focus:ring-red-500":
									isError
							},
							{ "pl-10": inlineIcon },
							{
								"!rounded-r-none !rounded-l":
									(trailIcon || trailLabel) &&
									!(leadIcon || leadLabel)
							},
							{
								"!rounded-r-none !rounded-r":
									!(trailIcon || trailLabel) &&
									(leadIcon || leadLabel)
							},
							{
								"rounded-none":
									(trailIcon || trailLabel) &&
									(leadIcon || leadLabel)
							},
							className
						)}
						isDisabled={isDisabled}
						value={value}
						defaultValue={defaultValue}
						maxLength={maxLength}
						placeholder={placeholder}
					/>
					{inlineTrailingIcon && (
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<DynamicIcons
								icon={inlineTrailingIcon}
								className="h-5 w-5 bg-white text-gray-400"
								outline={false}
							/>
						</div>
					)}
				</div>

				{(trailIcon || trailLabel) && (
					<InputCta
						icon={trailIcon}
						ctaLabel={trailLabel}
						align="right"
						isClear={clearCta === "right" || clearCta === "both"}
						onClickHandler={onCtaClick}
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

const _TextInputAddon = forwardRef<HTMLInputElement, TextInputAddonProps>(
	TextInputAddon
)
export { _TextInputAddon as TextInputAddon }
