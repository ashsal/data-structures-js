class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    console.log(current.data);

    while (current.next != null) {
      current = current.next;
      console.log(current.data);
    }
  }

  deleteByValue(dataToDelete) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    if (current.data === dataToDelete) {
      this.head = current.next;
      return;
    }

    let previous = null;
    while (current.next !== null) {
      previous = current;
      current = current.next;
      if (current.data === dataToDelete) {
        previous.next = current.next;
        return;
      }
    }
  }

  search(dataToSearch) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    if (current.data === dataToSearch) {
      return true;
    }

    while (current.next !== null) {
      current = current.next;
      if (current.data === dataToSearch) {
        return true;
      }
    }

    return false;
  }

  length() {
    if (this.head === null) {
      return 0;
    }

    let counter = 1;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      counter++;
    }
    return counter;
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.traverse();
console.log("deleting 2");
linkedList.deleteByValue(2);
linkedList.traverse();
console.log("adding 5 and 6");
linkedList.insertAtEnd(5);
linkedList.insertAtEnd(6);
linkedList.traverse();
console.log("deleting 5");
linkedList.deleteByValue(5);
linkedList.traverse();

console.log("Searching 4, result is ", linkedList.search(4));
console.log("Searching 10, result is ", linkedList.search(10));

console.log("Length of linked list is ", linkedList.length());
linkedList.insertAtEnd(11);
console.log("Length of linked list after adding 11 is ", linkedList.length());
