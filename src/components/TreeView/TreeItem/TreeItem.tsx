import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons } from '../../../util/DynamicIcons';
import { TreeItemChildrenProps } from '../types/tree.types';

export interface TreeItemProps {
    /** Selected or current state */
    isCurrent: boolean;
    /** title of the tree item */
    title: string;
    /** If tree item is expanded */
    isExpanded: boolean;
    /** inner nodes within the tree item */
    childNodes?: TreeItemChildrenProps[] | null;
    /** A Check to know if item is a root value */
    isRoot?: boolean;
}

/** Comment */
export const TreeItem: FC<TreeItemProps> = ({
    isCurrent = false,
    title = 'Dashboard',
    isExpanded,
    childNodes,
    isRoot = true
}: TreeItemProps) => {
    const unOrderedListStyles = cn(
        {'pl-2 ml-3 border-l-gray-300 border-l': !isRoot}
    );
    const listStyles = cn('flex text-sm font-medium rounded-md flex-col');
    const iconStyles = cn(
        'mr-1 flex-shrink-0 h-4 w-4 self-center',
        { 'text-purple-500': isCurrent },
        { 'text-gray-500 hover:text-gray-700': !isCurrent }
    );
    const listContent = cn(
        'flex flex-row cursor-pointer p-1',
        { 'text-purple-500': isCurrent },
        { 'text-gray-500 hover:text-gray-700': !isCurrent }
    );
    return (
        <ul className={unOrderedListStyles}>
            <li className={listStyles}>
                <div className={listContent}>
                    {/* TODO: Abstract the icons to its own components */}
                    {childNodes && childNodes.length && (
                        <DynamicIcons
                            icon={isExpanded ? 'ChevronDownIcon' : 'ChevronRightIcon'}
                            aria-hidden="true"
                            className={iconStyles}
                            outline
                        />
                    )}
                    <DynamicIcons
                        icon={isExpanded ? 'FolderOpenIcon' : 'FolderIcon'}
                        aria-hidden="true"
                        className={iconStyles}
                        outline
                    />
                    {title}
                </div>
                {childNodes &&
                    childNodes.length &&
                    childNodes.map((node) => {
                        return (
                            <TreeItem
                                isCurrent={false}
                                title={node?.title}
                                isExpanded={node?.expanded}
                                childNodes={node?.childNodes}
                                isRoot={false}
                            />
                        );
                    })}
            </li>
        </ul>
    );
};
