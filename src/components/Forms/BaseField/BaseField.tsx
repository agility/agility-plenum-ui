import React, { forwardRef } from 'react';
import { default as cn } from 'classnames';

export type Type =
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | 'currency';

export interface BaseFieldProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id: string;
    /** Input Name */
    name: string;
    /** placeholder for the input */
    placeholder?: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** Set default value */
    defaultValue?: string;
    /** Max length of input character  */
    maxLength?: number;
    /** Input style classes  */
    inputStyles?: string;
    /** Callback on change */
    onChange?(value: string): void;
    /** Callback on onFocus */
    onFocus?(): void;
    /** Callback on onBlur */
    onBlur?(): void;
    /** Callback to get the value for the immediate parent component */
    onValueChange?(value: string): void;
}
/** default input styles */
const defaultStyles =
    'border py-2 px-3 rounded-md text-sm leading-5 font-normal w-full border-gray-300 shadow-sm';
/** Base input field component */
const BaseField = (
    {
        onFocus,
        onBlur,
        id,
        name,
        type,
        defaultValue,
        isDisabled,
        maxLength = 100,
        placeholder,
        inputStyles = defaultStyles,
        onChange,
        onValueChange
    }: BaseFieldProps,
    ref: React.LegacyRef<HTMLInputElement>
) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        onChange && onChange(targetValue);
        onValueChange && onValueChange(targetValue);
    };

    const handleFocus = () => {
        onFocus && onFocus();
    };

    const handleBlur = () => {
        onBlur && onBlur();
    };

    /** Extend styles */
    const scopedtyles = cn(inputStyles, {
        'opacity-50': isDisabled
    });

    return (
        <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
                handleChange(e);
            }}
            placeholder={placeholder}
            ref={ref}
            type={type}
            name={name}
            id={id}
            className={scopedtyles}
            disabled={isDisabled}
            defaultValue={defaultValue}
            maxLength={maxLength}
            autoComplete="off"
        />
    );
};

const _BaseField = forwardRef<HTMLInputElement, BaseFieldProps>(BaseField);
export { _BaseField as BaseField };
