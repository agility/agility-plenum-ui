import { FC } from 'react';
import { TreeItemChildrenProps } from '../types/tree.types';
export interface TreeItemProps {
    /** Selected or current state */
    isCurrent?: boolean;
    /** title of the tree item */
    title?: string;
    /** If tree item is expanded */
    isExpanded?: boolean;
    /** inner nodes within the tree item */
    childNodes?: Partial<TreeItemChildrenProps[] | null>;
    /** A Check to know if item is a root value */
    isRoot?: boolean;
}
/** Comment */
export declare const TreeItem: FC<TreeItemProps>;
