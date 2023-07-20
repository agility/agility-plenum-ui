import React from "react"

import * as SolidIcons from "@heroicons/react/solid"
import * as OutlineIcons from "@heroicons/react/outline"
import * as TablerIconComponents from "@tabler/icons-react"
import * as FA from "react-icons/fa"
import { tablerIconNames, TablerIconName } from "./tablerIconNames"
import { default as cn } from "classnames"

import TablerIcon from "./TablerIcon"

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons

export type FAIconName = keyof typeof FA

export type UnifiedIconName = IconName | TablerIconName | FAIconName

export function isHeroIcon(
	name: UnifiedIconName
): name is keyof typeof SolidIcons | keyof typeof OutlineIcons {
	return name in SolidIcons || name in OutlineIcons
}

export function isTablerIcon(name: UnifiedIconName): name is TablerIconName {
	return tablerIconNames.includes(name as TablerIconName)
}

export function isFAIcon(name: UnifiedIconName): name is keyof typeof FA {
	return name in FA
}

export interface IDynamicIconsProps extends React.ComponentProps<"i"> {
	icon: UnifiedIconName | undefined
	className?: string
	outline?: boolean
}

export const DynamicIcons = ({
	icon,
	className = "w-6 h-6 text-gray-600",
	outline,
	...props
}: IDynamicIconsProps): JSX.Element => {
	if (!icon) return <i {...props}></i>

	if (isHeroIcon(icon)) {
		const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon]
		return (
			<i {...props}>
				<Icon className={cn("h-6 w-6 text-gray-600", className)} />
			</i>
		)
	}
	if (isTablerIcon(icon)) {
		return (
			<TablerIcon
				{...{ icon, className: cn("w-6 h-6 text-gray-600", className) }}
			/>
		)
	}
	if (isFAIcon(icon)) {
		const Icon = FA[icon]
		return (
			<i {...props}>
				<Icon className={cn("h-6 w-6 text-gray-600", className)} />
			</i>
		)
	}
	return <></>
}
