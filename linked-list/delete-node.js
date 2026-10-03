// Problem : deleting first, last and specific node in linked list
// Explainnation :
// Example Input : 
// Output : 
// Note : none
// Approach : Linked List
import { Node } from "./node-blueprint";

const node1 = new Node("1")
const node2 = new Node("2")
const node3 = new Node("3")
const node4 = new Node("4")

node1.next = node2
node2.next = node3
node3.next = node4

let head = node1

// delete first node
head = head.next


// delete last node 
let current = head;
while(current.next.next !== null){
   current = current.next
}
current.next = null;

// delete specific middle node 
// deleting node 3

while(current.next.value !== 4){

   current = current.next

}
current.next = current.next.next


// delete first node function 
const deleteFirstNode = (head) => {
 return head.next
}

// delete last node function 
const deleteLastNode = (head) => {
   
   let current = head;

   while(current.next.next !== null){
      current = current.next
   }
   current.next = null;
}

// delete specific node function 
const deleteSpecificNode = (value, head) => {
 
   let current = head
   while(current.next.value !== value){
      current = current.next;
   }

}


// class linked list 

class LinkedList  {
   constructor() {
      this.head = null;
   }

   deleteFirst () {
      if (this.head === null) return;
      this.head = this.head.next;
   }

   deleteLast () {
      if (this.head === null) return;
      let current = this.head;
      if(current.next === null) return this.head = null;
      while(current.next.next !== null){
         current = current.next
      }

      current.next = null;
   }

   deleteSpecific (value) {

      if(this.head === null) return;
      let current = this.head

     if (this.head.value === value) {
    this.head = this.head.next;
    return;
}

      while(current.next.value !== value) {
         current = current.next
      }

 if (current.next === null) return;
 
     current.next = current.next.next;

   }
}
