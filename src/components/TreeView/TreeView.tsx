import React, { useState, FC } from 'react';
import { default as cn } from 'classnames';
import { Tree, NodeModel } from '@minoru/react-dnd-treeview';
import initialData from './fixtures/lists.json';
import { DynamicIcons } from '../../util/DynamicIcons';

export interface TreeViewProps {
    /** Prop comment */
    prop: string;
}

export const TreeView = ({ prop }: TreeViewProps) => {
    const [treeData, setTreeData] = useState<NodeModel[]>(initialData);
    const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

    return (
        <Tree
            tree={treeData}
            classes={{
                root: 'pl-0 ml-0 border-l-0',
                container: 'pl-2 ml-3 border-l-gray-300 border-l',
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
                    {node.droppable && (
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
            )}}
        />
    );
};
