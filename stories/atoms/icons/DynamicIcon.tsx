import React from "react"
// TODO: Fix heroicons support — using import type to avoid bundling full icon sets
import type * as SolidIcons from "@heroicons/react/solid"
import type * as OutlineIcons from "@heroicons/react/outline"
import { tablerIconNames, TablerIconName } from "./tablerIconNames"
import { default as cn } from "classnames"

import { ClassNameWithAutocomplete } from "@/utils/types"
import TablerIcon from "./TablerIcon"

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons

export type UnifiedIconName = TablerIconName | IconName

// isHeroIcon: heroicon support is pending (TODO: Fix heroicons support)
export function isHeroIcon(name: UnifiedIconName): name is keyof typeof SolidIcons | keyof typeof OutlineIcons {
	return false
}

export function isTablerIcon(name: UnifiedIconName): name is TablerIconName {
	return tablerIconNames.includes(name as TablerIconName)
}

export function isUnifiedIconName(name: UnifiedIconName): name is UnifiedIconName {
	return isTablerIcon(name)
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

	return <></>
}
