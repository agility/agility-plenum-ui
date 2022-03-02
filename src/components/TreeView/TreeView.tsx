import React, { useState, FC } from 'react';
import { default as cn } from 'classnames';
import { Tree, NodeModel } from "@minoru/react-dnd-treeview";
import initialData from "./fixtures/lists.json";

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
          rootId={0}
          onDrop={handleDrop}
          render={(node, { depth, isOpen, onToggle }) => (
            <div style={{ marginLeft: depth * 10 }}>
              {node.droppable && (
                <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
              )}
              {node.text}
            </div>
          )}
        />
      );
};

