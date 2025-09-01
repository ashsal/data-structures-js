class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(this.size);
    this.front = -1;
    this.read = -1;
    console.log(this.queue);
  }

  enqueue(value) {
    if (
      (this.rear + 1 === this.size && this.front === 0) ||
      this.rear + 1 === this.front
    ) {
      console.log("Queue is empty");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear + 1 === this.size) {
      this.rear = 0;
    } else {
      this.rear = this.rear + 1;
      // this.rear += 1;
    }

    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) {
      console.log("Queue is empty");
      return null;
    }

    const result = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front + 1 === this.size) {
      this.front = 0;
    } else {
      this.front += 1;
    }

    return result;
  }

  print() {
    console.log(this.queue);
    console.log("rear", this.rear);
    console.log("front", this.front);
  }
}

const myCircularQueue = new CircularQueue(8);
console.log("dequeue", myCircularQueue.dequeue());
myCircularQueue.enqueue("A");
myCircularQueue.enqueue("B");
myCircularQueue.enqueue("C");
myCircularQueue.enqueue("D");
myCircularQueue.enqueue("E");
myCircularQueue.enqueue("F");
myCircularQueue.enqueue("G");
myCircularQueue.enqueue("H");
myCircularQueue.enqueue("I");
myCircularQueue.print();
console.log("dequeue", myCircularQueue.dequeue());
console.log("dequeue", myCircularQueue.dequeue());
console.log("dequeue", myCircularQueue.dequeue());
myCircularQueue.print();
