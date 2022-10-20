import { FC } from 'react';
import { IconName } from '../../../../util/DynamicIcons';
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
export declare const InputCta: FC<InputCtaProps>;
