import React, { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import { default as cn } from "classnames";
import {
	useFloating,
	autoUpdate,
	offset,
	useDismiss,
	useRole,
	useClick,
	useInteractions,
	FloatingFocusManager,
	autoPlacement,
	shift,
	FloatingPortal,
	FloatingList,
	useTransitionStyles,
	Placement,
	useListNavigation,
	FloatingArrow,
	arrow
} from "@floating-ui/react";
import { Paragraph } from "@/stories/atoms/Typography/Paragraph/index";
import { ClassNameWithAutocomplete } from "utils/types";
import { DynamicIcon, IDynamicIconProps } from "@/stories/atoms/icons";

export interface IItemProp {
	//Don't think this needs to extend HtmlButton... extends HTMLAttributes<HTMLButtonElement> {
	icon?: IDynamicIconProps;
	iconPosition?: "trailing" | "leading";
	label: string | JSX.Element;
	onClick?(): void;
	isEmphasized?: boolean;
	key: React.Key;
	iconObj?: JSX.Element;
}

export interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
	items: IItemProp[][];
	label: string;
	CustomDropdownTrigger?: React.ReactNode;
	id: string;
	groupClassname?: ClassNameWithAutocomplete;
	itemsClassname?: ClassNameWithAutocomplete;
	itemClassname?: ClassNameWithAutocomplete;
	activeItemClassname?: ClassNameWithAutocomplete;
	buttonClassname?: ClassNameWithAutocomplete;
	iconClassname?: ClassNameWithAutocomplete;
	iconSpacingClassname?: ClassNameWithAutocomplete;
	dividerClassname?: ClassNameWithAutocomplete;
	placement?: Placement;
	offsetOptions?: Partial<{
		mainAxis: number;
		crossAxis: number;
		alignmentAxis: number | null;
	}>;
	disabled?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
	showOnHover?: boolean;
	showFloatingArrow?: boolean;
}
export const defaultClassNames = {
	groupClassname: "flex inline-block text-left",
	itemsClassname: "mt-2 origin-bottom-right rounded bg-white shadow-lg z-[99999] border border-gray-300 p-1",
	itemClassname:
		"group flex font-sans  cursor-pointer items-center px-3 py-1 text-sm transition-all hover:bg-gray-100 hover:text-gray-900 justify-between gap-4 ",
	activeItemClassname: "block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900",
	buttonClassname:
		"py-[2px] flex items-center  rounded outline-purple-500 transition-all text-gray-400 hover:text-gray-600 ",
	iconClassname: "ml-1 h-5 w-6 stroke-1",
	iconSpacingClassname: "flex items-center gap-x-2",
	dividerClassname: "border-b border-b-gray-100"
};

const itemIconClassName = "opacity-60 group h-5 w-5";

/** Renders an item's icon, whether it was passed as an icon name or as a full DynamicIcon prop object */
const ItemIcon = ({ icon, isEmphasized }: Pick<IItemProp, "icon" | "isEmphasized">): JSX.Element | null => {
	if (!icon) {
		return null;
	}
	//Only ever emit one text color, otherwise the two compete and stylesheet order decides the winner
	const iconColor = {
		"text-error-600": isEmphasized,
		"text-neutral-500": !isEmphasized
	};
	return (
		<DynamicIcon
			{...(typeof icon === "string"
				? { icon, className: cn(itemIconClassName, iconColor) }
				: { ...icon, className: cn(icon.className, itemIconClassName, iconColor) })}
		/>
	);
};

/** Comment */
const Dropdown: React.FC<IDropdownProps> = ({
	items,
	id,
	label,
	groupClassname,
	itemsClassname,
	itemClassname,
	activeItemClassname,
	buttonClassname,
	iconClassname,
	iconSpacingClassname,
	dividerClassname,
	CustomDropdownTrigger,
	placement = "bottom-start",
	offsetOptions,
	disabled,
	onFocus,
	onBlur,
	showFloatingArrow = false,
	showOnHover = false,
	...props
}: IDropdownProps): JSX.Element | null => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeItem, setActiveItem] = useState<React.Key | null>(null);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const listRef = useRef<(HTMLButtonElement | null)[]>([]);
	const arrowRef = React.useRef(null);

	// Floating UI logic
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: (bool: boolean) => {
			listRef.current = [];
			setActiveIndex(null);
			setIsOpen(bool);
		},
		placement,
		middleware: [
			offset(
				offsetOptions ?? {
					crossAxis: 0,
					mainAxis: -4, //up/down
					alignmentAxis: 0 //left/right
				}
			),
			autoPlacement({
				allowedPlacements: [placement, "bottom-start", "bottom-end", "bottom"]
			}),
			shift({ rootBoundary: "document" }),
			arrow({
				element: arrowRef,
				padding: 4
			})
		],
		whileElementsMounted: autoUpdate
	});
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const listNavigation = useListNavigation(context, {
		listRef,
		activeIndex,
		onNavigate: (index: number | null) => {
			if (index !== null && listRef.current[index]) {
				setActiveIndex(index);
				listRef.current[index]?.focus();
			}
		}
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		click,
		dismiss,
		role,
		listNavigation
	]);

	useEffect(() => {
		if (isOpen) {
			onFocus && onFocus();
		} else {
			onBlur && onBlur();
		}
	}, [isOpen, onBlur, onFocus]);

	const ItemComponents = useMemo(
		() =>
			items.map((itemStack, stackIndex) => {
				const isLastStack = stackIndex === items.length - 1;
				const stackItems = itemStack.map((item, itemIndex) => {
					const { key, label, icon, iconObj, iconPosition, isEmphasized, onClick, ...rest } = item;
					const active = activeItem && activeItem === key;
					const isLeading = iconPosition === "leading" || iconPosition === undefined;
					const itemClass = cn(
						defaultClassNames.itemClassname,
						itemClassname,
						"group flex cursor-pointer items-center px-3 py-1 text-sm transition-all",
						{
							"text-error-600": isEmphasized,
							"text-gray-900": !isEmphasized,
							"bg-gray-100 text-gray-900": active,
							"bg-gray-100 text-error-600 hover:text-error-600": active && isEmphasized
						},
						active ? cn(defaultClassNames.activeItemClassname, activeItemClassname) : ""
					);
					return (
						<button
							{...{
								key: key,
								id: key.toString(),
								className: cn(
									itemClass,
									//Round the corners of the first item in the first stack and the last item in the last stack
									itemIndex === 0 && stackIndex === 0 && "rounded-tl rounded-tr",
									itemIndex === itemStack.length - 1 && isLastStack && "rounded-bl rounded-br",
									"w-full"
								),
								...rest,
								...getItemProps(),
								onClick: () => {
									onClick && onClick();
									setTimeout(() => {
										//hide the dropdown after click
										setIsOpen(false);
									}, 150);
								}
							}}
							ref={(node) => {
								//If the list ref already contains a node with the same id do nothing, otherwise add it
								if (listRef.current.some((item) => item?.id === key)) {
									return;
								}
								listRef.current.push(node);
							}}
							key={key}
						>
							<div className={cn(defaultClassNames.iconSpacingClassname, iconSpacingClassname)}>
								{isLeading && iconObj}
								{isLeading && <ItemIcon {...{ icon, isEmphasized }} />}
								<Paragraph
									size="md"
									className={cn("break-all line-clamp-1", {
										"text-error-600": isEmphasized,
										"text-neutral-700": !isEmphasized
									})}
								>
									{label}
								</Paragraph>
								{!isLeading && iconObj}
								{!isLeading && <ItemIcon {...{ icon, isEmphasized }} />}
							</div>
						</button>
					);
				});

				if (isLastStack) {
					return stackItems;
				}

				return (
					<React.Fragment key={`${id}-stack-${stackIndex}`}>
						{stackItems}
						{/* Dividing line between stacks, with 4px of breathing room above and below */}
						<div
							role="separator"
							className={cn("my-1", dividerClassname ?? defaultClassNames.dividerClassname)}
						/>
					</React.Fragment>
				);
			}),
		[
			activeItem,
			activeItemClassname,
			dividerClassname,
			getItemProps,
			iconSpacingClassname,
			id,
			itemClassname,
			items
		]
	);

	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: {
			open: 200,
			close: 200
		},
		initial: {
			opacity: 0,
			scale: 95
		},
		open: {
			opacity: 1,
			scale: 100
		}
	});
	return (
		<div
			{...{
				className: cn(defaultClassNames.groupClassname, groupClassname),
				role: "combobox",
				"aria-owns": `${id}-list`,
				"aria-expanded": isOpen,
				"aria-haspopup": "listbox",
				...props
			}}
		>
			<button
				{...{
					ref: refs.setReference,
					className: cn(defaultClassNames.buttonClassname, buttonClassname),
					onClick: () => {
						setIsOpen(!isOpen);
					},
					onMouseOver: () => {
						showOnHover && setIsOpen(true);
					},
					type: "button",
					disabled: disabled,
					...getReferenceProps()
				}}
			>
				{CustomDropdownTrigger ? (
					<span className="">{CustomDropdownTrigger}</span>
				) : (
					<>
						<span className="pl-1">{label}</span>
						<DynamicIcon
							icon="IconChevronDown"
							className={cn(defaultClassNames.iconClassname, iconClassname)}
						/>
					</>
				)}
			</button>

			{isMounted && items.length > 0 && isOpen && (
				<FloatingList
					{...{
						elementsRef: listRef
					}}
				>
					<FloatingPortal>
						<FloatingFocusManager context={context} modal={true}>
							<div
								{...getFloatingProps()}
								className={cn(defaultClassNames.itemsClassname, itemsClassname)}
								ref={refs.setFloating}
								aria-labelledby={label}
								onMouseLeave={() => {
									showOnHover && setIsOpen(false);
								}}
								style={{
									position: context.strategy,
									top: Math.round(context.y ?? 0),
									left: Math.round(context.x ?? 0),
									width: "max-content",
									maxWidth: "min(calc(100vw - 10px), 25rem)",
									...floatingStyles,
									...transitionStyles
								}}
							>
								{ItemComponents}
								{showFloatingArrow && (
									<FloatingArrow
										ref={arrowRef}
										context={context}
										strokeWidth={1}
										className={cn(
											"fill-white [&>path:first-of-type]:stroke-gray-300 [&>path:last-of-type]:stroke-white"
										)}
									/>
								)}
							</div>
						</FloatingFocusManager>
					</FloatingPortal>
				</FloatingList>
			)}
		</div>
	);
};

export default Dropdown;
