const _Node = require('./node')

class LinkedList {
  constructor() {
    // all we have is a head
    this.head = null;
  }
  // Insertion (excluding inserting in the middle)
  insertFirst(item) {
    // create a node and point to curr head
    this.head = new _Node(item, this.head)
  }
  insertLast(item) {
    // empty list?
    if(this.head === null){
      this.insertFirst(item)
    }
    // loop till the end
    else {
      let tempNode = this.head
      while(tempNode.next !== null) {
        tempNode = tempNode.next
      }
      // add a new node to the end
      tempNode = new _Node(item, null)
    }
  }
  // Retrieval
  find(item) {
    let currNode = this.head
    // empty list?
    if(!this.head) {
      return null
    }
    // loop till we find item
    while(currNode.value !== item) {
      // exit/return if we don't find item
      if (currNode.next === null) {
        return null
      }
      // iterate to next node
      else {
        currNode = currNode.next;
      }
    }
    // return the node with that value (since we didn't reach the end)
    return currNode
  }
  // Removal
  remove(item) {
    // empty list?
    if(!this.head) {
      return null
    }
    // deleting the head?
    if(this.head.value === item) {
      this.head = this.head.next
    }
    // initialize
    let currNode = this.head
    let prevNode = this.head
    // loop till the end or we find the item
    while((currNode !== null) && (currNode.value !== item)) {
      //increment prev and curr nodes
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null) {
      console.log('Item not found')
      return
    }
    // remove currNode from the list
    prevNode.next = currNode.next
  }
}

module.exports = LinkedList