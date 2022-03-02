import { Dispatch, SetStateAction } from 'react';

export interface TreeItemChildrenProps {
    key: string;
    type: string;
    title: string;
    lazy: boolean;
    expanded: boolean;
    folder: boolean;
    prefix: string;
    iconclass: string;
    galleryID: number;
    galleryFolderID: number;
    assetID: number;
    folderID: number;
    childNodes?: TreeListProp;
}

export type TreeListProp = Partial<TreeItemChildrenProps[] | null>

export interface TreeViewContextProps {
    treeList: TreeListProp;
    setTreeList: Dispatch<SetStateAction<TreeListProp>>;
}