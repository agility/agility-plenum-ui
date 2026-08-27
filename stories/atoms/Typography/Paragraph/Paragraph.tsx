import { default as cn } from "classnames";

type ParagraphAs = "span" | "p" | "label" | "strong" | "em";
type ParagraphSize = "xl" | "lg" | "md" | "sm" | "xs";

export interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
	as?: ParagraphAs;
	size?: ParagraphSize;
	children: React.ReactNode;
	className?: string;
}

const paragraphStyles: Record<ParagraphSize, string> = {
	xl: "text-lg",
	lg: "text-base",
	md: "text-sm",
	sm: "text-xs",
	xs: "text-[10px] leading-[12px]"
};

export default function Paragraph({ as = "p", size = "md", children, className, ...rest }: ParagraphProps) {
	const Tag = as;

	return (
		<Tag className={cn("text-gray-900 font-normal", paragraphStyles[size], className)} {...rest}>
			{children}
		</Tag>
	);
}
