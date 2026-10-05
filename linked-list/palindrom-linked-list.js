// Problem : 
// Explainnation :
// Example Input : [1, 2, 2, 2, 4, 5, 7]; , Target : 2
// Output : 
// Note : none
// Approach : 

import {Node} from "./node-blueprint.js"


const Palindrome = () => {

    const node1 = new Node(1)
    const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(1)
const node5 = new Node(2)
const node6 = new Node(3)

const head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let current = head;

let fast = current
let slow = current

while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next
}

let previous = null
let current2 = slow

while(current2 !== null){
    let next = current2.next;
    
    next = current2.next
    current2.next = previous 
    previous = current2
    current2 = next
}

let first = head;
let second =  previous;

while(second !== null){
    
    if(first.value !== second.value){
        return false
    }
    first = first.next
    second = second.next
}

return true
}

console.log(Palindrome())