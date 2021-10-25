// Implement the Linked List
// 10 --> 20 --> 4

/*
Cons -
  1. Fast Insetion
  2. Fast Deletion
  3. Ordered
  4. Flexible Size
  5. Low level DS

Pros -
  1. Slow Lookup
  2. More Memory

Use Case
  1. File System
  2. Browser History
  3. Hash Table collision

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinekedList {
  constructor (value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O(1) - time
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  // 4 -- 5 --6
  prepend(value) {
    // O(1) - time
    const node = new Node(value)
    node.next = this.head;
    this.head = node;
    this.length++
  }

  print() {
    // O(n) - time
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array.join('--->');
  }

  insert(index, value) {
    // O(n) - time
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const node = new Node(value);
    var currentIndex = 0;
    let currentNode = this.head;
    // 1.2.3.4
    while(currentNode !== null && currentIndex !== index-1) {
      currentIndex++;
      currentNode = currentNode.next;
    } 
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++
  }

  remove(index) {
    // O(n) - time
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (index > this.length - 1) {
      return 'Invalid Index';
    }

    var currentIndex = 0;
    var currentNode = this.head;
    
    while (currentNode !== null && currentIndex !== index-1) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    this.length--;
  }

  reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
  
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      return this.print();
    }
}

var L1 = new LinekedList(10);
L1.append(5)
L1.append(4)
L1.prepend(3)
L1.prepend(2)
console.log(L1.print())
L1.insert(0, 5)
console.log(L1.print())
L1.remove(2)
console.log(L1.print())
L1.remove(4)
console.log(L1.print())
L1.remove(4)
console.log(L1.print())