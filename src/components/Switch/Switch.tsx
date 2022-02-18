import React, { FC, useEffect, useState } from 'react';
import { default as cn } from 'classnames';
import { Switch as HeadlessUISwitch } from '@headlessui/react';

export interface SwitchProps {
    /** onChange callback */
    onChange(value:boolean): void
}

/** Comment */
export const Switch: FC<SwitchProps> = ({ onChange }: SwitchProps) => {
    const [enabled, setEnabled] = useState<boolean>(false);
    useEffect(() => {
        onChange && onChange(enabled);
    },[enabled])

    const switchStyles = cn(
        'relative inline-flex flex-shrink-0 h-[38px] w-[74px]',
        'border-2 border-transparent rounded-full cursor-pointer',
        'transition-colors ease-in-out duration-200 focus:outline-none',
        'focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        { 'bg-purple-600': enabled },
        { 'bg-gray-200': !enabled }
    );
    // the circular button inside the switch
    const toggleStyles = cn(
        'pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white',
        'shadow-lg transform ring-0 transition ease-in-out duration-200',
        { 'translate-x-9': enabled },
        { 'translate-x-0': !enabled }
    );

    return (
        <div className="py-16 text-center">
            <HeadlessUISwitch checked={enabled} onChange={setEnabled} className={switchStyles}>
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={toggleStyles}
                />
            </HeadlessUISwitch>
        </div>
    );
};
