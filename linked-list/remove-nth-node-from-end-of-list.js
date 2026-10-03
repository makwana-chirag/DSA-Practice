// Problem : removing the N-th node from end of list
// Explainnation :
// Example Input : [1, 2, 3, 4, 5]; Target : 2
// Output : [1, 2, 3, 5]
// Note : none
// Approach : in here we are going to remove 4 from list

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

((head,n)=>{
    let fast = head
    let slow = head

    for(let i = 0 ; i < n ; i++){
        fast = fast.next
    }

    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next

    

})(head,2)