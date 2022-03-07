import React, { useEffect, useState } from 'react';
import { default as cn } from 'classnames';
import { TreeItemProps } from '../../../components/TreeView';
import { DynamicIcons } from '../../../util/DynamicIcons';
import { useFetch } from '../hooks/useFetch';
import { Spinner } from '..';
import { Dropdown } from '../../../components/Dropdown';

const endpoint = '/api/getTreeData';

export const CustomNode = ({ node, isOpen, onToggle, onUpdate }: TreeItemProps) => {
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
        if (isLazy) await fetchData(partialUrlParams);
        onToggle(node.id);
    };
    const iconStyles = cn(
        'mr-1 flex-shrink-0 h-4 w-4 self-center text-gray-500 hover:text-gray-700'
    );
    const errorIconStyle = cn('mr-1 flex-shrink-0 h-4 w-4 self-center text-red-500');
    const listContent = cn(
        'flex flex-row cursor-pointer px-1 py-[6px] text-gray-500 hover:text-gray-700 group'
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
                    <span className="flex-grow">{node.text}</span>
                    <span className="group-hover:block hidden absolute right-0">
                        <Dropdown
                            items={[
                                [
                                    {
                                        label: 'Context menu 1'
                                    }
                                ],
                                [
                                    {
                                        label: 'Context menu 2'
                                    },
                                    {
                                        label: 'Context menu 3'
                                    }
                                ],
                            ]}
                        />
                    </span>
                </>
            )}
        </div>
    );
};
