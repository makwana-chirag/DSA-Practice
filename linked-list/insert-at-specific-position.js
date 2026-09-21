// Problem : 
// Explainnation :
// Example Input : [1, 2, 2, 2, 4, 5, 7]; , Target : 2
// Output : 
// Note : none
// Approach : 

import { Node } from "./node-blueprint";


const node1 = new Node("one")
const node2 = new Node("two")
const node3 = new Node("three")
const node4 = new Node("four")

node1.next = node2
node2.next = node3
node3.next = node4

let head = node1

const node5 = new Node("twopointhalf")

let current = node2

node5.next = current.next
current.next = node5