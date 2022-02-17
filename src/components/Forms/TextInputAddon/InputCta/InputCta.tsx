import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../../../util/DynamicIcons';

export interface InputCtaProps {
    /** Icon name */
    icon?: IconName;
    /** CTA label */
    ctaLabel?: string;
    /** Alignment */
    align: 'left' | 'right';
    /** Show the CTA without Background color and a border seperator */
    isClear?: boolean;
    /** Onclick callback */
    onClickHandler?(): void;
}

/** Comment */
export const InputCta: FC<InputCtaProps> = ({ icon, ctaLabel, align='right', isClear=false, onClickHandler }: InputCtaProps): JSX.Element => {
    const handleClick = () => {
        onClickHandler && onClickHandler();
    };
    const buttonStyle = cn(
        'relative z-10 inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
        {
            'rounded-r-md text-gray-700 -ml-px': (align === 'right')
        },
        {
            'rounded-l-md text-gray-500 -mr-px focus-within:z-10': (align === 'left')
        },
        {
            'cursor-default': !onClickHandler
        },
        {
            'hover:bg-gray-100': (onClickHandler && !isClear)
        },
        {
            'border-l-white': (isClear && align === 'right')
        },
        {
            'border-r-white': (isClear && align === 'left')
        },
        {
            'bg-gray-50': !isClear
        },
        {
            'bg-white': isClear
        },
    );
    return (
        <button type="button" className={buttonStyle} onClick={handleClick}>
            <DynamicIcons icon={icon} className="h-5 w-5 text-gray-400" outline={false} />
            {ctaLabel && <span>{ctaLabel}</span>}
        </button>
    );
};
