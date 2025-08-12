class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  isFull() {
    if (this.size === this.capacity) {
      return true;
    }

    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error("Buffer is full");
    }

    this.buffer[this.tail] = item;

    if (this.tail + 1 === this.capacity) {
      this.tail = 0;
    } else {
      this.tail = this.tail + 1;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Buffer is empty");
    }

    const item = this.buffer[this.head];

    if (this.head + 1 === this.capacity) {
      this.head = 0;
    } else {
      this.head++;
    }

    this.size--;

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.buffer[this.head];
  }

  print() {
    const result = [];
    for (let i = 0; i < this.size; i++) {
      let index = this.head + i;
      if (index >= this.capacity) {
        index = index - this.capacity;
      }

      result.push(this.buffer[index]);
    }

    console.log(result);
  }
}

let myCircularBuffer = new CircularBuffer(5);
myCircularBuffer.enqueue(1);
myCircularBuffer.enqueue(2);
myCircularBuffer.enqueue(3);
myCircularBuffer.enqueue(4);
myCircularBuffer.enqueue(5);
//myCircularBuffer.enqueue(6);

console.log("dequeue", myCircularBuffer.dequeue());
console.log("dequeue", myCircularBuffer.dequeue());
console.log("dequeue", myCircularBuffer.dequeue());
console.log("dequeue", myCircularBuffer.dequeue());

myCircularBuffer.enqueue(6);

console.log("peek", myCircularBuffer.peek());
console.log("peek", myCircularBuffer.peek());
console.log("peek", myCircularBuffer.peek());

myCircularBuffer.print();
