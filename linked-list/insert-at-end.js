// Problem : Inserting Node at End of Linked List
// Explainnation : Inserting Node at end of linked list
// Example Input : none
// Output : none
// Note : none
// Approach : Linked List

import { Node } from "./node-blueprint";

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;

const head = node1

const newNode = new Node(4);

let current = head

while(current.next !== null ) {
   current = current.next;
}

current.next = newNode