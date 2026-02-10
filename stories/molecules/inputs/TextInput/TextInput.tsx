import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import { default as cn } from "classnames";
import InputLabel from "../InputLabel";
import InputField, { AcceptedInputTypes } from "../InputField";
import InputCounter from "../InputCounter";
import Paragraph from "../../../atoms/Typography/Paragraph/Paragraph";

export interface ITextInputProps {
	/** Input type*/
	type: AcceptedInputTypes;
	/** Input ID */
	id?: string;
	/** Input Name */
	name?: string;
	/** Label for the input */
	label?: string;
	/** Force the focus state on the input */
	isFocused?: boolean;
	/** Error state */
	isError?: boolean;
	/** If field is required */
	isRequired?: boolean;
	/** Disabled state */
	isDisabled?: boolean;
	/** Readonly state */
	isReadonly?: boolean;
	/** Set default value */
	defaultValue?: string;
	/** Message shown under the text field */
	message?: string;
	/** Input character counter */
	isShowCounter?: boolean;
	/** Max length of input character  */
	maxLength?: number;
	/** Callback on change */
	handleChange(value: string): void;
	/** input value */
	value: string;
	/**Placeholder input text*/
	placeholder?: string;

	className?: string;

	/** Callback on focus */
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	/** Callback on blur */
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
		onFocus,
		onBlur,
		...props
	}: ITextInputProps,
	ref: React.Ref<HTMLInputElement>
) => {
	const uniqueID = useId();
	const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused));

	const [value, setValue] = useState<string>(externalValue || defaultValue || "");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		//if the external value is updated by the parent component, reset the value in here...
		if (externalValue !== undefined && externalValue !== null) {
			setValue(externalValue);
		}
	}, [externalValue]);

	// set force focus
	useEffect(() => {
		const input = inputRef.current;
		if (!input || isFocus === undefined || isDisabled) return;
		if (isFocus) {
			input.focus();
		} else {
			input.blur();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFocus]);

	// set label as active if default value is set
	useEffect(() => {
		const input = inputRef.current;
		if (!input || defaultValue === undefined || defaultValue === "") return;
	}, [defaultValue]);

	const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocus(true);
		if (onFocus) onFocus(e);
	};
	// add other focus effects here

	const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocus(false);
		if (onBlur) onBlur(e);
	};

	if (!id) id = `input-${uniqueID}`;
	if (!name) name = id;

	return (
		<div className="relative group">
			<InputLabel label={label} isRequired={isRequired} id={id} isActive={true} isDisabled={isDisabled} />
			<InputField
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				handleChange={(v: string) => {
					setValue(v);
					handleChange(v);
				}}
				ref={ref}
				type={type}
				name={name}
				id={id}
				className={cn(
					"w-full rounded border py-2 px-3 text-sm font-normal leading-5 hover:border-gray-500 placeholder:text-gray-500 ",
					{ "border-gray-300": !isFocus && !isError && !isDisabled },
					{
						"!border-violet-700 shadow-none": isFocus && !isError && !isDisabled
					},
					{
						"!border-red-500 shadow-none focus:ring-red-500": isError
					},
					{
						"!border-gray-300 !outline-gray-300 focus:!ring-gray-300": isDisabled
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
						<Paragraph size="md" className={isError ? "text-red-600" : "text-gray-500"}>
							{message}
						</Paragraph>
					)}
				</div>
				{isShowCounter && (
					<div className="shrink-0">
						<InputCounter current={Number(value?.length)} limit={maxLength ?? 150} />
					</div>
				)}
			</div>
		</div>
	);
};

const _TextInput = forwardRef<HTMLInputElement, ITextInputProps>(TextInput);
export default _TextInput;
