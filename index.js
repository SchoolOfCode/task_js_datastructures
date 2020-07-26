// Make a Queue class to manage a queue system with two methods, add and serve - first in, first out

class Queue {
  constructor() {
    this.line = [];
  }

  serve() {
    if (this.line.length > 0) {
      return this.line.shift();
    }
    throw Error("Queue is empty");
  }

  add(item) {
    return this.line.push(item);
  }
}

// Make a Stack class to manage a stack system with two methods, add and serve - last in, last out

class Stack {
  constructor() {
    this.pile = [];
  }

  serve() {
    if (this.pile.length > 0) {
      return this.pile.pop();
    }
    throw Error("Stack is empty");
  }

  add(item) {
    return this.pile.push(item);
  }
}

// Make a PriorityQueue class to manage a queue system with two methods, add and serve - served in order of priority
// The add method should now take in 2 arguments, first the item, and second the priority which will be a number (the higher the number, the higher the priority)

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  serve() {
    if (this.list.length > 0) {
      return this.list.sort((a, b) => b.priority - a.priority).shift().item;
    }
    throw Error("PriorityQueue is empty");
  }

  add(item, priority = 0) {
    return this.list.push({ item, priority });
  }
}

module.exports = { Queue, Stack, PriorityQueue };
