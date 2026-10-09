import { Queue } from "./queue-boilerplate.js"

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)


const reversingQueue = (queue) => {

    const stack = [];

    while(!queue.isEmpty()){
        // console.log(queue)
        stack.push(queue.dequeue())
    }

    while(stack.length > 0) {
        queue.enqueue(stack.pop())
    }

    return queue
}

console.log(reversingQueue(queue))