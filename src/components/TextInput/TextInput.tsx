import React, { FC, useEffect, useRef, useState } from "react";

import "../../tailwind.css";

export interface TextInputProps {
	/** Input type*/
    type: string;
	/** Input ID */
	id: string;
	/** Input Name */
	name: string;
    /** Label for the input */
    label: string;
    /** Force the focus state on the input */
    focused?: boolean;
    /** Error state */
    error?: boolean;
}

export const TextInput: FC<TextInputProps> = ({
    label,
    focused,
    error,
	id,
	name,
	type
}: TextInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(Boolean(focused));
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const input = inputRef.current;
        if (!input || focused === undefined) return;
        focused ? input.focus() : input.blur();
    }, [focused]);

    const handleFocus = () => {
        setIsFocus(true);
    };
	
    return (
        <div>
            <label
                htmlFor="email"
                className={"block text-sm font-medium text-gray-700"}
            >
                {label}
            </label>
            <div className="mt-1">
                <input
                    onFocus={handleFocus}
					ref={inputRef}
                    type={type}
                    name={name}
                    id={id}
                    className="border-2 border-black"
                />
            </div>
        </div>
    );
};
