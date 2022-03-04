import React, { FC, useEffect, useState } from 'react';
import { default as cn } from 'classnames';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { DataProps } from '../../../components/TreeView';
import { DynamicIcons } from '../../../util/DynamicIcons';
import { useFetch } from '../hooks/useFetch';
import { Spinner } from '..';

export interface TreeItemProps {
    node: NodeModel<DataProps>;
    depth?: number;
    isOpen: boolean;
    onToggle: (id: NodeModel['id']) => void;
    onUpdate: (childList: NodeModel<DataProps>[]) => void;
}
const endpoint = '/api/getTreeData';

export const TreeItem = ({ node, isOpen, onToggle, onUpdate }: TreeItemProps) => {
    const { isLoading, error, responseData, fetchData } = useFetch();
    const [isLazy, setIsLazy] = useState(node.data?.lazy);
    useEffect(() => {
        if (error?.show) return;
        if (responseData.length > 0) {
            onUpdate(responseData);
            setIsLazy(false);
        }
    }, [responseData, error]);
    const partialUrlParams = {
        urlData: endpoint,
        method: 'POST',
        payload: { pageType: 'pages', action: 'partial', id: node.id }
    };
    const handleToggle = async () => {
        if(isLazy) await fetchData(partialUrlParams);
        onToggle(node.id);
    };
    const iconStyles = cn(
        'mr-1 flex-shrink-0 h-4 w-4 self-center text-gray-500 hover:text-gray-700'
    );
    const errorIconStyle = cn('mr-1 flex-shrink-0 h-4 w-4 self-center text-red-500');
    const listContent = cn(
        'flex flex-row cursor-pointer px-1 py-[6px] text-gray-500 hover:text-gray-700'
    );
    return (
        <div className={listContent}>
            {node.data?.folder && (
                <button onClick={() => handleToggle()}>
                    <DynamicIcons
                        icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'}
                        aria-hidden="true"
                        className={iconStyles}
                        outline
                    />
                </button>
            )}
            {error?.show ? (
                <>
                    <DynamicIcons
                        icon="ExclamationCircleIcon"
                        aria-hidden="true"
                        className={errorIconStyle}
                        outline
                    />
                    {node.text}
                </>
            ) : isLoading ? (
                <Spinner />
            ) : (
                <>
                    <DynamicIcons
                        icon={isOpen ? 'FolderOpenIcon' : 'FolderIcon'}
                        aria-hidden="true"
                        className={iconStyles}
                        outline
                    />
                    {node.text}
                </>
            )}
        </div>
    );
};
