import React, { useState, useEffect, type ComponentType } from "react";
import { TablerIconName } from "./tablerIconNames";
import { ClassNameWithAutocomplete } from "@/utils/types";

let iconRegistry: Record<string, ComponentType<any>> | null = null;
let registryPromise: Promise<void> | null = null;

function loadIconRegistry(): Promise<void> {
	if (!registryPromise) {
		registryPromise = import("@tabler/icons-react").then((mod) => {
			iconRegistry = mod as unknown as Record<string, ComponentType<any>>;
		});
	}
	return registryPromise;
}

// Kick off load eagerly on module import
loadIconRegistry();

export interface ITablerIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	icon: TablerIconName;
	className?: ClassNameWithAutocomplete;
}

const TablerIcon: React.FC<ITablerIconProps> = ({
	icon,
	className = "w-6 h-6 text-gray-600",
	...rest
}: ITablerIconProps): JSX.Element | null => {
	const [Icon, setIcon] = useState<ComponentType<any> | null>(
		iconRegistry && icon ? (iconRegistry[icon] ?? null) : null
	);

	useEffect(() => {
		if (!icon) { setIcon(null); return; }
		if (iconRegistry) { setIcon(iconRegistry[icon] ?? null); return; }
		loadIconRegistry().then(() => setIcon(iconRegistry![icon] ?? null));
	}, [icon]);

	if (!Icon) return null;
	return (
		<i {...rest}>
			<Icon className={className} />
		</i>
	);
};
export default TablerIcon;
