import { default as cn } from "classnames";

type LabelAs = "span" | "p" | "label" | "strong" | "em";
type LabelSize = "xl" | "lg" | "md" | "sm" | "xs";

export interface LabelProps {
	as?: LabelAs;
	size?: LabelSize;
	children: React.ReactNode;
	className?: string;
	htmlFor?: string;
}

const labelStyles: Record<LabelSize, string> = {
	xl: "text-lg tracking[-0.36px]",
	lg: "text-base tracking[-0.32px]",
	md: "text-sm tracking[-0.28px]",
	sm: "text-xs tracking[-0.24px]",
	xs: "text-[10px] leading-[14px] tracking[-0.2px]"
};

export default function Label({ as = "span", size = "md", children, className, htmlFor = "" }: LabelProps) {
	const Tag = as;

	return (
		<Tag htmlFor={htmlFor} className={cn("gray-900 font-normal", labelStyles[size], className)}>
			{children}
		</Tag>
	);
}
