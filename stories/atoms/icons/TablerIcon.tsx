import React from "react";
import { TablerIconName } from "./tablerIconNames";
import {
	IconArrowDown,
	IconArrowUp,
	IconBan,
	IconBell,
	IconBrandGithub,
	IconCheck,
	IconChevronDown,
	IconCode,
	IconConfetti,
	IconCopy,
	IconCube,
	IconDotsVertical,
	IconEye,
	IconEyeCheck,
	IconEyeOff,
	IconFolderPlus,
	IconGridDots,
	IconPaperclip,
	IconPencil,
	IconPlus,
	IconSearch,
	IconSelector,
	IconThumbUp,
	IconTrash,
	IconTrashFilled,
	IconUpload,
	IconX,
} from "@tabler/icons-react";
import { ClassNameWithAutocomplete } from "@/utils/types";

const tablerIconMap = {
	IconArrowDown,
	IconArrowUp,
	IconBan,
	IconBell,
	IconBrandGithub,
	IconCheck,
	IconChevronDown,
	IconCode,
	IconConfetti,
	IconCopy,
	IconCube,
	IconDotsVertical,
	IconEye,
	IconEyeCheck,
	IconEyeOff,
	IconFolderPlus,
	IconGridDots,
	IconPaperclip,
	IconPencil,
	IconPlus,
	IconSearch,
	IconSelector,
	IconThumbUp,
	IconTrash,
	IconTrashFilled,
	IconUpload,
	IconX,
} as const;

export interface ITablerIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	icon: TablerIconName;
	className?: ClassNameWithAutocomplete;
}

const TablerIcon: React.FC<ITablerIconProps> = ({
	icon,
	className = "w-6 h-6 text-gray-600"
}: ITablerIconProps): JSX.Element => {
	const Icon = tablerIconMap[icon as keyof typeof tablerIconMap];
	if (!Icon) return <></>;
	return (
		<i>
			<Icon className={className} />
		</i>
	);
};
export default TablerIcon;
