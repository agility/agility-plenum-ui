import React, { FC, Fragment, JSXElementConstructor } from "react"
import { Menu, Transition } from "@headlessui/react"
import { default as cn } from "classnames"
import { DynamicIcons, IconName } from "../../util/DynamicIcons"

export type ItemProp = {
	icon?: IconName
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
	xPosition = "left"
}: DropdownProps): JSX.Element | null => {
	if (!items?.length) return null
	return (
		<Menu as="div" className="relative inline-block text-left ">
			<div>
				<Menu.Button
					className={cn(
						"z-20 flex items-center self-end rounded py-2px outline-purple-500 transition-all focus:ring-purple-500",
						className ? className : "text-gray-400 hover:bg-white hover:text-gray-600"
					)}
				>
					<span className="sr-only">Dropdown Menu</span>
					{label && <span className="pl-1">{label}</span>}
					{IconElement && <IconElement />}
				</Menu.Button>
			</div>

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
						"absolute right-0 mt-2 w-56 origin-bottom-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5",
						" z-20 divide-y divide-gray-100 focus:outline-none",
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
												const anchorStyles = cn(
													"group flex items-center px-4 py-2 text-sm cursor-pointer",
													{ "text-red-500": item.isEmphasized },
													{ "text-gray-900": !item.isEmphasized },
													{ "bg-gray-100 text-gray-900": active },
													{
														"bg-gray-100 text-red-500 hover:text-red-500":
															active && item.isEmphasized
													}
												)
												const iconStyles = cn(
													"mr-3 h-5 w-5",
													{ "text-red-500": item.isEmphasized },
													{
														"text-gray-400 group-hover:text-gray-500":
															!item.isEmphasized
													},
													{ "bg-gray-100 text-gray-900": active },
													{
														"bg-gray-100 text-red-500 group-hover:text-red-500":
															active && item.isEmphasized
													}
												)
												return (
													<a
														onClick={item.onClick}
														className={anchorStyles}
													>
														{item.icon && (
															<DynamicIcons
																className={iconStyles}
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
