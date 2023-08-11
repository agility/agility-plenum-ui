import React from "react"
import { default as cn } from "classnames"
import InputField, { IInputFieldProps } from "@/stories/molecules/inputs/InputField"
import Textarea, { ITextareaProps } from "@/stories/molecules/inputs/textArea/TextArea"

interface ILabelProps extends React.ComponentPropsWithoutRef<"label"> {
	display: string
}

export interface IAnimatedLabelInputProps {
	id: string
	containerStyles?: string
	message?: string
	input?: IInputFieldProps
	textarea?: ITextareaProps
	required?: boolean
	isError?: boolean
	label: ILabelProps
}

const AnimatedLabelInput: React.FC<IAnimatedLabelInputProps> = ({
	id,
	label,
	input,
	message,
	textarea,
	required,
	isError,
	containerStyles
}) => {
	return (
		<div className={cn("group relative", containerStyles ? containerStyles : "")}>
			{input && <InputField isError={isError} {...input} />}
			{textarea && <Textarea isError={isError} {...textarea} />}
			<label
				className={cn(
					"absolute left-1 z-10 ml-[.172rem] inline-block bg-white px-1 text-xs  transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600",
					"-top-[9px] group-focus-within:!-top-[12px] group-focus-within:!left-1  group-focus-within:!ml-[.172rem]  group-focus-within:!text-xs",
					isError && "!text-red-600"
				)}
				htmlFor={id}
			>
				{label.display}
				{required && <span className="text-red-600">*</span>}
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
	)
}

export default AnimatedLabelInput
