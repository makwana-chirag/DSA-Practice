// Problem : 
// Explainnation :
// Example Input : [1, 2, 2, 2, 4, 5, 7]; , Target : 2
// Output : 
// Note : none
// Approach : Linked List
import { Node } from "./node-blueprint";

const node1 = new Node("1")
const node2 = new Node("2")
const node3 = new Node("3")

node1.next = node2
node2.next = node3

let head = node1;