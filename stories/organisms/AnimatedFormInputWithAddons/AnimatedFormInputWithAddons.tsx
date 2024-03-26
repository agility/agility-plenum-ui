import React from "react"
import { default as cn } from "classnames"
import InputField, { IInputFieldProps } from "@/stories/molecules/inputs/InputField"
import InputCounter from "@/stories/molecules/inputs/InputCounter"
import { INestedInputButtonProps, NestedInputButton } from "@/stories/molecules"

interface ILabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	display: string
}

export interface IAnimatedFormInputWithAddons extends Omit<IInputFieldProps, "handleChange"> {
	id: string
	containerStyles?: string
	message?: string
	required?: boolean
	isError?: boolean
	isShowCounter?: boolean
	maxLength?: number
	label: ILabelProps
	handleChange: (value: string) => void
	labelClassName?: string
	addonBTN: INestedInputButtonProps
}

const AnimatedFormInputWithAddons: React.FC<IAnimatedFormInputWithAddons> = (props: IAnimatedFormInputWithAddons) => {
	const {
		id,
		containerStyles,
		message,
		required,
		isError,
		label,
		value,
		isShowCounter,
		maxLength,
		handleChange,
		labelClassName,
		addonBTN,
		...input
	} = props

	const [hasValue, setHasValue] = React.useState<boolean>(!!value)
	const [valueLength, setValueLength] = React.useState<number>(0)

	return (
		<>
			<div className={cn("group relative", containerStyles ? containerStyles : "")}>
				<InputField
					id={id}
					isError={isError}
					value={value}
					handleChange={(v) => {
						setHasValue(!!v)
						setValueLength(v.length)
						if (handleChange) handleChange(v)
					}}
					{...input}
				/>

				{addonBTN && (
					<div className="absolute top-0 bottom-0 right-0 flex items-center ">
						<NestedInputButton {...addonBTN} />
					</div>
				)}
				<div
					className={cn(
						"absolute z-10 ml-[3px] inline-block bg-white text-sm transition-all text-gray-500 left-1 px-1",
						hasValue ? "!-top-[8px] !ml-[.172rem] !text-xs text-gray-600" : "top-[9px]",
						"peer-placeholder-shown:!-top-[8px] peer-placeholder-shown:!ml-[.172rem] peer-placeholder-shown:!text-xs peer-placeholder-shown:text-gray-600",
						"group-focus-within:!-top-[8px] group-focus-within:!bg-label-gradient-focus group-focus-within:!ml-[.172rem] group-focus-within:!text-xs group-focus-within:text-gray-600",

						isError && "!text-red-600"
					)}
				>
					<label htmlFor={id} className={labelClassName}>
						{label.display}
						{required && <span className="text-red-600 ml-1">*</span>}
					</label>
				</div>
				<div className="flex flex-row space-x-3">
					<div className="grow">
						{message && (
							<span className={cn("mt-1 block text-sm", isError ? "text-red-500" : "text-gray-500")}>
								{message}
							</span>
						)}
					</div>
					{isShowCounter && (
						<div className="shrink-0">
							<InputCounter current={Number(valueLength)} limit={maxLength ?? 150} />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default AnimatedFormInputWithAddons
