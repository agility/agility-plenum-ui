import React, { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react"
import { default as cn } from "classnames"
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
} from "@floating-ui/react"

import { ClassNameWithAutocomplete } from "utils/types"
import { DynamicIcon, IDynamicIconProps, UnifiedIconName } from "@/stories/atoms/icons"
import { list } from "postcss"

export interface IItemProp {
	//Don't think this needs to extend HtmlButton... extends HTMLAttributes<HTMLButtonElement> {
	icon?: IDynamicIconProps
	iconPosition?: "trailing" | "leading"
	label: string | JSX.Element
	onClick?(): void
	isEmphasized?: boolean
	key: React.Key
	iconObj?: JSX.Element
}

export interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
	items: IItemProp[][]
	label: string
	CustomDropdownTrigger?: React.ReactNode
	id: string
	groupClassname?: ClassNameWithAutocomplete
	itemsClassname?: ClassNameWithAutocomplete
	itemClassname?: ClassNameWithAutocomplete
	activeItemClassname?: ClassNameWithAutocomplete
	buttonClassname?: ClassNameWithAutocomplete
	iconClassname?: ClassNameWithAutocomplete
	iconSpacingClassname?: ClassNameWithAutocomplete
	placement?: Placement
	offsetOptions?: Partial<{
		mainAxis: number
		crossAxis: number
		alignmentAxis: number | null
	}>
	disabled?: boolean
	onFocus?: () => void
	onBlur?: () => void
	showFloatingArrow?: boolean
}
export const defaultClassNames = {
	groupClassname: "flex inline-block text-left",
	itemsClassname: "mt-2 origin-bottom-right rounded bg-white shadow-lg z-[99999] border border-gray-300  ",
	itemClassname:
		"group flex font-sans  cursor-pointer items-center px-4 py-2 text-sm transition-all hover:bg-gray-100 hover:text-gray-900 justify-between gap-4 ",
	activeItemClassname: "block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900",
	buttonClassname:
		"py-[2px] flex items-center  rounded outline-purple-500 transition-all text-gray-400 hover:text-gray-600 ",
	iconClassname: "ml-1 h-5 w-6",
	iconSpacingClassname: "flex items-center gap-x-4"
}

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
	CustomDropdownTrigger,
	placement = "bottom-start",
	offsetOptions,
	disabled,
	onFocus,
	onBlur,
	showFloatingArrow = false,
	...props
}: IDropdownProps): JSX.Element | null => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeItem, setActiveItem] = useState<React.Key | null>(null)
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const listRef = useRef<(HTMLButtonElement | null)[]>([])
	const arrowRef = React.useRef(null)

	// Floating UI logic
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: (bool: boolean) => {
			listRef.current = []
			setActiveIndex(null)
			setIsOpen(bool)
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
	})
	const click = useClick(context)
	const dismiss = useDismiss(context)
	const role = useRole(context)
	const listNavigation = useListNavigation(context, {
		listRef,
		activeIndex,
		onNavigate: (index: number | null) => {
			if (index !== null && listRef.current[index]) {
				setActiveIndex(index)
				listRef.current[index]?.focus()
			}
		}
	})

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		click,
		dismiss,
		role,
		listNavigation
	])

	useEffect(() => {
		if (isOpen) {
			onFocus && onFocus()
		} else {
			onBlur && onBlur()
		}
	}, [isOpen, onBlur, onFocus])

	const ItemComponents = useMemo(
		() =>
			items.map((itemStack, stackIndex) => {
				return itemStack.map((item, itemIndex) => {
					const { key, label, icon, iconObj, iconPosition, isEmphasized, onClick, ...rest } = item
					const active = activeItem && activeItem === key
					const itemClass = cn(
						defaultClassNames.itemClassname,
						itemClassname,
						"group flex cursor-pointer items-center px-4 py-2 text-sm transition-all",
						{
							"text-red-500": isEmphasized
						},
						{
							"text-gray-900": !isEmphasized
						},
						{
							"bg-gray-100 text-gray-900": active
						},
						active ? cn(defaultClassNames.activeItemClassname, activeItemClassname) : "",
						{
							"bg-gray-100 text-red-500 hover:text-red-500": active && isEmphasized
						}
					)
					return (
						<button
							{...{
								key: key,
								id: key.toString(),
								className: cn(
									itemClass,
									//Round the corners of the first item in the first stack and the last item in the last stack
									itemIndex === 0 && stackIndex === 0 && "rounded-tl rounded-tr",
									itemIndex === itemStack.length - 1 &&
										stackIndex === items.length - 1 &&
										"rounded-bl rounded-br",
									//Add dividing line between stacks
									stackIndex !== items.length - 1 &&
										itemIndex === itemStack.length - 1 &&
										"border-b border-b-gray-100",
									"w-full"
								),
								...rest,
								...getItemProps(),
								onClick: () => {
									onClick && onClick()
									setTimeout(() => {
										//hide the dropdown after click
										setIsOpen(false)
									}, 150)
								}
							}}
							ref={(node) => {
								//If the list ref already contains a node with the same id do nothing, otherwise add it
								if (listRef.current.some((item) => item?.id === key)) {
									return
								}
								listRef.current.push(node)
							}}
							key={key}
						>
							<div className={cn(defaultClassNames.iconSpacingClassname, iconSpacingClassname)}>
								{iconObj && (iconPosition === "leading" || iconPosition === undefined) && (
									<>{iconObj}</>
								)}
								{icon &&
									(iconPosition === "leading" || iconPosition === undefined) &&
									(typeof icon === "string" ? (
										<DynamicIcon
											{...{
												icon: icon,
												className: cn(
													{
														"text-red-500": isEmphasized
													},
													"opacity-60 group"
												)
											}}
										/>
									) : (
										<DynamicIcon
											{...{
												...icon,
												className: cn(
													icon.className,
													{
														"text-red-500": isEmphasized
													},
													"opacity-60 group"
												)
											}}
										/>
									))}
								<div className="break-all line-clamp-1">{label}</div>
								{iconObj && iconPosition === "trailing" && <>{iconObj}</>}
								{icon &&
									iconPosition === "trailing" &&
									(typeof icon === "string" ? (
										<DynamicIcon
											{...{
												icon: icon,
												className: cn(
													{
														"text-red-500": isEmphasized
													},
													"opacity-60 group"
												)
											}}
										/>
									) : (
										<DynamicIcon
											{...{
												...icon,
												className: cn(
													icon.className,
													{
														"text-red-500": isEmphasized
													},
													"opacity-60 group"
												)
											}}
										/>
									))}
							</div>
						</button>
					)
				})
			}),
		[activeItem, activeItemClassname, getItemProps, iconSpacingClassname, itemClassname, items]
	)

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
	})
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
						setIsOpen(!isOpen)
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
								{showFloatingArrow && 
									<FloatingArrow ref={arrowRef} context={context} strokeWidth={1} 
									className={cn("fill-white [&>path:first-of-type]:stroke-gray-300 [&>path:last-of-type]:stroke-white")}/>}
							</div>
						</FloatingFocusManager>
					</FloatingPortal>
				</FloatingList>
			)}
		</div>
	)
}

export default Dropdown
