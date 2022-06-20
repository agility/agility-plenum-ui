import React, { FC, useEffect, useState } from "react"
import { default as cn } from "classnames"
import { Switch as HeadlessUISwitch } from "@headlessui/react"

export interface SwitchProps {
	/** onChange callback */
	onChange(value: boolean): void
	/** default state */
	defaultValue?: boolean
	/** size state */
	size?: "sm" | "md" | "lg"
}

/** Comment */
export const Switch: FC<SwitchProps> = ({
	defaultValue = false,
	onChange,
	size = "md"
}: SwitchProps) => {
	const [enabled, setEnabled] = useState<boolean>(defaultValue)
	useEffect(() => {
		onChange && onChange(enabled)
	}, [enabled])

	const switchStyles = cn(
		"relative inline-flex flex-shrink-0",
		"border-2 border-transparent rounded-full cursor-pointer",
		"transition-colors ease-in-out duration-200 focus:outline-none",
		"focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75",
		{ "bg-purple-600": enabled },
		{ "bg-gray-200": !enabled },
		{ "h-[38px] w-[74px]": size === "lg" },
		{ "h-[28px] w-[64px]": size === "md" },
		{ "h-[18px] w-[34px]": size === "sm" }
	)
	// the circular button inside the switch
	const toggleStyles = cn(
		"pointer-events-none inline-block rounded-full bg-white",
		"shadow-lg transform ring-0 transition ease-in-out duration-200",
		{ "translate-x-9": enabled },
		{ "translate-x-0": !enabled },
		{ "h-[34px] w-[34px]": size === "lg" },
		{ "h-[24px] w-[24px]": size === "md" },
		{ "h-[14px] w-[14px] translate-x-4": size === "sm" && enabled },
		{ "h-[14px] w-[14px] translate-x-0": size === "sm" && !enabled }
	)

	return (
		<div className="text-center">
			<HeadlessUISwitch checked={enabled} onChange={setEnabled} className={switchStyles}>
				<span className="sr-only">Use setting</span>
				<span aria-hidden="true" className={toggleStyles} />
			</HeadlessUISwitch>
		</div>
	)
}
