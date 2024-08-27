import { DynamicIcon, IDynamicIconProps } from "@/stories/atoms/icons"
import React, { useLayoutEffect, useRef, useState } from "react"
import { default as cn } from "classnames"
import InputField, { IInputFieldProps, AcceptedInputTypes } from "@/stories/molecules/inputs/InputField"
import NestedInputButton, { INestedInputButtonProps } from "@/stories/molecules/inputs/NestedInputButton"

export interface IFormInputWithAddonsProps extends Omit<IInputFieldProps, "type"> {
	leadIcon?: IDynamicIconProps
	leadLabel?: string
	trailIcon?: IDynamicIconProps
	trailLabel?: string
	iconOutlined?: boolean
	/** @param addonOffset An extra buffer zone in pixels between the trailing/leading icon or label and search input -- Default is 24 */
	addonOffset?: number
	topLabel?: string
	labelClass?: string
	containerClassName?: string
	description?: string
	leadIconClassNames?: string
	customIconClass?: string
	type: AcceptedInputTypes
	addonBTN?: INestedInputButtonProps
	inputRef?: React.RefObject<HTMLInputElement>
}

const FormInputWithAddons: React.FC<IFormInputWithAddonsProps> = ({
	handleChange,
	value,
	name,
	id,
	placeholder,
	className,
	containerClassName,
	leadIcon,
	leadLabel,
	trailIcon,
	trailLabel,
	topLabel,
	labelClass,
	isDisabled,
	isReadonly,
	isError,
	addonOffset = 24,
	iconOutlined = false,
	description,
	leadIconClassNames,
	customIconClass,
	type,
	addonBTN,
	inputRef,
	...rest
}) => {
	// #region logic to determine the width of the lead and or trailing labels in order to offset the input padding by the appropriate amount.
	const leadLabelRef = useRef<HTMLLabelElement>(null)
	const trailLabelRef = useRef<HTMLLabelElement>(null)
	const [leadLabelWidth, setLeadLabelWidth] = useState<number>(0)
	const [trailLabelWidth, setTrailLabelWidth] = useState<number>(0)
	useLayoutEffect(() => {
		setLeadLabelWidth(leadLabelRef.current?.clientWidth || 0)
		setTrailLabelWidth(trailLabelRef.current?.clientWidth || 0)
	}, [])
	// #endregion

	return (
		<div className={cn("group flex flex-col", containerClassName)}>
			{!leadLabel && !trailLabel && topLabel && (
				<label htmlFor={id} className={cn("flex items-center text-sm  text-gray-600", labelClass)}>
					{topLabel}
				</label>
			)}
			{description && <div className="mb-2 text-sm text-gray-500">{description}</div>}
			<div className="relative flex-grow">
				{(leadLabel || leadIcon) && (
					<label
						ref={leadLabelRef}
						htmlFor={id}
						className={cn(
							"absolute top-0 bottom-0 left-3 flex items-center justify-center text-sm text-gray-500",
							labelClass
						)}
					>
						{leadIcon && (
							<span>
								<DynamicIcon
									{...{
										...leadIcon,
										className: cn(
											"h-5 w-5 text-gray-400",
											leadIconClassNames,
											customIconClass,
											leadIcon.className
										),
										outline: iconOutlined
									}}
								/>
							</span>
						)}
						{leadLabel && leadLabel}
					</label>
				)}
				<InputField
					{...{
						...rest,
						handleChange,
						value,
						id,
						name,
						type,
						autoComplete: "off",
						disabled: isDisabled,
						placeholder: placeholder || "",
						isReadonly,
						isError,
						className,
						// add padding to accomodate inner labels and icons
						style: {
							paddingRight: `${trailLabelWidth + addonOffset}px`,
							paddingLeft: `${leadLabelWidth + addonOffset}px`
						},
						inputRef
					}}
				/>
				{(trailLabel || trailIcon) && (
					<label
						ref={trailLabelRef}
						htmlFor={id}
						className={cn(
							"right absolute top-0 bottom-0 right-3 flex items-center justify-center text-sm !text-gray-500 ",
							labelClass
						)}
					>
						{trailIcon && (
							<span>
								<DynamicIcon
									{...{
										...trailIcon,
										className: cn("h-5 w-5 text-gray-400", customIconClass, trailIcon.className),
										outline: iconOutlined
									}}
								/>
							</span>
						)}
						{trailLabel && trailLabel}
					</label>
				)}
				{addonBTN && (
					<div className="absolute top-0 bottom-0 right-0 flex items-center ">
						<NestedInputButton {...addonBTN} />
					</div>
				)}
			</div>
		</div>
	)
}

export default FormInputWithAddons
