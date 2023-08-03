import React from "react"
import Button, { IButtonProps } from "@/stories/atoms/buttons/Button"
import { IDynamicIconProps } from "@/stories/atoms/icons"
import IconWithShadow from "@/stories/atoms/icons/IconWithShadow"
import { default as cn } from "classnames"

export interface IEmptySectionPlaceholderProps {
	/** the primary icon to display at top of component */
	icon: IDynamicIconProps
	/** the muted text to display below the icon */
	mutedText?: string
	/** the primary message to display below the muted text */
	primaryMessage: string
	/** the call to action component that if provided will be used instead of primaryMessage */
	CallToActionComponent?: React.ReactNode
	/** the actions to display below the primary call to action or message */
	actions: IButtonProps[]
	/** whether to display the component in a wide or narrow format */
	isWide?: boolean
}

const EmptySectionPlaceholder: React.FC<IEmptySectionPlaceholderProps> = ({
	icon,
	mutedText,
	primaryMessage,
	CallToActionComponent,
	actions,
	isWide
}) => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-gray-300 p-5">
			<IconWithShadow {...icon} />
			{mutedText && <p className="my-2 block text-xs text-gray-500">{mutedText}</p>}
			{CallToActionComponent ? (
				CallToActionComponent
			) : (
				<p className="mb-2 block text-sm font-medium text-gray-600">{primaryMessage}</p>
			)}
			{actions.length > 0 ? (
				<div className={cn("mt-2 flex gap-2", isWide ? "" : "flex-col items-center")}>
					{actions.map((action, index) => (
						<Button {...{ ...action }} key={action.label.replaceAll(" ", "-")} />
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default EmptySectionPlaceholder
