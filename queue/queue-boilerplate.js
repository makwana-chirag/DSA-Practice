
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        // adding values in queue
        this.items.push(value)
    }

    dequeue(){
        // removing values from queue and return it
        const val  = this.items.shift()

        return val
    }

    peek(){
        // returing value from queue without removing it
        const val = this.items[0];

        return val
    }

    isEmpty(){ 
        // checking if queue is empty or not 
        const val = this.items.length
        if(val > 0) {
            return false
        }else {
            return true
        }
    }
}

// creating queue
const queue = new Queue();

// adding value in queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.items)

// removing value from queue
const removed = queue.dequeue();

console.log(removed)

// getting first value in queue using peek method in queue class 

const first = queue.peek();

console.log(first)

// checking whether items exists in queue or it's empty queue

const isEmpty = queue.isEmpty()

console.log(isEmpty)

// printing all the values in queue 
console.log(queue.items)