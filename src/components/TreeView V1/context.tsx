import React, { useState, useContext, Dispatch, SetStateAction, ComponentType } from 'react';
import { data } from './sampleData';
import { TreeListProp } from './types/tree.types';
import { TreeViewContextProps } from "./types/tree.types";

export interface TreeViewProviderProps {
    children?: JSX.Element | HTMLDivElement | ComponentType;
}

const TreeViewContext = React.createContext<TreeViewContextProps | null>(null);

const TreeViewProvider = ({ children }: TreeViewProviderProps): JSX.Element => {
    const [treeList, setTreeList] = useState<TreeListProp>(data);


    // tree data

    return (
        <TreeViewContext.Provider
            value={{
                treeList,
                setTreeList
            }}
        >
            {children}
        </TreeViewContext.Provider>
    );
};

export const useTreeViewContext = () => {
    return useContext(TreeViewContext);
};

export { TreeViewContext, TreeViewProvider };
