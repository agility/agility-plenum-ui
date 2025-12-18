import { default as cn } from "classnames";

type ParagraphAs = "span" | "p" | "label" | "strong" | "em";
type ParagraphSize = "lg" | "md" | "sm" | "xs";

export interface ParagraphProps {
	as?: ParagraphAs;
	size?: ParagraphSize;
	children: React.ReactNode;
	className?: string;
}

const paragraphStyles: Record<ParagraphSize, string> = {
	lg: "text-lg",
	md: "text-base",
	sm: "text-sm",
	xs: "text-xs leading-[20px]"
};

export default function Paragraph({ as = "p", size = "md", children, className }: ParagraphProps) {
	const Tag = as;

	return <Tag className={cn("gray-900 font-normal", paragraphStyles[size], className)}>{children}</Tag>;
}
