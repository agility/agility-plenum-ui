import React, { useState, useRef, useEffect } from "react";

export interface ISelectSearchOption {
	value: string;
	label: string;
}

export interface ISelectSearchProps {
	options: ISelectSearchOption[];
	placeholder?: string;
	label?: string;
	onChange: (value: string) => void;
}

const SelectSearch: React.FC<ISelectSearchProps> = ({ options, placeholder = "Select...", label, onChange }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);

	const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleClear = () => {
		setSearchTerm("");
		onChange("");
		setHighlightIndex(-1);
	};

	const handleLabelClick = () => {
		inputRef.current?.focus();
		setIsOpen(true);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!isOpen && e.key === "ArrowDown") {
			setIsOpen(true);
			setHighlightIndex(0);
			return;
		}

		switch (e.key) {
			case "ArrowDown":
				setHighlightIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
				break;
			case "ArrowUp":
				setHighlightIndex((prev) => (prev > 0 ? prev - 1 : prev));
				break;
			case "Enter":
				if (highlightIndex >= 0 && filteredOptions[highlightIndex]) {
					const selected = filteredOptions[highlightIndex];
					onChange(selected.value);
					setSearchTerm(selected.label);
					setIsOpen(false);
				}
				break;
			case "Escape":
				setIsOpen(false);
				break;
		}
	};

	useEffect(() => {
		if (!isOpen) setHighlightIndex(-1);
	}, [isOpen]);

	return (
		<div className="select-search relative" role="combobox" aria-expanded={isOpen}>
			{label && (
				<label htmlFor="select-search-input" className="block mb-2 cursor-pointer" onClick={handleLabelClick}>
					{label}
				</label>
			)}
			<div className="flex items-center gap-2">
				<input
					id="select-search-input"
					ref={inputRef}
					type="text"
					placeholder={placeholder}
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setIsOpen(true);
					}}
					onFocus={() => setIsOpen(true)}
					onKeyDown={handleKeyDown}
					className="border rounded px-3 py-2 w-full"
					aria-controls="select-search-listbox"
				/>
				{searchTerm && (
					<button
						type="button"
						onClick={handleClear}
						className="text-gray-500 hover:text-black"
						aria-label="Clear selection"
					>
						✕
					</button>
				)}
			</div>

			{isOpen && (
				<ul
					id="select-search-listbox"
					role="listbox"
					className="absolute w-full border rounded mt-1 max-h-48 overflow-auto bg-white shadow z-10"
				>
					{filteredOptions.length > 0 ? (
						filteredOptions.map((opt, index) => (
							<li
								key={opt.value}
								role="option"
								aria-selected={highlightIndex === index}
								className={`px-3 py-2 cursor-pointer ${
									highlightIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
								}`}
								onClick={() => {
									onChange(opt.value);
									setSearchTerm(opt.label);
									setIsOpen(false);
								}}
							>
								{opt.label}
							</li>
						))
					) : (
						<li className="px-3 py-2 text-gray-500">No results</li>
					)}
				</ul>
			)}
		</div>
	);
};

export default SelectSearch;
