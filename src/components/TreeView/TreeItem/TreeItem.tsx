import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { DataProps } from '..';
import { DynamicIcons } from '../../../util/DynamicIcons';
import { useFetch } from '../../../page/TreeNavigation/hooks/useFetch';
import { Spinner } from '../../../page/TreeNavigation';

export interface TreeItemProps {
    node: NodeModel<DataProps>;
    depth: number;
    isOpen: boolean;
    onToggle: (id: NodeModel['id']) => void;
    onUpdate: (item: NodeModel<DataProps>) => void;
}
const endpoint = '/api/getTreeData';

export const TreeItem = ({ node, depth, isOpen, onToggle }: TreeItemProps) => {
    const partialUrlParams = {
        urlData: endpoint,
        method: 'POST',
        payload: { pageType: 'pages', action: 'partial' }
    };
    const { isLoading, error, data, fetchData } = useFetch();
    const handleToggle = async (id: string | number, data?: DataProps) => {
        if (data?.lazy) {
            await fetchData(partialUrlParams);
            onToggle(node.id);
        } else {
            onToggle(node.id);
        }
    };
    const iconStyles = cn(
        'mr-1 flex-shrink-0 h-4 w-4 self-center text-gray-500 hover:text-gray-700'
    );
    const listContent = cn(
        'flex flex-row cursor-pointer px-1 py-[6px] text-gray-500 hover:text-gray-700'
    );
    return (
        <div className={listContent}>
            {(node.data?.lazy || node.data?.expanded) && (
                <button onClick={() => handleToggle(node.id, node.data)}>
                    <DynamicIcons
                        icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'}
                        aria-hidden="true"
                        className={iconStyles}
                        outline
                    />
                </button>
            )}
            {isLoading ? (
                <Spinner />
            ) : (
                <DynamicIcons
                    icon={isOpen ? 'FolderOpenIcon' : 'FolderIcon'}
                    aria-hidden="true"
                    className={iconStyles}
                    outline
                />
            )}
            {node.text}
        </div>
    );
};
