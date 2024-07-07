class Node<T> {
  public value: T;
  public next?: Node<T>;
  constructor(value: T) {
    this.value = value;
  }
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  enqueue(item: T): void {
    let newNode = new Node(item);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    let olderHead = this.head;
    this.head = this.head.next;
    this.length--;
    return olderHead?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
