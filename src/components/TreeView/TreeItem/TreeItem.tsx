import React, { FC } from 'react';
import { default as cn } from 'classnames';

export interface TreeItemProps {
    /** Prop comment */
    prop: string;
}

/** Comment */
export const TreeItem: FC<TreeItemProps> = ({prop}: TreeItemProps) => {

    return (
        <div>TreeItem component {prop}</div>
    );
};
