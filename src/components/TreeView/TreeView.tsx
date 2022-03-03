import React, { useState, FC } from 'react';
import { Tree, NodeModel } from '@minoru/react-dnd-treeview';

import { TreeItem } from "./TreeItem";

export interface TreeViewProps {
    /** Prop comment */
    treeData: NodeModel<DataProps>[];
    onLazyFetch(id: string): void;
}

export interface DataProps {
    type: string;
    lazy: boolean;
    expanded: boolean;
    folder: boolean;
    prefix: string;
    iconclass: string;
    galleryID: number;
    galleryFolderID: number;
    assetID: number;
    folderID: number;
}

export const TreeView = ({ treeData }: TreeViewProps) => {
    const [list, setList] = useState<NodeModel<DataProps>[]>(treeData);
    const handleDrop = (newTree: NodeModel<DataProps>[]) => setList(newTree);

    return (
        <Tree
            tree={list}
            classes={{
                root: 'pl-0 ml-0 !border-l-0',
                container: 'border-l pl-2 ml-3 border-l-gray-300',
                listItem: 'flex text-sm font-medium rounded-md flex-col',
                dropTarget: 'classes-dropTarget',
                draggingSource: 'classes-draggingSource',
                placeholder: 'classes-placeholder'
            }}
            rootId={0}
            onDrop={handleDrop}
            render={(node: NodeModel<DataProps>, { depth, isOpen, onToggle }) => {
                return <TreeItem node={node} depth={depth} isOpen={isOpen} onToggle={onToggle} />;
            }}
        />
    );
};
