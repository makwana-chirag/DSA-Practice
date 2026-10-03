

// Problem : Reversing Linked List
// Explainnation :
// Example Input : [1] → [2] → [3] → [4] → null;
// Output : [4] → [3] → [2] → [1] → null
// Note : none
// Approach : 

import { Node } from "./node-blueprint.js";

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

let head = node1
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let previous = null;
let current = head;

while(current !== null) {
    let next = current.next;

    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
}

head = previous;

let currentNode = head 

while(currentNode !== null){
    console.log(currentNode.value)
    currentNode = currentNode.next
}