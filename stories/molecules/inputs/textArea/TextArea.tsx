import { default as cn } from "classnames"

export interface ITextAreaFieldProps extends React.ComponentPropsWithoutRef<"textarea"> {
	/** Callback on change */
	handleChange: (value: string) => void
	/** textarea ID*/
	id: string
	/** textarea Name */
	name: string
	/** Force the focus state on the textarea */
	isFocused?: boolean
	/** Error condition */
	isError?: boolean
	/** Disabled state */
	isDisabled?: boolean
	/** Readonly state */
	isReadonly?: boolean
	/** textarea value */
	value: string
	/** If field is required */
	required?: boolean
	/**Allow Text Area Resize*/
	textAreaResize?: boolean
	className?: string
}
const TextAreaField: React.FC<ITextAreaFieldProps> = ({
	id,
	name,
	value,
	isFocused,
	isError,
	isReadonly,
	isDisabled,
	handleChange,
	required,
	placeholder,
	className,
	...rest
}) => {
	return (
		<textarea
			{...{
				id,
				name,
				value,
				onChange: (e) => {
					handleChange(e.target.value)
				},
				autoFocus: isFocused,
				readOnly: isReadonly,
				disabled: isDisabled,
				required,
				placeholder: placeholder || " ",
				"aria-invalid": isError,
				"aria-disabled": isDisabled,
				className: cn(
					"peer w-full resize-y auto-resize rounded border border-gray-300 py-2 px-3 pt-2  text-sm font-normal leading-5 outline-offset-0 ring-offset-0 focus:border-purple-600 focus:ring-purple-600",
					isError ? "border-red-600 text-red-600" : "",
					className
				),
				...rest
			}}
		/>
	)
}

export default TextAreaField
