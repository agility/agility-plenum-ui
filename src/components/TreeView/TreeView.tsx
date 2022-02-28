import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { TreeViewProvider } from "./context";

export interface TreeViewProps {
    /** Prop comment */
    prop: string;
}


/** Comment */
export const TreeView = ({prop}: TreeViewProps) => {

    return (
        <TreeViewProvider>
            <div>TreeView component {prop}</div>
        </TreeViewProvider>
    );
};
