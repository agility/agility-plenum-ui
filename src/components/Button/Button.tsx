import React, { FC } from "react";

import "../../tailwind.css";
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "secondary" | "plain";
    /**Î
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * An optional icon
     */
    icon?: JSX.Element;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    type = "plain",
    size = "medium",
    onClick,
    label,
    icon,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={[
                "inline-flex space-x-2 items-center justify-center border border-transparent transition-all",
                size === "large"
                    ? "px-5 py-3 font-medium rounded-md text-lg"
                    : size === "medium"
                    ? "px-3 py-2 font-medium rounded-md text-base"
                    : "px-3 py-1 text-sm font-medium rounded",
                type === "primary"
                    ? "text-green-50 bg-slate-500 hover:bg-indigo-700 active:bg-indigo-800"
                    : type === "secondary"
                    ? "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200 border-gray-600 active:bg-gray-300",
            ].join(" ")}
            onClick={onClick}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
};
