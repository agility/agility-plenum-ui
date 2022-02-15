import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from "../../util/DynamicIcons";

export interface InputCtaProps {
    /** Icon name */
    icon: IconName,
    /** CTA label */
    ctaLabel?: string,
    /** CTA label */
    onClickHandler?(): void,
}

/** Comment */
export const InputCta: FC<InputCtaProps> = ({ icon, ctaLabel, onClickHandler }: InputCtaProps): JSX.Element => {
    const handleClick = () => {
        onClickHandler && onClickHandler();
    }
    return (
        <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={handleClick}
        >
            <DynamicIcons icon={icon} className="h-5 w-5 text-gray-400" outline={false} />
            <span>{ctaLabel}</span>
        </button>
    );
};
