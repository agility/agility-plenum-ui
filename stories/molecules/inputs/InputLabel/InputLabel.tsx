// If we remove React from this import, manager app fails with no React reference found
// TODO: investigate this further
//@ts-ignore
import React, { FC } from "react";
import { default as cn } from "classnames";

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
	isError,
	label,
	truncateLabel = false,
	fullWidthLabel = false,
	noMarginBottom = false
}: IInputLabelProps) => {
	const labelStyles = cn(
		"z-[2] inline-flex gap-1",
		{ "inline-block ml-2 relative transition-all": isPlaceholder },
		{ "text-sm text-gray-400 px-2 top-8": isPlaceholder && !isActive },
		{ "text-xs text-gray-700 px-1 top-[10px] bg-white": isPlaceholder && isActive },
		{ "text-xs text-red-500 px-1 top-[10px] bg-white": isPlaceholder && isError },
		{ "text-red-500 bg-white": !isPlaceholder && isError },
		{ "text-gray-500/[.5]": isDisabled },
		{ "inline-block  transition-all text-sm text-gray-700": !isPlaceholder },
		{ "block w-full": fullWidthLabel },
		{ "mb-1": !noMarginBottom }
	);

	if (!label) return null;
	return (
		<label htmlFor={id} className={labelStyles}>
			<div className={truncateLabel ? "break-all line-clamp-1" : ""} title={label}>
				{label}
			</div>
			{isRequired && <span className="text-red-500"> *</span>}
		</label>
	);
};

export default InputLabel;
