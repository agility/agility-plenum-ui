import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../util/DynamicIcons';

export type ItemProp = {
    icon?: IconName;
    label: string;
    url?: string;
    onClick?(): void;
    isEmphasized?: boolean;
};

export interface DropdownProps {
    /** Prop comment */
    items: ItemProp[][];
}

/** Comment */
export const Dropdown: FC<DropdownProps> = ({ items }: DropdownProps): JSX.Element | null => {
    const buttonStyles = cn(
        'bg-gray-100 self-end rounded-full flex items-center text-gray-400 hover:text-gray-600',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'
    );
    const menuStyles = cn(
        'rigin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5',
        'divide-y divide-gray-100 focus:outline-none'
    );
    if (!items?.length) return null;
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={buttonStyles}>
                    <span className="sr-only">Dropdown Menu</span>
                    <DynamicIcons className="h-5 w-5" aria-hidden="true" icon="DotsVerticalIcon" />
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
                <Menu.Items className={menuStyles} slot="">
                    {items.map((itemStack) => {
                        return (
                            <div className="py-1">
                                {itemStack.map((item, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            {({ active }) => {
                                                const anchorStyles = cn(
                                                    'group flex items-center px-4 py-2 text-sm cursor-pointer',
                                                    { 'text-red-500': item.isEmphasized },
                                                    { 'text-gray-900': !item.isEmphasized },
                                                    { 'bg-gray-100 text-gray-900': active },
                                                    {
                                                        'bg-gray-100 text-red-500 hover:text-red-500':
                                                            active && item.isEmphasized
                                                    }
                                                );
                                                const iconStyles = cn(
                                                    'mr-3 h-5 w-5',
                                                    { 'text-red-500': item.isEmphasized },
                                                    {
                                                        'text-gray-400 group-hover:text-gray-500':
                                                            !item.isEmphasized
                                                    },
                                                    { 'bg-gray-100 text-gray-900': active },
                                                    {
                                                        'bg-gray-100 text-red-500 group-hover:text-red-500':
                                                            active && item.isEmphasized
                                                    }
                                                );
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
                                                );
                                            }}
                                        </Menu.Item>
                                    );
                                })}
                            </div>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
