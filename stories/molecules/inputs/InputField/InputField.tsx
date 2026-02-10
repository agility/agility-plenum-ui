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
					"peer w-full rounded border border-gray-300 px-3 text-sm font-normal leading-5 outline-offset-0 ring-offset-0 focus:border-violet-700 focus:ring-0   ",
					isError ? "!border-red-600 !text-red-600 focus:!ring-red-600" : "",
					isReadonly ? "!border-gray-400 !text-gray-500 focus:!ring-gray-400" : "",
					className
				),
				...rest
			}}
		/>
	);
};

const _InputField = forwardRef<HTMLInputElement, IInputFieldProps>(InputField);
export default _InputField;
