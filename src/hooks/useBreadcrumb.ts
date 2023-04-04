import { useState } from 'react';
import { TreeNode } from '@/types/TreeNode';

type UseBreadcrumb = {
  path: TreeNode[];
  navigate: (node: TreeNode) => void;
  goBack: (index: number) => void;
};

const useBreadcrumb = (initialPath: TreeNode[]): UseBreadcrumb => {
  const [path, setPath] = useState(initialPath);

  const navigate = (node: TreeNode) => {
    setPath((prevPath) => [...prevPath, node]);
  };

  const goBack = (index: number) => {
    setPath((prevPath) => prevPath.slice(0, index + 1));
  };

  return { path, navigate, goBack };
};

export default useBreadcrumb;
