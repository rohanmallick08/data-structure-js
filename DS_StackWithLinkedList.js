// Implement the Stack with LinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    push(value) {
        var node = new Node(value)
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++
        return this;
    }

    peak() {
        if (!this.top) return 'Stack is empty';
        return this.top.value;
    }

    pop() {
        if (!this.top) return null;
        var popNode = this.top;
        this.top = this.top.next;
        this.length--;
        if(this.length === 0) this.bottom = null;
        return this;
    }
}

var stck = new Stack();
stck.push('Google');
stck.push('Facebook');
stck.push('Twitter');
stck.peak();
stck.pop();
stck.pop();
stck.pop();
