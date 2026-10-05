// Problem : merge two sorted list
// Explainnation :
// Example Input : [1, 2, 2, 2, 4, 5, 7]; 
// Output : 
// Note : none
// Approach : Linked List

import {Node} from "./node-blueprint.js";

// first sorted linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

const head1 = node1
node1.next = node2
node2.next = node3

// second sorted linked-list
const node4 = new Node(1);
const node5 = new Node(2);
const node6 = new Node(3);

const head2 = node4
node4.next = node5
node5.next = node6

let current1 = head1
let current2 = head2

let dummy = new Node(0)

let current = dummy;

while(current1 !== null && current2 !== null){
    if(current1.value <= current2.value){
        current.next = current1
        current1 = current1.next
        current = current.next
    }else{
        current.next = current2
        current2 = current2.next
        current = current.next
    }
}

if(current1 === null) {
 current.next = current2
}

if ( current2 === null) {
    current.next = current1
}

 console.log(dummy.next)