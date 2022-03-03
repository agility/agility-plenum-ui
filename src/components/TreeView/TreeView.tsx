import React, { useState, FC } from 'react';
import { default as cn } from 'classnames';
import { Tree, NodeModel } from '@minoru/react-dnd-treeview';

import { DynamicIcons } from '../../util/DynamicIcons';

export interface TreeViewProps {
    /** Prop comment */
    treeData: NodeModel<DataProps>[];
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
            render={(node, { depth, isOpen, onToggle }) => {
                const iconStyles = cn(
                    'mr-1 flex-shrink-0 h-4 w-4 self-center text-gray-500 hover:text-gray-700'
                );
                const listContent = cn(
                    'flex flex-row cursor-pointer p-1 text-gray-500 hover:text-gray-700'
                );
                return (
                    <div className={listContent}>
                        {(node.data?.lazy || node.data?.expanded) && (
                            <button onClick={onToggle}>
                                <DynamicIcons
                                    icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'}
                                    aria-hidden="true"
                                    className={iconStyles}
                                    outline
                                />
                            </button>
                        )}
                        <DynamicIcons
                            icon={isOpen ? 'FolderOpenIcon' : 'FolderIcon'}
                            aria-hidden="true"
                            className={iconStyles}
                            outline
                        />
                        {node.text}
                    </div>
                );
            }}
        />
    );
};
