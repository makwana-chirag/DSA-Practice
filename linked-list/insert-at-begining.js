// Problem : Insert Node at Beginning
// Explainnation : create new node and add it to begining of linked list 
// Example Input : none
// Output : none
// Note : none
// Approach : Linked List

import { Node } from "./node-blueprint";


const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2;
node2.next = node3;

let head = node1;

const newNode = new Node(0);

newNode.next = head
head = newNode
