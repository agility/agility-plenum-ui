import React, { forwardRef } from "react";
import { default as cn } from "classnames";

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
	| "currency";

export interface IInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	/** Callback on change */
	handleChange: (value: string) => void;
	/** Input ID*/
	id?: string;
	/** Input Name */
	name?: string;
	/** Force the focus state on the input */
	isFocused?: boolean;
	/** Error condition */
	isError?: boolean;
	/** Disabled state */
	isDisabled?: boolean;
	/** Readonly state */
	isReadonly?: boolean;
	/** Input value */
	value: string;
	/** Type of Text Input to Render eg. "text", "email" */
	type: AcceptedInputTypes;
	/** If field is required */
	required?: boolean;
	/** use input psuedo classes for :valid and :invalid styles. on by default */
	clientSideCheck?: boolean;
	/** Placeholder text */
	placeholder?: string;
	/**ref for input */
}

const InputField = (
	{
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
		className,
		placeholder,
		...rest
	}: IInputFieldProps,
	ref: React.Ref<HTMLInputElement>
) => {
	// Wrappers such as TextInput style their own error state and signal it through aria-invalid.
	const isInvalid = isError || rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
	return (
		<input
			{...{
				ref,
				type,
				id,
				name,
				value,
				onChange: (e) => {
					if (handleChange) handleChange(e.target.value);
				},
				autoFocus: isFocused,
				readOnly: isReadonly,
				disabled: isDisabled,
				placeholder: placeholder || undefined,
				required,
				"aria-invalid": isError,
				"aria-disabled": isDisabled,
				className: cn(
					// Fixed 36px height to line up with the default Button (h-9).
					"peer h-9 w-full rounded border border-gray-300 px-3 py-0 text-sm font-normal leading-5 outline-offset-0 ring-offset-0",
					// Focus is a single 1px border colour change. The `!` keeps @tailwindcss/forms' focus ring and
					// blue border from winning when a consumer's forms styles load after plenum's stylesheet.
					"focus:outline-none focus:!ring-0",
					{ "focus:!border-violet-700": !isInvalid && !isReadonly },
					isError ? "!border-red-600 !text-red-600" : "",
					isReadonly ? "!border-gray-400 !text-gray-500" : "",
					className
				),
				...rest
			}}
		/>
	);
};

const _InputField = forwardRef<HTMLInputElement, IInputFieldProps>(InputField);
export default _InputField;
