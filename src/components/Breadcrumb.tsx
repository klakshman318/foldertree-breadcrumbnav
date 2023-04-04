import React from 'react';
import { TreeNode } from '../types/TreeNode';
import styles from './styles/Breadcrumb.module.css';

type BreadcrumbProps = {
    path: TreeNode[];
    onNavigate: (index: number) => void;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path, onNavigate }) => (
    <nav>
        <ol className={styles.breadcrumbList}>
            {path.map((node, index) => (
                <li key={node.value} className={styles.breadcrumbItem}>
                    {index < path.length - 1 ? (
                        <a
                            href="#"
                            onClick={() => onNavigate(index)}
                            className={styles.breadcrumbLink}
                        >
                            {node.value}
                        </a>
                    ) : (
                        node.value
                    )}
                    {index < path.length - 1 && <span className={styles.separator}>/</span>}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumb;
