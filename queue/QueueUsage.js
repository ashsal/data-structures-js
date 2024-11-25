import Queue from "./Queue.js";

const queueInstance = new Queue();
queueInstance.enqueue(2);
const item = queueInstance.dequeue();
console.log("dequeued item is", item);
// const item2 = queueInstance.dequeue();
// console.log("item2 is", item2);

queueInstance.enqueue(3);
const peekedItem1 = queueInstance.peek();
console.log("peekedItem1 is", peekedItem1);
const peekedItem2 = queueInstance.peek();
console.log("peekedItem2 is", peekedItem2);

console.log("queue empty result 1 is is", queueInstance.isEmpty());
queueInstance.dequeue();
console.log("queue empty result 2 is is", queueInstance.isEmpty());

console.log("Size of queue 1 is", queueInstance.size());
queueInstance.enqueue(4);
console.log("Size of queue 2 is", queueInstance.size());
