import React, { useId } from "react";
import { default as cn } from "classnames";
import InputLabel from "../InputLabel";
import InputCounter from "../InputCounter";

interface ILabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	display: string;
	htmlFor?: string;
}

export interface ITextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
	/** Input ID */
	id?: string;
	/** Input Name */
	name?: string;
	/** Label for the input */
	label?: ILabelProps;
	/** Error state */
	isError?: boolean;
	/** If field is required */
	isRequired?: boolean;
	/** Disabled state */
	isDisabled?: boolean;
	/** Set default value */
	defaultValue?: string;

	value?: string;

	/** Message shown under the text field */
	message?: string;
	/** Input character counter */
	isShowCounter?: boolean;
	/** Max length of input character  */
	maxLength?: number;
	/** Callback on change */
	onChange?(value: string): void;
	/** Number of rows */
	rows?: number;
	/** Number of cols */
	cols?: number;
	placeholder?: string;
	className?: string;
	ref?: React.LegacyRef<HTMLTextAreaElement>;
}

const Textarea: React.FC<ITextareaProps> = ({
	id,
	name,
	label,
	isError,
	isRequired,
	isDisabled,
	defaultValue,
	message,
	isShowCounter,
	maxLength,
	rows = 12,
	cols = 48,
	onChange,
	value,
	placeholder,
	className,
	ref,
	...rest
}) => {
	const uniqueID = useId();

	const discriptionStyles = cn("text-sm mt-1 block", { "text-gray-500": !isError }, { "text-red-500": isError });

	if (!id) id = `ta-${uniqueID}`;

	if (!label) {
		return (
			<textarea
				ref={ref}
				maxLength={maxLength}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					const targetValue = e.target.value;
					if (onChange) {
						onChange(targetValue);
					}
				}}
				rows={rows}
				name={name}
				id={id}
				cols={cols}
				className={cn(
					"peer block w-full rounded focus:border-purple-500 focus:ring-purple-500 sm:text-sm",
					{ "border-gray-300 ": !isError },
					{
						"border-red-500 outline-red-500 focus:ring-red-500": isError
					},
					className
				)}
				disabled={isDisabled}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
				{...rest}
			/>
		);
	}

	//with label
	return (
		<div className="group">
			<InputLabel isActive label={label.display} isRequired={isRequired} id={id} isDisabled={isDisabled} />

			<div>
				<textarea
					ref={ref}
					maxLength={maxLength}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						const targetValue = e.target.value;
						if (onChange) {
							onChange(targetValue);
						}
					}}
					rows={rows}
					name={name}
					id={id}
					cols={cols}
					className={cn(
						"block w-full rounded focus:border-purple-500 focus:ring-purple-500 sm:text-sm",
						{ "border-gray-300 ": !isError },
						{
							"border-red-500 outline-red-500 focus:ring-red-500": isError
						},
						className
					)}
					disabled={isDisabled}
					defaultValue={defaultValue}
					value={value}
					placeholder={placeholder}
					{...rest}
				/>
			</div>
			<div className="flex flex-row space-x-3">
				<div className="grow">{message && <span className={discriptionStyles}>{message}</span>}</div>
				{isShowCounter && (
					<div className="shrink-0">
						<InputCounter current={Number(value?.length)} limit={maxLength} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Textarea;
