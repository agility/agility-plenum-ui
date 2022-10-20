import React, { ComponentType } from 'react';
import { TreeViewContextProps } from "./types/tree.types";
export interface TreeViewProviderProps {
    children?: JSX.Element | HTMLDivElement | ComponentType;
}
declare const TreeViewContext: React.Context<TreeViewContextProps | null>;
declare const TreeViewProvider: ({ children }: TreeViewProviderProps) => JSX.Element;
export declare const useTreeViewContext: () => TreeViewContextProps | null;
export { TreeViewContext, TreeViewProvider };
