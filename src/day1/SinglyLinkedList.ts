class SinglyListNode<T> {
  value: T;
  next?: SinglyListNode<T>;

  constructor(item: T) {
    this.value = item;
  }
}

export default class SinglyLinkedList<T> {
  public length: number;
  public head?: SinglyListNode<T>;

  constructor() {
    this.length = 0;
  }
  append(item: T): void {
    const newNode = new SinglyListNode(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }
  prepend(item: T): void {
    this.length++;
    let newNode = new SinglyListNode(item);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  insertAt(item: T, idx: number): void {
    if (idx >= this.length) {
      throw "invalid index";
    }
    this.length++;

    let newNode = new SinglyListNode(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next as SinglyListNode<T>;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  get(idx: number): T | undefined {
    if (!this.head) {
      return undefined;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        if (currentNode.next) currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === item) {
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value;
    }

    let currentNode: SinglyListNode<T> | undefined = this.head;

    while (currentNode?.next) {
      if (currentNode.next.value === item) {
        const value = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        this.length--;
        return value;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length || !this.head) {
      // Index is out of bounds or the list is empty
      return undefined;
    }
    if (idx == 0) {
      let value = this.head?.value;
      this.head = this.head?.next;
      this.length--;
      return value;
    }

    let prevNode = this.head;
    for (let i = 1; i < idx; i++) {
      if (!prevNode?.next) {
        return undefined;
      }
      prevNode = prevNode.next;
    }

    if (prevNode?.next) {
      const targetNode = prevNode.next;
      prevNode.next = targetNode.next;
      this.length--;
      return targetNode.value;
    }

    return undefined;
  }
}

let list = new SinglyLinkedList();

list.append(5);
list.append(7);
list.append(9);

console.log(list.head?.next);
