import { default as cn } from "classnames";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
	level: HeadingLevel;
	children: React.ReactNode;
	className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
	1: "text-[40px] leading-[48px]",
	2: "text-[36px] leading-[44px]",
	3: "text-[32px] leading-[40px]",
	4: "text-[28px] leading-[36px]",
	5: "text-[24px] leading-[32px]",
	6: "text-[20px] leading-[28px]"
};

export default function Heading({ level, children, className }: HeadingProps) {
	const Tag = `h${level}` as const;

	return (
		<Tag className={cn("gray-900 font-medium tracking-[-0.8px]", headingStyles[level], className)}>{children}</Tag>
	);
}
