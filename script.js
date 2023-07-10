class LinkedList {
  constructor(node = null) {
    this.node = node;
  }

  append(value) {
    const node = new Node(value);
    if (this.node === null) this.node = node;
    else {
      let current = this.node;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }
  prepend(value) {
    const node = new Node(value, this.node);
    this.node = node;
  }
  size() {
    if (this.node === null) return 0;
    else {
      let nodeSize = 1;
      let current = this.node;
      while (current.nextNode !== null) {
        nodeSize += 1;
        current = current.nextNode;
      }
      return nodeSize;
    }
  }
  head() {
    return this.node;
  }
  tail() {
    let current = this.node;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    let currentNode = this.node;
    for (let i = 0; i < index; i++) {
      if (!currentNode) throw new Error('No item at this index');
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  pop() {
    if (this.node === null) return;
    else if (this.node.nextNode === null) {
      this.node = null;
      return;
    }
    let current = this.node;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(value) {
    let current = this.node;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    if (this.contains(value)) {
      let current = this.node;
      for (let i = 0; current !== null; i++) {
        if (current.value === value) return i;
        else {
          current = current.nextNode;
        }
      }
    } else return null;
  }
  toString() {
    let linkedStrings = '';
    let current = this.node;
    while (current !== null) {
      linkedStrings += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    linkedStrings += 'null';
    return linkedStrings;
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.at(0);
      this.node = newNode;
      return;
    }
    const nodeToAppendTo = this.at(index - 1);
    const nodeToPrependTo = this.at(index);
    nodeToAppendTo.nextNode = newNode;
    newNode.nextNode = nodeToPrependTo;
  }
  removeAt(index) {
    const nodeToDelete = this.at(index);
    if (index === 0) {
      this.node = this.at(1);
      return;
    }
    const nodeBeforeDeleteIndex = this.at(index - 1);
    const nodeAfterDeleteIndex = this.at(index + 1);
    nodeBeforeDeleteIndex.nextNode = nodeAfterDeleteIndex;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const linkedList = new LinkedList();

linkedList.append('1');
linkedList.append('2');
linkedList.append('3');
linkedList.append('4');
linkedList.append('5');

// console.log(linkedList);
linkedList.removeAt(5);
console.log(linkedList.toString());
