import React, { FC, useEffect, useRef, useState } from "react";
import { default as cn } from "classnames";

import "../../tailwind.css";

type Type =
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "currency";

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
    focused?: boolean;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequire?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Set default value */
    defaultValue?: string;
    /** Callback on change */
    onChange?(value: string): void;
}

export const TextInput: FC<TextInputProps> = ({
    label,
    focused,
    isError,
    id,
    name,
    isRequire,
    type,
    defaultValue,
    isDisabled,
    onChange,
}: TextInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(Boolean(focused));
    const [isActive, setIsActive] = useState<boolean>(Boolean(false));
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const input = inputRef.current;
        if (!input || isFocus === undefined || focused === undefined) return;
        if (isFocus || focused) {
            input.focus();
            setIsActive(true);
        } else {
            input.blur();
        }
    }, [isFocus, focused]);

    useEffect(() => {
        const input = inputRef.current;
        if (!input || defaultValue === undefined || defaultValue === "") return;
        setIsActive(true);
    }, [defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value);
    };

    const handleInputFocus = () => {
        setIsFocus(true);
    };

    const handleInputBlur = () => {
        const input = inputRef.current;
        setIsFocus(false);
        setIsActive(!(input && input.value === ""));
    };

    const handleLabelClick = () => {
        setIsFocus(() => {
            if (!isFocus) return true;
            return isFocus;
        });
    };

    const inputStyles = cn(
        "border-2 py-2 px-3 rounded-md text-sm leading-5 font-normal w-full",
        {
            "border-gray-300 shadow-sm": !isFocus,
        },
        {
            "focus:ring-1 focus:ring-indigo-500 border-indigo-500 outline-indigo-500 shadow-none":
                (isFocus && !isError),
        },
        {
            "focus:ring-1 focus:ring-red-500 border-red-500 outline-red-500 shadow-none":
                isError,
        }
    );
    const labelStyles = cn(
        "block inline-block font-medium ml-2 relative transition-all",
        {
            "text-sm text-gray-400 px-2 top-9": !isActive,
        },
        {
            "text-xs text-gray-700 px-1 top-4 bg-white": isActive,
        }
    );

    return (
        <div className={[isDisabled ? "opacity-50" : "opacity-100"].join(" ")}>
            <label
                htmlFor="email"
                className={labelStyles}
                onClick={handleLabelClick}
            >
                {label}
                {isRequire && <span className="text-red-500"> *</span>}
            </label>
            <div className="mt-1">
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(e) => handleChange(e)}
                    ref={inputRef}
                    type={type}
                    name={name}
                    id={id}
                    className={inputStyles}
                    disabled={isDisabled}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
};
