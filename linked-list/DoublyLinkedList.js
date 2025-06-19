class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentLastNode = this.tail;
      currentLastNode.next = newNode;
      newNode.previous = currentLastNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentStartNode = this.head;
      newNode.next = currentStartNode;
      currentStartNode.previous = newNode;
      this.head = newNode;
    }
  }

  traverseFromStart() {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== null);
  }

  traverseFromEnd() {
    if (this.tail === null) {
      return;
    }
    let current = this.tail;
    do {
      console.log(current.data);
      current = current.previous;
    } while (current != null);
  }

  delete(dataToDelete) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    while (current !== null) {
      if (current.data === dataToDelete) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.previous = null;
          }
        }

        if (current === this.tail) {
          this.tail = current.previous;
          if (this.tail) {
            this.tail.next = null;
          }
        }

        if (current.previous) {
          current.previous.next = current.next;
        }

        if (current.next) {
          current.next.previous = current.previous;
        }
      }
      current = current.next;
    }
  }

  search(valueToSearch) {
    if (this.head == null) {
      return false;
    }

    let current = this.head;
    do {
      if (current.data === valueToSearch) {
        return true;
      }
      current = current.next;
    } while (current != null);

    return false;
  }

  length() {
    if (this.head == null) {
      return 0;
    }

    let result = 0;
    let current = this.head;
    do {
      current = current.next;
      result++;
    } while (current !== null);

    return result;
  }
}

const doubly = new DoublyLinkedList();
doubly.append(2);
doubly.traverseFromStart();
console.log("adding 1");
doubly.prepend(1);
doubly.traverseFromStart();
console.log("Traverse from end");
doubly.traverseFromEnd();
console.log("Appending 3 4 5");
doubly.append(3);
doubly.append(4);
doubly.append(5);
doubly.traverseFromStart();
console.log("Deleting 1");
doubly.delete(1);
doubly.traverseFromStart();
console.log("Deleting 5");
doubly.delete(5);
doubly.traverseFromStart();
console.log("Deleting 3");
doubly.delete(3);
doubly.traverseFromStart();

console.log("Appending 6 7 8");
doubly.append(6);
doubly.append(7);
doubly.append(8);
doubly.traverseFromStart();
console.log("finding 7, result is ", doubly.search(7));
console.log("finding 9, result is ", doubly.search(9));
console.log("Length is ", doubly.length());

console.log("New Doubly Linked List");
const doublyList = new DoublyLinkedList();
doublyList.append(10);
doublyList.delete(10);
console.log("Traversing after appending and deleting 10 ", doublyList.length());
doublyList.traverseFromStart();
console.log("Appending 11 and 12");
doublyList.append(11);
doublyList.append(12);
doublyList.traverseFromStart();
doublyList.delete(11);
doublyList.traverseFromStart();
