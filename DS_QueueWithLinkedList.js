// Implement the Queue with LinkedList
// Pros and Cons of Stack and Queue
// 1. Fast Operation
// 2. Fast peak
// 3. Ordered
// Cons - Slow Lookup

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
       this.first = null;
       this.last = null;
       this.length = 0;
    }

    peak() {
        return this.first;
    }

    enqueue(value) {
        var node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            // 5 -- 4 --3
            this.last.next = node;
            this.last = node
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) return null;
        const firstNode = this.first;
        this.first = firstNode.next;
        this.length--;
        if (this.length === 0) this.last = null;
        return this;
    }
}

var que = new Queue();
que.enqueue('Google');
que.enqueue('Facebook');
que.enqueue('Twitter');
que.dequeue()
que.dequeue()
que.dequeue()
que.peak()

