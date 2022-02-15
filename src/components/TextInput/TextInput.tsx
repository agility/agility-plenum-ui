import React, { FC, useEffect, useRef, useState } from 'react';
import { default as cn } from 'classnames';

import '../../tailwind.css';
import { InputCounter } from '../InputCounter';
import { BaseField } from "../BaseField";

type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'currency';

export interface TextInputProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id: string;
    /** Input Name */
    name: string;
    /** Label for the input */
    label: string;
    /** Force the focus state on the input */
    isFocused?: boolean;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Set default value */
    defaultValue?: string;
    /** Message shown under the text field */
    message?: string;
    /** Input character counter */
    showCounter?: boolean;
    /** Max length of input character  */
    maxLength?: number;
    /** Callback on change */
    onChange?(value: string): void;
}

export const TextInput: FC<TextInputProps> = ({ label, isFocused, isError, id, name, isRequired, type, defaultValue, isDisabled, message, showCounter, maxLength = 100 , onChange }: TextInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused));
    const [isActive, setIsActive] = useState<boolean>(false);
    const [value, setValue] = useState<string | null | undefined>(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);

    // set force focus
    useEffect(() => {
        const input = inputRef.current;
        if (!input || isFocus === undefined || isFocused === undefined || isDisabled) return;
        if (isFocus || isFocused) {
            input.focus();
            setIsActive(true);
        } else {
            input.blur();
        }
    }, [isFocus, isFocused]);

    // set label as active if default value is set
    useEffect(() => {
        const input = inputRef.current;
        if (!input || defaultValue === undefined || defaultValue === '') return;
        setIsActive(true);
    }, [defaultValue]);

    const handleInputFocus = (): void => {
        setIsFocus(true);
    };

    const handleInputBlur = (): void => {
        const input = inputRef.current;
        setIsFocus(false);
        setIsActive(!(input && input.value === ''));
    };

    const handleLabelClick = (): void => {
        setIsFocus(() => {
            if (!isFocus && !isDisabled) return true;
            return isFocus;
        });
    };

    const inputStyles = cn(
        'border py-2 px-3 rounded-md text-sm leading-5 font-normal w-full',
        {
            'border-gray-300 shadow-sm': !isFocus
        },
        {
            'focus:ring-indigo-500 border-indigo-500 outline-indigo-500 shadow-none': isFocus
        },
        {
            'focus:ring-red-500 border-red-500 outline-red-500 shadow-none': isError
        }
    );
    const labelStyles = cn(
        'block inline-block font-medium ml-2 relative transition-all',
        {
            'text-sm text-gray-400 px-2 top-9': !isActive
        },
        {
            'text-xs text-gray-700 px-1 top-4 bg-white': isActive
        },
        {
            'text-xs text-red-500 px-1 top-4 bg-white': isError
        },
        {
            'z-10 text-gray-700/[.5]': isDisabled
        },
    );

    const discriptionStyles = cn('text-sm mt-1 block', { 'text-gray-500': !isError }, {'text-red-500': isError});

    return (
        <div>
            <label htmlFor="email" className={labelStyles} onClick={handleLabelClick}>
                {label}
                {isRequired && <span className="text-red-500"> *</span>}
            </label>
            <div className="mt-1">
                <BaseField
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={onChange}
                    onValueChange={setValue}
                    ref={inputRef}
                    type={type}
                    name={name}
                    id={id}
                    inputStyles={inputStyles}
                    isDisabled={isDisabled}
                    defaultValue={defaultValue}
                    maxLength={maxLength}
                />
                <div className="flex flex-row">
                    <div className="grow">{message && <span className={discriptionStyles}>{message}</span>}</div>
                    <div className="shrink-0">{showCounter && <InputCounter current={Number(value?.length)} limit={maxLength} />}</div>
                </div>
            </div>
        </div>
    );
};
