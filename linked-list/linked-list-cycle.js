// Problem : we have to determin does linked list contain cycle
// Explainnation :
// Example Input : [1, 2, 3, 4, 5];
// Output : 
// Note : in here if 5 node next point to 3, so it's cycle and program can go into loop because there is not ending null to last node next
// Approach : key idea of Floyd's Cycle Detection.

import {Node} from "./node-blueprint.js"

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

let head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// cycle continue node 
node5.next = node3;

const hasCycle =(head) => {

    let slow = head;
    let fast = head;
    
while(fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next

    if(fast === slow) {
        return true
    }
    
}


return false
}

console.log(hasCycle(head))
