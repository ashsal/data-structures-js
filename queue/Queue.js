class Queue {
  #items = [];
  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No items in the queue");
    }
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}

export default Queue;
