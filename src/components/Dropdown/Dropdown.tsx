import React, { FC, Fragment, JSXElementConstructor } from "react"
import { Menu, Transition } from "@headlessui/react"
import { default as cn } from "classnames"
import { DynamicIcons, IconName } from "../../util/DynamicIcons"

export type ItemProp = {
	icon?: IconName
	iconObj?: React.ReactNode
	label: string
	url?: string
	onClick?(): void
	isEmphasized?: boolean
}

export interface DropdownProps {
	/** Prop comment */
	items: ItemProp[][]
	IconElement: JSXElementConstructor<unknown>
	label?: string
	className?: string
	menuClassName?: string
	itemsClassName?: string
	itemClassName?: string
	activeItemClassName?:string
	yPosition?: "top" | "bottom"
	xPosition?: "left" | "right"
}

/** Comment */
export const Dropdown: FC<DropdownProps> = ({
	items,
	IconElement,
	label,
	className,
	yPosition = "bottom",
	xPosition = "left",
	menuClassName,
	itemsClassName,
	itemClassName,
	activeItemClassName
}: DropdownProps): JSX.Element | null => {
	if (!items?.length) return null
	return (
		<Menu
			as="div"
			className={cn("relative inline-block text-left", menuClassName)}
		>
			<Menu.Button
				className={cn(
					"py-2px z-20 flex items-center self-end rounded outline-purple-500 transition-all focus:ring-purple-500",
					className
						? className
						: "text-gray-400 hover:bg-white hover:text-gray-600"
				)}
			>
				<span className="sr-only">Dropdown Menu</span>
				{label && <span className="pl-1">{label}</span>}
				{IconElement && <IconElement />}
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					className={cn(
						"absolute right-0 mt-2 w-56 origin-bottom-right rounded bg-white shadow-lg",
						" z-20 divide-y divide-gray-100 focus:outline-none border border-gray-300",
						itemsClassName,
						yPosition === "top" ? "bottom-10" : "",
						xPosition === "right" ? "right-0" : "left-0"
					)}
					slot=""
				>
					{items.map((itemStack, i) => {
						return (
							<div className="py-1" key={i}>
								{itemStack.map((item, index) => {
									return (
										<Menu.Item key={index}>
											{({ active }) => {
												return (
													<a
														onClick={item.onClick}
														className={cn(
															"group flex cursor-pointer items-center px-4 py-2 text-sm transition-all",
															{
																"text-red-500":
																	item.isEmphasized
															},
															{
																"text-gray-900":
																	!item.isEmphasized
															},
															{
																"bg-gray-100 text-gray-900":
																	active
															},
															active ? activeItemClassName : "",
															{
																"bg-gray-100 text-red-500 hover:text-red-500":
																	active &&
																	item.isEmphasized
															},
															itemClassName
														)}
													>
														{item.iconObj && <>{ item.iconObj }</>}
														{item.icon && (
															<DynamicIcons
																className={cn(
																	"mr-3 h-5 w-5 opacity-60 transition-all group-hover:opacity-100",
																	{
																		"text-red-500":
																			item.isEmphasized
																	},
																	// {
																	// 	"text-gray-400 group-hover:text-gray-500":
																	// 		!item.isEmphasized && 1===2
																	// },
																	// {
																	// 	"bg-gray-100 text-gray-900":
																	// 		active
																	// },
																	{
																		"bg-gray-100 text-red-500 group-hover:text-red-500":
																			active &&
																			item.isEmphasized
																	}
																)}
																aria-hidden="true"
																icon={item.icon}
															/>
														)}
														{item.label}
													</a>
												)
											}}
										</Menu.Item>
									)
								})}
							</div>
						)
					})}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
