class DoublyLinkedNode<T> {
  value: T;
  prev?: DoublyLinkedNode<T>;
  next?: DoublyLinkedNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: DoublyLinkedNode<T>;
  private tail?: DoublyLinkedNode<T>;

  constructor() {
    this.length = 0;
  }

  append(item: T): void {
    let newNode = new DoublyLinkedNode(item);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentTailNode = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = currentTailNode;
    }

    this.length++;
  }

  prepend(item: T): void {
    let newNode = new DoublyLinkedNode(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHeadNode = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = currentHeadNode;
    }
    this.length++;
  }

  get(idx: number): T | undefined {
    if (idx > this.length || !this.head) {
      return undefined;
    } else {
      let currentNode = this.head;
      for (let index = 1; index <= idx; index++) {
        if (!currentNode.next) {
          return undefined;
        }
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }

  remove(item: T): T | undefined {
    if (!this.head || !this.tail) {
      return undefined;
    }

    let currentNode = this.head;
    for (let index = 0; index < this.length; index++) {
      if (currentNode.value == item) {
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        }

        if (index == 0) {
          this.head = this.head.next;
          if (this.head) {
            this.head.prev = undefined;
          }
        }

        if (index == this.length - 1) {
          this.tail = this.tail.prev;
          if (this.tail) {
            this.tail.next = undefined;
          }
        }

        this.length--;
        return currentNode.value;
      }

      if (!currentNode.next) return undefined;
      currentNode = currentNode.next;
    }

    return undefined;
  }

  removeAt(idx: number): T | undefined {
    if (!this.head || !this.tail || idx > this.length) {
      return undefined;
    }

    if (this.length == 1 && idx == 0) {
      const answerNode = this.head;
      this.length = 0;
      this.tail = undefined;
      this.head = undefined;
      return answerNode.value;
    }

    if (idx == 0) {
      const answerNode = this.head;

      this.head = this.head.next;

      if (this.head) {
        this.head.prev = undefined;
      }

      this.length--;
      return answerNode.value;
    }

    if (idx == this.length - 1) {
      const answerNode = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = undefined;
      }
      this.length--;
      return answerNode.value;
    }

    let currentNode = this.head;

    for (let index = 1; index <= idx; index++) {
      if (!currentNode.next) {
        return undefined;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.prev) {
      currentNode.prev.next = currentNode.next;
    }
    if (currentNode.next) {
      currentNode.next.prev = currentNode.prev;
    }
    this.length--;
    return currentNode.value;
  }

  insertAt(item: T, idx: number): void {
    let newNode = new DoublyLinkedNode(item);

    if ((!this.head || !this.tail) && idx == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }

    if (idx > this.length || !this.head || !this.tail) {
      throw "INVALID";
    }
    let currentNode = this.head;

    for (let index = 1; index <= idx; index++) {
      if (!currentNode.next) {
        throw "error";
      }
      currentNode = currentNode.next;
    }

    if (currentNode.prev) {
      currentNode.prev.next = newNode;
    }
    newNode.prev = currentNode.prev;
    newNode.next = currentNode;
    currentNode.prev = newNode;
  }
}
