import React, {
    useState,
    JSXElementConstructor,
    useCallback,
    forwardRef,
    ForwardedRef,
    useEffect
} from 'react';
import { Tree, NodeModel, TreeMethods } from '@minoru/react-dnd-treeview';

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
}

type PlaceHolderProps = {
    node: NodeModel;
    depth: number;
};

/** Custom placeholder design */
export const Placeholder: React.FC<PlaceHolderProps> = ({ node, depth }) => {
    return <div></div>;
};

const TreeView = (
    { treeData, CustomNode, initialOpen }: TreeViewProps,
    ref: ForwardedRef<TreeMethods>
) => {
    const [list, setList] = useState<NodeModel<DataProps>[]>(treeData);
    const [showTree, setShowTree] = useState<boolean>(false);
    const [openKeys, setOpenKeys] = useState<boolean | Array<number | string>>(false);
    const handleDrop = (newTree: NodeModel<DataProps>[]) => setList(newTree);
    const handleUpdateList = useCallback(
        (item: NodeModel<DataProps>[]) => {
            const newList = [...list, ...item];
            setList(newList);
        },
        [list]
    );

    useEffect(() => {
        if (typeof initialOpen === 'boolean'){
            setShowTree(true);
            setList(treeData);
            setOpenKeys(initialOpen);
        }else if(typeof initialOpen !== 'boolean' && initialOpen.length > 0) {
            setShowTree(true);
            setList(treeData);
            setOpenKeys(initialOpen);
        }else {
            setShowTree(false);
        }
    }, [initialOpen, treeData]);

    return (
        <>
            {showTree && (
                <Tree
                    ref={ref}
                    tree={list}
                    classes={{
                        root: 'pl-0 ml-0 !border-l-0',
                        container: 'border-l pl-2 ml-3 border-l-gray-300 relative',
                        listItem: 'flex text-sm font-medium rounded-md flex-col',
                        dropTarget: 'classes-dropTarget',
                        draggingSource: 'classes-draggingSource',
                        placeholder: 'bg-purple-500 h-[2px] absolute w-[calc(100%-16px)] left-4'
                    }}
                    rootId={0}
                    onDrop={handleDrop}
                    sort={false}
                    insertDroppableFirst={false}
                    canDrop={(tree, { dragSource, dropTargetId }) => {
                        if (dragSource?.parent === dropTargetId) {
                            return true;
                        }
                    }}
                    initialOpen={openKeys}
                    dropTargetOffset={5}
                    placeholderRender={(node, { depth }) => (
                        <Placeholder node={node} depth={depth} />
                    )}
                    render={(node: NodeModel<DataProps>, { depth, isOpen, onToggle }) => {
                        return (
                            <CustomNode
                                node={node}
                                depth={depth}
                                isOpen={isOpen}
                                onToggle={onToggle}
                                onUpdate={handleUpdateList}
                            />
                        );
                    }}
                />
            )}
        </>
    );
};

const _TreeView = forwardRef<TreeMethods, TreeViewProps>(TreeView);
export { _TreeView as TreeView };
