import React, { FC, useState, useEffect } from 'react';
import { default as cn } from 'classnames';
import { Combobox as HeadlessUICombobox } from '@headlessui/react';
import { DynamicIcons } from '../../util/DynamicIcons';

export type ComboboxItemProps = {
    value: string;
};

export interface ComboboxProps {
    /** Label */
    label?: string;
    /** Array of items to display */
    items: ComboboxItemProps[];
    /** Placeholder */
    placeholder?: string;
    /** Callback to trigger on change */
    onChange?(value: string): void;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
/** Comment */
export const Combobox: FC<ComboboxProps> = ({
    label,
    items,
    onChange,
    placeholder
}: ComboboxProps) => {
    const [query, setQuery] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<string | undefined>();

    useEffect(() => {
        typeof onChange === 'function' && selectedItem !== undefined && onChange(selectedItem);
    }, [selectedItem]);

    const filteredItems =
        query === ''
            ? items
            : items.filter((item) => {
                  return item.value.toLowerCase().includes(query.toLowerCase());
              });
    const inputStyles = cn(
        'w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm sm:text-sm',
        'focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500'
    );
    const labelStyles = cn('block text-sm font-medium text-gray-700');
    const buttonStyles = cn(
        'absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'
    );
    const optionStyles = cn(
        'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
    );
    return (
        <HeadlessUICombobox as="div" value={selectedItem} onChange={setSelectedItem}>
            {label && (
                <HeadlessUICombobox.Label className={labelStyles}>{label}</HeadlessUICombobox.Label>
            )}
            <div className="relative mt-1">
                <HeadlessUICombobox.Input
                    className={inputStyles}
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(item: ComboboxItemProps) => item.value}
                    placeholder={placeholder}
                />
                <HeadlessUICombobox.Button className={buttonStyles}>
                    <DynamicIcons
                        icon="SelectorIcon"
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </HeadlessUICombobox.Button>

                {filteredItems.length > 0 && (
                    <HeadlessUICombobox.Options className={optionStyles}>
                        {filteredItems.map((item, index) => (
                            <HeadlessUICombobox.Option
                                key={index}
                                value={item}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-purple-600 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <span
                                            className={classNames(
                                                'block truncate',
                                                selected ? 'font-semibold' : ''
                                            )}
                                        >
                                            {item.value}
                                        </span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? 'text-white' : 'text-purple-600'
                                                )}
                                            >
                                                <DynamicIcons
                                                    icon="CheckIcon"
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        )}
                                    </>
                                )}
                            </HeadlessUICombobox.Option>
                        ))}
                    </HeadlessUICombobox.Options>
                )}
            </div>
        </HeadlessUICombobox>
    );
};
