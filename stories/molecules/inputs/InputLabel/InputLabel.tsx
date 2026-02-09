// If we remove React from this import, manager app fails with no React reference found
// TODO: investigate this further
//@ts-ignore
import React, { FC } from "react";
import { default as cn } from "classnames";
import Label from "../../../atoms/Typography/Label/Label";

export interface IInputLabelProps {
	/** Prop comment */
	isPlaceholder?: boolean;
	id: string;
	isRequired?: boolean;
	isDisabled?: boolean;
	isError?: boolean;
	isActive?: boolean;
	isFocused?: boolean;
	label?: string;
	truncateLabel?: boolean;
	fullWidthLabel?: boolean;
	noMarginBottom?: boolean;
}

/** Comment */
const InputLabel: FC<IInputLabelProps> = ({
	isPlaceholder = false,
	id,
	isRequired,
	isDisabled,
	isActive,
	label,
	truncateLabel = false,
	fullWidthLabel = false,
	noMarginBottom = false
}: IInputLabelProps) => {
	const labelStyles = cn(
		"inline-flex gap-1 text-gray-700",
		{ "text-gray-400 top-8": !isActive },
		{ "text-gray-700 bg-white": isActive },
		{ "text-gray-500/[.5]": isDisabled },
		{ "block w-full": fullWidthLabel },
		{ "mb-1": !noMarginBottom },
		{ "break-all line-clamp-1": truncateLabel }
	);

	if (!label) return null;
	return (
		<Label as="label" size="md" className={labelStyles} htmlFor={id}>
			{label}
			{isRequired && <span className="text-red-600"> *</span>}
		</Label>
	);
};

export default InputLabel;
