import classNames, { type ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

// classnames keeps the conditional-object syntax working; twMerge resolves
// Tailwind class conflicts with last-one-wins semantics. Note: twMerge only
// recognizes stock Tailwind scales — classes from custom theme scales (e.g.
// px-xsm) pass through untouched and never conflict-merge against stock ones.
export function cn(...inputs: ArgumentArray): string {
	return twMerge(classNames(...inputs));
}
