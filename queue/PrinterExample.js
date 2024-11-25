import Queue from "./Queue.js";

const printerQueue = new Queue();
printerQueue.enqueue("Document 1");
printerQueue.enqueue("Document 2");
printerQueue.enqueue("Document 3");

while (!printerQueue.isEmpty()) {
  console.log("Printing", printerQueue.dequeue());
}
