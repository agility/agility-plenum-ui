import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { TreeViewProvider } from "./context";
import { data } from "./sampleData";
import { TreeItem } from "./TreeItem";

export interface TreeViewProps {
    /** Prop comment */
    prop: string;
}


/** Comment */
export const TreeView = ({prop}: TreeViewProps) => {
    return (
        <TreeViewProvider>
            <div>
                {data.map(item => {
                    return(
                        <TreeItem title={item.title} isExpanded={item.expanded} childNodes={item.childNodes} isRoot />
                    )
                })}
            </div>
        </TreeViewProvider>
    );
};
