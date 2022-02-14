import React, { FC, useEffect, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../util/DynamicIcons';

import '../../tailwind.css';
import { InputCounter } from '../InputCounter';

type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'currency';

export interface TextInputAddonProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id: string;
    /** Input Name */
    name: string;
    /** Label for the input */
    label: string;
    /** placeholder for the input */
    placeholder: string;
    /** Force the focus state on the input */
    focused?: boolean;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequire?: boolean;
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
    /** Icon to use in the text field  */
    primaryIcon?: IconName;
    /** Callback on change */
    onChange?(value: string): void;
}

export const TextInputAddon: FC<TextInputAddonProps> = ({
    label,
    focused,
    isError,
    id,
    name,
    isRequire,
    type,
    defaultValue,
    isDisabled,
    message,
    showCounter,
    maxLength = 100,
    placeholder,
    primaryIcon,
    onChange
}: TextInputAddonProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(Boolean(focused));
    const [value, setValue] = useState<string | null | undefined>(defaultValue);
    const [charCount, setCharCount] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // set force focus
    useEffect(() => {
        const input = inputRef.current;
        if (!input || isFocus === undefined || focused === undefined || isDisabled) return;
        if (isFocus || focused) {
            input.focus();
        } else {
            input.blur();
        }
    }, [isFocus, focused]);

    // set label as active if default value is set
    useEffect(() => {
        const input = inputRef.current;
        if (!input || defaultValue === undefined || defaultValue === '') return;
    }, [defaultValue]);

    // set character count on value change
    useEffect(() => {
        setCharCount(Number(value?.length));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        onChange && onChange(e.currentTarget.value);
        setValue(targetValue);
    };

    const handleInputFocus = (): void => {
        setIsFocus(true);
    };

    const handleInputBlur = (): void => {
        setIsFocus(false);
    };

    const handleLabelClick = (): void => {
        setIsFocus(() => {
            if (!isFocus && !isDisabled) return true;
            return isFocus;
        });
    };

    const inputStyles = cn('border py-2 px-3 rounded-md text-sm leading-5 font-normal w-full border-gray-300 shadow-sm pl-10', {
        'focus:ring-red-500 border-red-500 outline-red-500 shadow-none': isError
    });
    const labelStyles = cn('block inline-block font-medium transition-all text-sm text-gray-700', {
        'text-xs text-red-500 px-1 bg-white': isError
    });

    const discriptionStyles = cn('text-sm mt-1 block', { 'text-gray-500': !isError }, { 'text-red-500': isError });

    return (
        <div className={[isDisabled ? 'opacity-50' : 'opacity-100'].join(' ')}>
            <label htmlFor="email" className={labelStyles} onClick={handleLabelClick}>
                {label}
                {isRequire && <span className="text-red-500"> *</span>}
            </label>
            <div className="mt-1 relative">
                {primaryIcon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DynamicIcons icon={primaryIcon} className="h-5 w-5 text-gray-400" outline={false} />
                    </div>
                )}
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder={placeholder}
                    ref={inputRef}
                    type={type}
                    name={name}
                    id={id}
                    className={inputStyles}
                    disabled={isDisabled}
                    defaultValue={defaultValue}
                    maxLength={maxLength}
                />
            </div>
            <div className="flex flex-row">
                <div className="grow">{message && <span className={discriptionStyles}>{message}</span>}</div>
                <div className="shrink-0">{showCounter && <InputCounter current={charCount} limit={maxLength} />}</div>
            </div>
        </div>
    );
};
