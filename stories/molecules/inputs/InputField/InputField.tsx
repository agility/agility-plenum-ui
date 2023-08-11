import React from "react"
import { default as cn } from "classnames"

export type AcceptedInputTypes =
	| "date"
	| "datetime-local"
	| "email"
	| "month"
	| "number"
	| "password"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "url"
	| "currency"

export interface IInputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
	/** Callback on change */
	handleChange: (value: string) => void
	/** Input ID*/
	id: string
	/** Input Name */
	name: string
	/** Force the focus state on the input */
	isFocused?: boolean
	/** Error condition */
	isError?: boolean
	/** Disabled state */
	isDisabled?: boolean
	/** Readonly state */
	isReadonly?: boolean
	/** Input value */
	value: string
	/** Type of Text Input to Render eg. "text", "email" */
	type: AcceptedInputTypes
	/** If field is required */
	required?: boolean
	/** use input psuedo classes for :valid and :invalid styles. on by default */
	clientSideCheck?: boolean
	/**ref for input */
	ref?: React.Ref<HTMLInputElement>
}

const InputField: React.FC<IInputFieldProps> = ({
	type,
	id,
	name,
	value,
	isFocused,
	isError,
	isReadonly,
	isDisabled,
	handleChange,
	required,
	clientSideCheck = true,
	placeholder,
	className,
	ref,
	...rest
}) => {

	return (
		<input
			{...{
				type,
				id,
				ref,
				name,
				value,
				onChange: (e) => {
					console.log(e)
					handleChange(e.target.value)
				},
				autoFocus: isFocused,
				readOnly: isReadonly,
				disabled: isDisabled,
				placeholder: placeholder || " ",
				required,
				"aria-invalid": isError,
				"aria-disabled": isDisabled,
				className: cn(
					"peer w-full rounded border border-gray-200  px-3 text-sm font-normal  leading-5 outline-offset-0 ring-offset-0 focus:border-purple-600 focus:ring-purple-600   ",
					isError ? "!border-red-600 !text-red-600 focus:!ring-red-600" : "",
					isReadonly ? "!border-gray-400 !text-gray-500 focus:!ring-gray-400" : "",
					className
				),
				...rest
			}}
		/>
	)
}

export default InputField
