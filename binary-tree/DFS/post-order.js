// Problem : Binary Post-order Traversal with recursion
// Explainnation :
// Example Input :
// Output : 
// Note : order should be : Left → Right → Root
// Approach : 

import { TreeNode } from "../tree-node-blueprint.js";

const node1 = new TreeNode(10);
const node2 = new TreeNode(5);
const node3 = new TreeNode(3);
const node4 = new TreeNode(7);
const node5 = new TreeNode(15);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;


const root = node1;

const postorder = (current) => {
    if(current === null) return
    
    postorder(current.left)
    
    postorder(current.right)
    console.log(current.value)
}

postorder(root)