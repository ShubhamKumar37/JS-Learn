// Node class representing a single node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class representing the entire linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insertion operations

  // Insert at the beginning of the linked list
  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Insert at the end of the linked list
  insertAtTail(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Insert at a specific position in the linked list
  insertAtPosition(data, position) {
    if (position < 0 || position > this.length) {
      throw new Error("Invalid position");
    }
    if (position === 0) {
      this.insertAtHead(data);
    } else if (position === this.length) {
      this.insertAtTail(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      for (let i = 0; i < position - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  // Deletion operations

  // Delete from the beginning of the linked list
  deleteFromHead() {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return data;
  }

  // Delete from the end of the linked list
  deleteFromTail() {
    if (this.tail === null) {
      throw new Error("Linked list is empty");
    }
    const data = this.tail.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return data;
  }

  // Delete a node with a specific value from the linked list
  deleteNodeWithValue(value) {
    if (this.head === null) {
      throw new Error("Linked list is empty");
    }
    if (this.head.data === value) {
      this.deleteFromHead();
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.data === value) {
          current.next = current.next.next;
          if (current.next === null) {
            this.tail = current;
          }
          this.length--;
          return;
        }
        current = current.next;
      }
    }
  }

  // Print the linked list
  print() {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr.join(" -> "));
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);
linkedList.print(); // Output: 3 -> 2 -> 1
linkedList.insertAtTail(4);
linkedList.print(); // Output: 3 -> 2 -> 1 -> 4
linkedList.insertAtPosition(5, 2);
linkedList.print(); // Output: 3 -> 2 -> 5 -> 1 -> 4
linkedList.deleteFromHead();
linkedList.print(); // Output: 2 -> 5 -> 1 -> 4
linkedList.deleteFromTail();
linkedList.print(); // Output: 2 -> 5 -> 1
linkedList.deleteNodeWithValue(5);
linkedList.print(); // Output: 2 -> 1