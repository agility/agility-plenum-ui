import React, { useState, useEffect } from "react"
import { default as cn } from "classnames"
import { Combobox as HeadlessUICombobox } from "@headlessui/react"
import InputLabel from "@/stories/molecules/inputs/InputLabel"
import { DynamicIcon } from "@/stories/atoms/icons"

export interface IComboboxProps<T extends Record<string, unknown>> {
	/** Label */
	label?: string
	/** ID */
	id: string
	/** Array of items to display */
	items: T[]
	/** the item property to use as the key */
	keyProperty: string

	/** the item property to use as the display */
	displayProperty: string
	/** Placeholder */
	placeholder?: string
	/** Callback to trigger on change */
	onChange?(value: T | undefined): void
	/** Select disabled state */
	isDisabled?: boolean
	/** Select error state */
	isError?: boolean
	/** Select required state */
	isRequired?: boolean
	/** Message shown under field */
	message?: string

	displayValue?: string

	/**
	 * Whether this item is nullable or not.
	 *
	 * @type {boolean}
	 * @memberof ComboboxProps
	 */
	nullable?: boolean
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

const Combobox = <T extends Record<string, unknown>>({
	label,
	items,
	displayProperty,
	displayValue,
	keyProperty,
	onChange,
	placeholder,
	message,
	isDisabled,
	isError,
	isRequired,
	id,
	nullable
}: IComboboxProps<T>) => {
	const [query, setQuery] = useState<string>("")
	const [selectedItem, setSelectedItem] = useState<T | undefined>()

	const onChangeValue = (value: T | undefined) => {
		if (value && selectedItem && value[keyProperty] === selectedItem[keyProperty]) {
			setSelectedItem(undefined)
		} else {
			setSelectedItem(value)
		}
	}

	useEffect(() => {
		if (displayValue) {
			const dv = items.find((i) => i[displayProperty] === displayValue)
			setSelectedItem(dv)
		}
	}, [displayValue])

	useEffect(() => {
		typeof onChange === "function" && onChange(selectedItem)
	}, [selectedItem])

	const filteredItems =
		query === ""
			? items
			: items.filter((item) => {
					return `${item[displayProperty]}`.toLowerCase().includes(query.toLowerCase())
			  })
	const labelStyles = cn("block text-sm font-medium text-gray-700")
	const buttonStyles = cn("absolute inset-y-0 right-0 flex items-center rounded-r px-2 focus:outline-none")
	const optionStyles = cn(
		"absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
	)
	return (
		<HeadlessUICombobox
			as="div"
			value={selectedItem}
			onChange={(e: T | undefined) => onChangeValue(e)}
			disabled={isDisabled}
			nullable={nullable ? undefined : false}
		>
			{label && (
				<HeadlessUICombobox.Label className={labelStyles}>
					<InputLabel
						isPlaceholder
						isActive
						label={label}
						isRequired={isRequired}
						id={id}
						isError={isError}
						isDisabled={isDisabled}
					/>
				</HeadlessUICombobox.Label>
			)}
			<div className="relative">
				<div className="relative">
					<HeadlessUICombobox.Input
						className={`w-full rounded border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm ${
							isError ? "border-red-500" : ""
						}`}
						onChange={(event) => setQuery(event.target.value)}
						displayValue={(item: Record<string, unknown>) => `${item ? item[displayProperty] : ""}`}
						placeholder={placeholder}
					/>
					{selectedItem && nullable && (
						<button
							className="absolute right-8 top-[1px] h-9 w-5 text-gray-400 hover:text-gray-500"
							onClick={() => setSelectedItem(undefined)}
						>
							<DynamicIcon icon="IconX" className="h-4 w-4 " aria-hidden="true" />
						</button>
					)}
				</div>
				<HeadlessUICombobox.Button className={buttonStyles}>
					<DynamicIcon icon="IconSelector" className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</HeadlessUICombobox.Button>

				{filteredItems.length > 0 && (
					<HeadlessUICombobox.Options className={optionStyles}>
						{filteredItems.map((item, index) => (
							<HeadlessUICombobox.Option
								key={`${item[keyProperty]}-${index}`}
								value={item}
								className={({ active }) =>
									classNames(
										"relative cursor-default select-none py-2 pl-3 pr-9",
										active ? "bg-purple-600 text-white" : "text-gray-900"
									)
								}
							>
								{({ active, selected }) => (
									<>
										<span className={classNames("block truncate", selected ? "font-semibold" : "")}>
											{`${item[displayProperty]}`}
										</span>

										{selected && (
											<span
												className={classNames(
													"absolute inset-y-0 right-0 flex items-center pr-4",
													active ? "text-white" : "text-purple-600"
												)}
											>
												<DynamicIcon icon="IconCheck" className="h-5 w-5" aria-hidden="true" />
											</span>
										)}
									</>
								)}
							</HeadlessUICombobox.Option>
						))}
					</HeadlessUICombobox.Options>
				)}
			</div>
			<div className="grow">
				{message && (
					<span className={`mt-1 block text-sm ${isError ? `text-red-500` : `text-gray-500`}`}>
						{message}
					</span>
				)}
			</div>
		</HeadlessUICombobox>
	)
}
export default Combobox
