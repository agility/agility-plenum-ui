import React, { FC } from 'react';
import { default as cn } from 'classnames';

export interface BaseInputProps {
    /**
     * Prop comment
     */
    prop: string;
}

/**
 * Comment
 */
export const BaseInput: FC<BaseInputProps> = ({prop}: BaseInputProps) => {

    return (
        <div>BaseInput component {prop}</div>
    );
};
