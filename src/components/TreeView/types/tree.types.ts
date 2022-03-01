export type TreeItemChildrenProps = {
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
    childNodes?: TreeItemChildrenProps[] | null;
}