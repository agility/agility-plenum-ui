import React, { JSXElementConstructor } from 'react';
import { NodeModel, TreeMethods } from '@minoru/react-dnd-treeview';
export interface TreeItemProps {
    node: NodeModel<DataProps>;
    depth: number;
    isOpen: boolean;
    onToggle: (id: NodeModel['id']) => void;
    onUpdate: (childList: NodeModel<DataProps>[]) => void;
}
export interface TreeViewProps {
    /** Prop comment */
    treeData: NodeModel<DataProps>[];
    CustomNode: JSXElementConstructor<TreeItemProps>;
    initialOpen: boolean | Array<number | string>;
}
export interface DataProps {
    type: string;
    lazy: boolean;
    expanded: boolean;
    folder: boolean;
    prefix: string;
    iconclass: string;
    galleryID: number;
    galleryFolderID: number;
    assetID: number;
    folderID: number;
    canNestChildren?: boolean;
}
declare type PlaceHolderProps = {
    node: NodeModel;
    depth: number;
};
/** Custom placeholder design */
export declare const Placeholder: React.FC<PlaceHolderProps>;
declare const _TreeView: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<TreeMethods>>;
export { _TreeView as TreeView };
