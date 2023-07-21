import React from "react"
import { TablerIconName } from "./tablerIconNames"
import * as TablerIcons from "@tabler/icons-react"
import { ClassNameWithAutocomplete } from "../../util/types"

export interface ITablerIconProps extends React.ComponentProps<"i"> {
	icon: TablerIconName
	className?: ClassNameWithAutocomplete
}

const TablerIcon: React.FC<ITablerIconProps> = ({
	icon,
	className = "w-6 h-6 text-gray-600"
}: ITablerIconProps): JSX.Element => {
	const Icon = TablerIcons[icon]
	return (
		<i>
			<Icon className={className} />
		</i>
	)
}
export default TablerIcon
