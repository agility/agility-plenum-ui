import React, { useState, useContext, Dispatch, SetStateAction } from 'react'; 

export interface TreeViewContextProps { 
    isOpen: boolean, 
    setIsOpen: Dispatch<SetStateAction<boolean>> 
} 

export interface TreeViewProviderProps {
    children?: JSX.Element | HTMLDivElement;
}

const TreeViewContext = React.createContext<Partial<TreeViewContextProps | null>>(null); 

const TreeViewProvider = ({ children }: TreeViewProviderProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false); 

    return (
        <TreeViewContext.Provider
            value={{
            isOpen,
            setIsOpen,
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