import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';
export declare type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;
interface DynamicIconsProps {
    icon?: IconName;
    className?: string;
    outline?: boolean;
}
export declare const DynamicIcons: ({ icon, className, outline }: DynamicIconsProps) => JSX.Element | null;
export {};
