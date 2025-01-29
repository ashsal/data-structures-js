class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;

    // destructuring assignment
    // [this.heap[index1], this.heap[index2]] = [
    //   this.heap[index2],
    //   this.heap[index1],
    // ];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const firstValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return firstValue;
  }

  heapifyDown(index) {
    let largest = index;
    let leftChild = this.getLeftChildIndex(index);
    let rightChild = this.getRightChildIndex(index);

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] > this.heap[largest]
    ) {
      largest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[largest]
    ) {
      largest = rightChild;
    }

    if (largest != index) {
      this.swap(largest, index);
      this.heapifyDown(largest);
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(40);
maxHeap.insert(50);
maxHeap.insert(60);
maxHeap.print();

console.log("remove", maxHeap.remove());
console.log("peek", maxHeap.peek());
console.log("peek", maxHeap.peek());
console.log("size", maxHeap.size());
