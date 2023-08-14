import React from "react"
import { default as cn } from "classnames"
import InputField, { IInputFieldProps } from "@/stories/molecules/inputs/InputField"

interface ILabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	display: string
}

export interface IAnimatedLabelInputProps extends Omit<IInputFieldProps, "handleChange"> {
	id: string
	containerStyles?: string
	message?: string
	required?: boolean
	isError?: boolean
	label: ILabelProps
	handleChange: (value: string) => void
}

const AnimatedLabelInput: React.FC<IAnimatedLabelInputProps> = (props: IAnimatedLabelInputProps) => {
	const { id, containerStyles, message, required, isError, label, value, handleChange, ...input } = props

	const [hasValue, setHasValue] = React.useState<boolean>(!!value)

	return (
		<>
			<div className={cn("group relative", containerStyles ? containerStyles : "")}>
				<InputField
					id={id}
					isError={isError}
					value={value}
					handleChange={(v) => {
						setHasValue(!!v)
						if (handleChange) handleChange(v)
					}}
					{...input}
				/>
				<label
					className={cn(
						"absolute z-10 ml-[3px] inline-block bg-white text-sm transition-all text-gray-500 left-1 px-1",
						hasValue ? "!-top-[8px] !ml-[.172rem] !text-xs text-gray-600" : "top-[9px]",
						"peer-placeholder-shown:!-top-[8px] peer-placeholder-shown:!ml-[.172rem] peer-placeholder-shown:!text-xs peer-placeholder-shown:text-gray-600",
						"group-focus-within:!-top-[8px] group-focus-within:!ml-[.172rem] group-focus-within:!text-xs group-focus-within:text-gray-600",

						isError && "!text-red-600"
					)}
					htmlFor={id}
				>
					{label.display}
					{required && <span className="text-red-600 ml-1">*</span>}
				</label>

				<div className="flex flex-row space-x-3">
					<div className="grow transition-all">
						{message && (
							<span className={cn("mt-1 block text-sm", isError ? "text-red-500" : "text-gray-500")}>
								{message}
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default AnimatedLabelInput
