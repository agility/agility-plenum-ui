import React, { FC, useEffect, useRef, useState } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../../util/DynamicIcons';

import '../../../tailwind.css';
import { InputCounter } from '../InputCounter';
import { BaseField } from '../BaseField';
import { InputCta } from '../InputCta';

export type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'currency';

export interface TextInputAddonProps {
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
    /** Leading icon displayed within the input  */
    leadIcon?: IconName;
    /** Trailing icon displayed within the input  */
    trailIcon?: IconName;
    /** Trailing label for the input CTA */
    trailLabel?: string;
    /** Leading label for input CTA  */
    leadLabel?: string;
    /** Remove bg and border from CTA  */
    clearCta?: 'left' | 'right' | 'both' | 'none';
    /** Icon within the input field  */
    inlineIcon?: IconName;
    /** Callback on change */
    onChange?(value: string): void;
}

export const TextInputAddon: FC<TextInputAddonProps> = ({
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
    leadIcon,
    trailIcon,
    trailLabel,
    leadLabel,
    clearCta = 'none',
    inlineIcon,
    onChange
}: TextInputAddonProps) => {
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
        { 'pl-10': inlineIcon },
        { 'rounded-none rounded-l-md': (trailIcon || trailLabel) && !(leadIcon || leadLabel) },
        { 'rounded-none rounded-r-md': !(trailIcon || trailLabel) && (leadIcon || leadLabel) },
        { 'rounded-none': (trailIcon || trailLabel) && (leadIcon || leadLabel) }
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
                {(leadIcon || leadLabel) && <InputCta icon={leadIcon} ctaLabel={leadLabel} align="left" isClear={clearCta === 'left' || clearCta === 'both'} />}
                <div className="flex-grow focus-within:z-20 relative">
                    {inlineIcon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DynamicIcons icon={inlineIcon} className="h-5 w-5 text-gray-400" outline={false} />
                        </div>
                    )}
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
                </div>
                {(trailIcon || trailLabel) && <InputCta icon={trailIcon} ctaLabel={trailLabel} align="right" isClear={clearCta === 'right' || clearCta === 'both'} />}
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
