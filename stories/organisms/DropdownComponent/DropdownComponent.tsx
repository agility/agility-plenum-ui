import React, { HTMLAttributes, useState } from "react"
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
	useTransitionStyles,
	Placement
} from "@floating-ui/react"

import { ClassNameWithAutocomplete } from "utils/types"
import { DynamicIcon, IDynamicIconProps, UnifiedIconName } from "@/stories/atoms/icons"

export interface IItemProp extends HTMLAttributes<HTMLButtonElement> {
	icon?: IDynamicIconProps | UnifiedIconName
	iconPosition?: "trailing" | "leading"
	label: string
	onClick?(): void
	isEmphasized?: boolean
	key: React.Key
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
}
export const defaultClassNames = {
	groupClassname: "flex inline-block text-left",
	itemsClassname:
		"mt-2 origin-bottom-right rounded bg-white shadow-lg z-20 divide-y divide-gray-100  border border-gray-300  ",
	itemClassname:
		"group flex font-muli  cursor-pointer items-center px-4 py-2 text-sm transition-all hover:bg-gray-100 hover:text-gray-900 justify-between gap-4 ",
	activeItemClassname: "block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900",
	buttonClassname:
		"py-[2px] z-20 flex items-center  rounded outline-purple-500 transition-all text-gray-400 hover:text-gray-600 ",
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
	...props
}: IDropdownProps): JSX.Element | null => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeItem, setActiveItem] = useState<React.Key | null>(null)

	// Floating UI logic
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		middleware: [
			offset(offsetOptions ?? 10),
			autoPlacement({
				allowedPlacements: [placement, "bottom-start", "bottom-end", "bottom"]
			}),
			shift({ rootBoundary: "document" })
		],
		whileElementsMounted: autoUpdate
	})
	const click = useClick(context)
	const dismiss = useDismiss(context)
	const role = useRole(context)
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: {
			open: 200,
			close: 200
		},
		initial: {
			opacity: 0
		},
		open: {
			opacity: 1
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
					...getReferenceProps()
				}}
			>
				{CustomDropdownTrigger ? (
					<span className="">{CustomDropdownTrigger}</span>
				) : (
					<>
						<span className="pl-1">{label}</span>
						<DynamicIcon icon="ChevronDownIcon" className={cn(defaultClassNames.iconClassname, iconClassname)} />
					</>
				)}
			</button>

			{isMounted && items.length > 0 && isOpen && (
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
							}}
						>

							<ul id={`${id}-list`} role="listbox" style={{...transitionStyles}}>
								{items.map((itemStack, idx) => {
									return (
										<React.Fragment key={`${idx}-list-${id}`}>
											{itemStack.map(
												({
													onClick,
													label,
													key,
													isEmphasized,
													icon,
													iconPosition,
													...rest
												}, idx) => {
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
															"bg-gray-100 text-red-500 hover:text-red-500":
															active && isEmphasized
														})
														return (
															<li key={`${key}-${idx}`}>
															<button
																{...{
																	onClick: () => {
																		setActiveItem(key)
																		onClick && onClick()
																	},
																	key: key,
																	className: cn(itemClass, "w-full"),
																	...rest
																}}
															>
																<div className={cn(defaultClassNames.iconSpacingClassname, iconSpacingClassname)}>
																	{icon &&
																		(iconPosition === "leading" ||
																		iconPosition === undefined) &&
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
																	<div className="whitespace-nowrap">{label}</div>
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
														</li>
													)
												}
											)}
										</React.Fragment>
									)
								})}
							</ul>
						</div>
					</FloatingFocusManager>
				</FloatingPortal>
			)}
		</div>
	)
}

export default Dropdown
