import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import InputLabel from "@/stories/molecules/inputs/InputLabel";
import { DynamicIcon } from "@/stories/atoms/icons/DynamicIcon";
import { useId } from "@/utils/useId";
import { default as cn } from "classnames";
import {
	Combobox as HeadlessCombobox,
	ComboboxInput,
	ComboboxButton,
	ComboboxOptions,
	ComboboxOption
} from "@headlessui/react";
import { Paragraph } from "@/stories/atoms/Typography/Paragraph";

export interface ISimpleSelectOptions {
	label: string;
	value: string;
	emoji?: string;
	description?: string;
}

export interface ISelectProps {
	/** Label */
	label?: string;
	/** Select ID prop */
	id?: string;
	/** Select name prop */
	name?: string;
	/** List of options to display in the select menu */
	options: ISimpleSelectOptions[];
	/** Called with the selected option's value string */
	onChange?(value: string): void;
	/** Select disabled state */
	isDisabled?: boolean;
	/** Select error state */
	isError?: boolean;
	/** Select required state */
	isRequired?: boolean;
	value?: string;
	className?: string;
	onFocus?: () => void;
	onBlur?: () => void;
	message?: string;
	inputRef?: React.RefObject<HTMLInputElement>;
	placeholder?: string;
	dropdownMaxHeight?: number;
}

const Select: React.FC<ISelectProps> = ({
	label,
	id,
	name,
	options,
	onChange,
	isDisabled,
	isError,
	isRequired,
	value,
	className,
	onFocus,
	onBlur,
	message,
	inputRef,
	placeholder = "Select",
	dropdownMaxHeight = 240
}) => {
	const uniqueID = useId();
	if (!id) id = `select-${uniqueID}`;
	if (!name) name = id;

	const findOption = (val?: string) => options.find((o) => o.value === val) ?? null;

	const [selectedOption, setSelectedOption] = useState<ISimpleSelectOptions | null>(findOption(value));

	useEffect(() => {
		setSelectedOption(findOption(value));
	}, [value]);

	const handleChange = (option: ISimpleSelectOptions | null) => {
		setSelectedOption(option);
		if (option && typeof onChange === "function") {
			onChange(option.value);
		}
	};

	const containerRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState<number | undefined>();

	useLayoutEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const wrapperStyle = cn(className, "w-full", "group", { "opacity-50 pointer-events-none": isDisabled });

	return (
		<div className={wrapperStyle}>
			{label && <InputLabel id={`${id}-label`} label={label} isRequired={isRequired} />}

			<HeadlessCombobox value={selectedOption} onChange={handleChange} disabled={isDisabled} immediate by="value">
				<div ref={containerRef} className="relative w-full">
					<div
						className={cn(
							"relative w-full cursor-default overflow-hidden rounded border bg-white text-left shadow-sm",
							"focus-within:border-primary-800 focus-within:ring-1 focus-within:ring-primary-800",
							{ "border-red-500": isError, "border-gray-300": !isError }
						)}
					>
						<ComboboxInput
							id={id}
							name={name}
							ref={inputRef}
							readOnly
							displayValue={(option: ISimpleSelectOptions | null) => (option ? option.label : "")}
							placeholder={placeholder}
							onFocus={onFocus}
							onBlur={onBlur}
							className={cn(
								"w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-700",
								"placeholder:text-gray-400",
								"focus:outline-none focus:ring-0",
								"bg-transparent cursor-default"
							)}
						/>

						<ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-3">
							{({ open }) => (
								<DynamicIcon
									icon="IconChevronDown"
									className={cn("h-4 w-4 text-gray-400 transition-transform", { "rotate-180": open })}
									aria-hidden="true"
								/>
							)}
						</ComboboxButton>
					</div>

					<ComboboxOptions
						anchor="bottom start"
						style={
							{
								"--anchor-max-height": `${dropdownMaxHeight}px`,
								minWidth: containerWidth
							} as React.CSSProperties
						}
						className={cn(
							"z-[9999] overflow-auto rounded bg-white py-1",
							"text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
							"[--anchor-gap:8px]"
						)}
					>
						{options.map((option) => (
							<ComboboxOption
								key={option.value}
								value={option}
								className={({ focus }) =>
									cn(
										"relative cursor-default select-none mx-xxsm rounded",
										focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
									)
								}
							>
								{({ selected }) => (
									<div className="py-xxsm px-sm flex items-center gap-xsm">
										<span>{option.label}</span>
										{option.description ? (
											<span className="text-neutral-500 font-normal">{option.description}</span>
										) : null}
									</div>
								)}
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</div>

				{message && (
					<Paragraph size="md" className={isError ? "text-red-600" : "text-gray-500"}>
						{message}
					</Paragraph>
				)}
			</HeadlessCombobox>
		</div>
	);
};

export default Select;
