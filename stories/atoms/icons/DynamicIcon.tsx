import React from "react"
// TODO: Fix heroicons support
import * as SolidIcons from "@heroicons/react/solid"
import * as OutlineIcons from "@heroicons/react/outline"
import * as FA from "react-icons/fa"
import { tablerIconNames, TablerIconName } from "./tablerIconNames"
import { default as cn } from "classnames"

import { ClassNameWithAutocomplete } from "@/utils/types"
import TablerIcon from "./TablerIcon"

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons
export type FAIconName = keyof typeof FA

export type UnifiedIconName = TablerIconName | IconName | FAIconName

export function isHeroIcon(name: UnifiedIconName): name is keyof typeof SolidIcons | keyof typeof OutlineIcons {
	return name in SolidIcons || name in OutlineIcons
}

export function isTablerIcon(name: UnifiedIconName): name is TablerIconName {
	return tablerIconNames.includes(name as TablerIconName)
}

export function isFAIcon(name: UnifiedIconName): name is keyof typeof FA {
	return name in FA
}

export function isUnifiedIconName(name: UnifiedIconName): name is UnifiedIconName {
	return isTablerIcon(name) // || isHeroIcon(name) || isFAIcon(name)
}

export interface IDynamicIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	icon: UnifiedIconName
	className?: ClassNameWithAutocomplete
	outline?: boolean
	CustomSVG?: React.ReactNode
}

export const DynamicIcon = ({
	icon,
	className = "w-5 h-5 text-gray-400",
	outline,
	CustomSVG,
	...props
}: IDynamicIconProps): JSX.Element => {
	if (CustomSVG) {
		return <i {...{ ...props, className: "flex items-center justify-center" }}>{CustomSVG}</i>
	}

	if (isTablerIcon(icon)) {
		return (
			<TablerIcon
				{...{
					icon,
					className: cn(className, {
						"text-gray-600 h-5 w-5": !className
					}),
					outline
				}}
			/>
		)
	}

	if (isFAIcon(icon)) {
		const Icon = FA[icon]
		return (
			<i {...{ ...props, className: "flex items-center justify-center" }}>
				<Icon
					className={cn(className, {
						"h-5 w-5 text-gray-600": !className
					})}
				/>
			</i>
		)
	}
	if (isHeroIcon(icon)) {
		const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon]
		return (
			<i {...{ ...props, className: "flex items-center justify-center" }}>
				<Icon
					className={cn(className, {
						"h-5 w-5 text-gray-600": !className
					})}
				/>
			</i>
		)
	}
	return <></>
}
