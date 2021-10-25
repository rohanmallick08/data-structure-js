// Implement the DoublyLinked List
// 10 <--> 20 <--> 4

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinekedList {
  constructor (value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O(1) - time
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  // 4 -- 5 --6
  prepend(value) {
    // O(1) - time
    const node = new Node(value)
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
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

  len() {
    console.log(this.length);
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
    let nextNode = currentNode.next;
    node.next = nextNode
    node.prev = currentNode;
    currentNode.next = node;
    nextNode.prev = node;
    this.length++
  }

  remove(index) {
    // O(n) - time
    if (this.head === null) {
      return 'List is empty';
    }
    if (index === 0) {
      let newHead = this.head.next;
      if (newHead) {
          newHead.prev = null;
      }
      
      this.head = newHead;
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

    let nodeToRemove = currentNode.next;
    let nextNode = nodeToRemove.next;

    currentNode.next = nodeToRemove.next;
    if (nextNode !== null) {
      nextNode.prev = currentNode;
    }
    this.length--;
  }
}

var L1 = new DoublyLinekedList(10);
L1.append(5)
L1.append(6)
L1.append(7)
L1.prepend(3)
console.log(L1.print())
L1.insert(4, 5)
console.log(L1.print())
L1.remove(2)
console.log(L1.print())
L1.remove(0)
console.log(L1.print())
L1.remove(1)
console.log(L1.print())
L1.remove(1)
console.log(L1.print())
L1.len();
L1.remove(0)
L1.len();
console.log(L1.remove(0))