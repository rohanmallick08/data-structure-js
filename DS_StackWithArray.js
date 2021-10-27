// Implement the Stack with Array


class Stack {
    constructor() {
       this.array = []
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    peak() {
        return this.array[this.array.length - 1];
    }

    pop() {
        this.array.pop();
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
