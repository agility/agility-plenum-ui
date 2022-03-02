import React, { ComponentType, FC } from 'react';
import { default as cn } from 'classnames';
import { TreeItem } from './TreeItem';
import { useTreeViewContext } from './context';
import { TreeViewContextProps } from './types/tree.types';
import { TreeViewProvider } from './context';

export interface TreeViewProps {
    /** Prop comment */
    prop: string;
}

const _TreeView = ({ prop }: TreeViewProps) => {
    const { treeList } = useTreeViewContext() as TreeViewContextProps;
    if (treeList && !treeList.length) return null;
    return (
        <div>
            {treeList?.map((item) => {
                return (
                    <TreeItem
                        title={item?.title}
                        isExpanded={item?.expanded}
                        childNodes={item?.childNodes}
                        isRoot
                    />
                );
            })}
        </div>
    );
};

const withContext = <T,>(WrappedComponent: ComponentType<T>) => {
    return (hocProps: Omit<T, 'prop'>) => {
        return (
            <TreeViewProvider>
                <WrappedComponent prop="prop" {...(hocProps as T)} />
            </TreeViewProvider>
        );
    };
};

export const TreeView = withContext(_TreeView);
