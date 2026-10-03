// Problem : Middle of linked list
// Explainnation : finding middle node in linked list using fast and slow method
// Example Input : [1, 2, 3, 4, 5];
// Output : 3
// Note : in here we can't use array method to find middle value we are gonna use fast and slow
// Approach : 

import {Node} from "./node-blueprint.js"

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let head = node1

let fast = head;
let slow = head;

while(fast !== null && fast.next !== null) {
     slow = slow.next;
     fast = fast.next.next 
}

console.log(slow.value)
// return slow