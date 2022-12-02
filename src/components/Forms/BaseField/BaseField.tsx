import React, { forwardRef } from "react"
import { default as cn } from "classnames"

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

export interface BaseFieldProps {
	/** Input type*/
	type: Type
	/** Input ID */
	id: string
	/** Input Name */
	name: string
	/** placeholder for the input */
	placeholder?: string
	/** Disabled state */
	isDisabled?: boolean
	/** Readonly state */
	isReadonly?: boolean
	/** Set value */
	value?: string
	/** Set default value */
	defaultValue?: string
	/** Max length of input character  */
	maxLength?: number
	/** Input style classes  */
	className?: string
	/** Callback on change */
	onChange?(value: string): void
	/** Callback on onFocus */
	onFocus?(): void
	/** Callback on onBlur */
	onBlur?(): void
	/** Callback to get the value for the immediate parent component */
	onValueChange?(value: string): void
}
/** default input styles */
const defaultStyles =
	"border py-2 px-3 rounded text-sm leading-5 font-normal w-full border-gray-300 shadow-sm"
/** Base input field component */
const BaseField = (
	{
		onFocus,
		onBlur,
		id,
		name,
		type,
		value,
		defaultValue,
		isDisabled,
		isReadonly,
		maxLength,
		placeholder,
		className = defaultStyles,
		onChange,
		onValueChange
	}: BaseFieldProps,
	ref: React.LegacyRef<HTMLInputElement>
) => {
	const handleChange = (e: any) => {
		const targetValue = e.currentTarget.value
		onChange && onChange(targetValue)
		onValueChange && onValueChange(targetValue)
	}

	const handleFocus = () => {
		onFocus && onFocus()
	}

	const handleBlur = () => {
		onBlur && onBlur()
	}

	return (
		<input
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={(e) => {
				handleChange(e)
			}}
			placeholder={placeholder}
			ref={ref}
			type={type}
			name={name}
			id={id}
			className={cn(isDisabled ? "opacity-50" : "", className)}
			disabled={isDisabled}
			readOnly={isReadonly}
			value={value}
			defaultValue={defaultValue}
			maxLength={maxLength}
			autoComplete="off"
		/>
	)
}

const _BaseField = forwardRef<HTMLInputElement, BaseFieldProps>(BaseField)
export { _BaseField as BaseField }
