import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import InputLabel from "@/stories/molecules/inputs/InputLabel";
import { DynamicIcon, UnifiedIconName } from "@/stories/atoms/icons/DynamicIcon";
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
import { Label } from "@/stories/atoms/Typography/Label";

export interface ISimpleSelectOptions {
	label: string;
	value: string;
	icon?: UnifiedIconName;
	description?: string;
	caption?: string;
}

interface LabelAction {
	label: string;
	onClick: () => void;
	className?: string;
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
	dropdownMaxWidth?: number;
	labelAction?: LabelAction;
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
	dropdownMaxHeight = 240,
	dropdownMaxWidth = 240,
	labelAction
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
			{(label || labelAction) && (
				<div className="flex items-center justify-between">
					{label && (
						<InputLabel
							id={`${id}-label`}
							label={label}
							isRequired={isRequired}
							noMarginBottom={!!labelAction}
							isActive
						/>
					)}
					{labelAction && (
						<button type="button" onClick={labelAction.onClick}>
							<Label size="sm" className={cn("text-primary-700", labelAction.className)}>
								{labelAction.label}
							</Label>
						</button>
					)}
				</div>
			)}

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
								"--dropdown-max-width": `${dropdownMaxWidth}px`,
								minWidth: Math.max(containerWidth ?? 0, 60)
							} as React.CSSProperties
						}
						className={cn(
							"z-[9999] overflow-auto rounded bg-white py-1",
							"text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
							"[--anchor-gap:8px]",
							"![max-width:var(--dropdown-max-width)]"
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
									<div className="flex justify-between items-center py-xxsm px-sm gap-4">
										<div className="flex flex-col flex-1 min-w-0">
											<div className="flex items-center gap-xsm">
												<Paragraph
													size="md"
													className="text-neutral-700 truncate min-w-0"
													title={option.label}
													onMouseEnter={(e) => {
														const el = e.currentTarget;
														if (el.scrollWidth <= el.clientWidth)
															el.removeAttribute("title");
													}}
													onMouseLeave={(e) => {
														e.currentTarget.setAttribute("title", option.label);
													}}
												>
													{option.label}
												</Paragraph>
												{option.description ? (
													<Paragraph size="md" className="text-neutral-500">
														{option.description}
													</Paragraph>
												) : null}
											</div>
											{option.caption ? (
												<Paragraph size="sm" className="text-neutral-500">
													{option.caption}
												</Paragraph>
											) : null}
										</div>
										{option.icon ? (
											<DynamicIcon
												icon={option.icon}
												className="shrink-0 w-5 h-5 text-neutral-500"
											/>
										) : null}
									</div>
								)}
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</div>

				{message && (
					<Paragraph size="md" className={isError ? "text-red-600" : "text-gray-500 pt-xxsm"}>
						{message}
					</Paragraph>
				)}
			</HeadlessCombobox>
		</div>
	);
};

export default Select;
