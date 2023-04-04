import React from 'react';
import { TreeNode } from '@/types/TreeNode';
import Breadcrumb from '@/components/Breadcrumb';
import Folder from '@/components/Folder';
import useBreadcrumb from '@/hooks/useBreadcrumb';

type FolderTreeProps = {
    folders: TreeNode[];
};

const FolderTree: React.FC<FolderTreeProps> = ({ folders }) => {
    const { path, navigate, goBack } = useBreadcrumb(folders);

    const handleClick = (node: TreeNode) => {
        if (node.children.length > 0) {
            navigate(node);
        }
    };

    const currentNode = path[path.length - 1];
    return (
        <div>
            <Breadcrumb path={path} onNavigate={goBack} />
            {currentNode.children.map((child) => (
                <Folder key={child.value} node={child} onClick={handleClick} />
            ))}
        </div>
    );
};

export default FolderTree;
