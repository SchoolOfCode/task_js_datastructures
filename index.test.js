const { Queue, Stack, PriorityQueue } = require("./");

describe("Queue", function () {
  it("should serve items in the order they were added (first come, first served)", function () {
    const actual = new Queue();
    actual.add(1);
    actual.add(2);
    actual.add(3);

    expect(actual.serve()).toBe(1);
    expect(actual.serve()).toBe(2);
    expect(actual.serve()).toBe(3);
  });
  it("should throw an error when serving an empty queue", function () {
    const actual = new Queue();
    actual.add(1);

    expect(actual.serve()).toBe(1);
    expect(() => actual.serve()).toThrow(/Queue is empty/i);
  });
});

describe("Stack", function () {
  it("should serve items in the reverse order they were added (top of pile first)", function () {
    const actual = new Stack();
    actual.add(1);
    actual.add(2);
    actual.add(3);

    expect(actual.serve()).toBe(3);
    expect(actual.serve()).toBe(2);
    expect(actual.serve()).toBe(1);
  });
  it("should throw an error when serving an empty stack", function () {
    const actual = new Stack();
    actual.add(1);

    expect(actual.serve()).toBe(1);
    expect(() => actual.serve()).toThrow(/Stack is empty/i);
  });
});

describe("PriorityQueue", function () {
  it("should serve items in order of priority", function () {
    const actual = new PriorityQueue();
    actual.add(1, 3);
    actual.add(2, 1);
    actual.add(3, 10);

    expect(actual.serve()).toBe(3);
    expect(actual.serve()).toBe(1);
    expect(actual.serve()).toBe(2);
  });
  it("should throw an error when serving an empty queue", function () {
    const actual = new PriorityQueue();
    actual.add(1, 1);

    expect(actual.serve()).toBe(1);
    expect(() => actual.serve()).toThrow(/PriorityQueue is empty/i);
  });
  it("should order by time added (normal queue) when priority is equal", function () {
    const actual = new PriorityQueue();
    actual.add(1, 3);
    actual.add(2, 3);
    actual.add("a", 3);
    actual.add("b", 3);
    actual.add("c", 3);
    actual.add("d", 3);
    actual.add("e", 3);
    actual.add(3, 5);
    actual.add(4, 5);
    actual.add(5, 1);

    expect(actual.serve()).toBe(3);
    expect(actual.serve()).toBe(4);
    expect(actual.serve()).toBe(1);
    expect(actual.serve()).toBe(2);
    expect(actual.serve()).toBe("a");
    expect(actual.serve()).toBe("b");
    expect(actual.serve()).toBe("c");
    expect(actual.serve()).toBe("d");
    expect(actual.serve()).toBe("e");
    expect(actual.serve()).toBe(5);
  });
  it("should work when not given priorities (default priority)", function () {
    const actual = new PriorityQueue();
    actual.add(1);
    actual.add(2);
    actual.add(3);

    expect(actual.serve()).toBe(1);
    expect(actual.serve()).toBe(2);
    expect(actual.serve()).toBe(3);
  });
});
