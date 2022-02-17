import React, { FC, useEffect, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../../util/DynamicIcons';

import '../../../tailwind.css';
import { InputCounter } from '../InputCounter';
import { BaseField } from '../BaseField';
import { InputSelect } from './InputSelect';

export type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'currency';
export type SelectOptions = {
    label: string;
    value: string;
};

export interface TextInputSelectProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id: string;
    /** Input Name */
    name: string;
    /** Label for the input */
    label?: string;
    /** placeholder for the input */
    placeholder?: string;
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
    isShowCounter?: boolean;
    /** Max length of input character  */
    maxLength?: number;
    /** Select input location  */
    selectLocation?: 'left' | 'right';
    /** Icon within the input field  */
    inlineIcon?: IconName;
    /** List of options to show on the select field  */
    inputOptions?: SelectOptions[];
    /** Callback on base input */
    onChange?(value: string): void;
    /** Callback on input select field */
    onSelectOption?(value: string): void;
}

export const TextInputSelect: FC<TextInputSelectProps> = ({
    label,
    isFocused,
    isError,
    id,
    name,
    isRequired,
    type,
    defaultValue,
    isDisabled,
    message,
    isShowCounter,
    maxLength = 100,
    placeholder,
    inputOptions,
    selectLocation = 'right',
    onChange,
    onSelectOption
}: TextInputSelectProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(Boolean(isFocused));
    const [value, setValue] = useState<string | null | undefined>(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);

    // set force focus
    useEffect(() => {
        const input = inputRef.current;
        if (!input || isFocus === undefined || isFocused === undefined || isDisabled) return;
        if (isFocus || isFocused) {
            input.focus();
        } else {
            input.blur();
        }
    }, [isFocus, isFocused]);

    // set label as active if default value is set
    useEffect(() => {
        const input = inputRef.current;
        if (!input || defaultValue === undefined || defaultValue === '') return;
    }, [defaultValue]);

    const handleInputFocus = (): void => {
        setIsFocus(true);
        // add other focus effects here
    };

    const handleInputBlur = (): void => {
        setIsFocus(false);
        // add other focus effects here
    };

    const inputStyles = cn(
        'border py-2 px-3 rounded-md text-sm leading-5 font-normal w-full border-gray-300 shadow-sm',
        {
            'focus:ring-red-500 border-red-500 outline-red-500 shadow-none': isError
        },
        { 'rounded-none rounded-l-md': selectLocation === 'right' },
        { 'rounded-none rounded-r-md': selectLocation === 'left' }
    );
    const labelStyles = cn('block inline-block font-medium transition-all text-sm text-gray-700 mb-1', {
        'text-red-500 bg-white': isError
    });

    const discriptionStyles = cn('text-sm mt-1 block', { 'text-gray-500': !isError }, { 'text-red-500': isError });

    return (
        <div>
            {label && (
                <label htmlFor={id} className={labelStyles}>
                    {label}
                    {isRequired && <span className="text-red-500"> *</span>}
                </label>
            )}
            <div className="flex">
                <div className="flex-grow focus-within:z-20 relative">
                    {inputOptions?.length && <InputSelect inputOptions={inputOptions} align="left" onSelectOption={onSelectOption} />}
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
                        placeholder={placeholder}
                    />
                    {inputOptions?.length && <InputSelect inputOptions={inputOptions} align={'right'} onSelectOption={onSelectOption} />}
                </div>
            </div>
            <div className="flex flex-row space-x-3">
                <div className="grow">{message && <span className={discriptionStyles}>{message}</span>}</div>
                {isShowCounter && (
                    <div className="shrink-0">
                        <InputCounter current={Number(value?.length)} limit={maxLength} />
                    </div>
                )}
            </div>
        </div>
    );
};
