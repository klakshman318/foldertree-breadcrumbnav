import React from 'react';
import { TreeNode } from '@/types/TreeNode';
import styles from './styles/Folder.module.css';

type FolderProps = {
    node: TreeNode;
    onClick: (node: TreeNode) => void;
};

const Folder: React.FC<FolderProps> = ({ node, onClick }) => {
    const handleClick = () => {
        onClick(node);
    };

    return (
        <div className={styles.container}>
            <div className={styles.folder} onClick={handleClick}>
                <a href="#" onClick={(e) => e.preventDefault()} className={styles.folderLink}>
                    {node.value}
                </a>
            </div>
        </div>
    );
};

export default Folder;
