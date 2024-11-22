import Stack from "./Stack.js";

const stack = new Stack();
stack.push(21);
console.log("peek result: ", stack.peek());
console.log("pop result: ", stack.pop());
console.log("peek result: ", stack.peek());
console.log("isEmpty result: ", stack.isEmpty());
stack.push(22);
console.log("isEmpty result: ", stack.isEmpty());
console.log("size result: ", stack.size());
stack.push(23);
console.log("size result: ", stack.size());
