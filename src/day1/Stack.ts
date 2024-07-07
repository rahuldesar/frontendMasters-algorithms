class Node<T> {
  public value: T;
  public prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    let newNode = new Node(item);
    if (this.head) {
      newNode.prev = this.head;
    }
    this.head = newNode;
  }

  pop(): T | undefined {
    if (this.length == 0) {
      return undefined;
    }

    this.length--;
    let topNode = this.head?.value;

    if (this.head) {
      this.head = this.head.prev;
    }

    return topNode;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
