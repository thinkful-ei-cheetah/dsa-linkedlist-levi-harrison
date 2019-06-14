const _Node = require('./Node');

class DLL {
    constructor() {
        this.head = null;
    }

    display() {
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    
    insertFirst(item) {
        if (this.head === null) {
            this.head = new _Node(item, null);
        } else {
            let node = this.head;
            this.head.previous = new _Node(item, this.head)
            this.head = node.previous;
        }
    }

    insertLast(item) {
        if (this.head ===null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }

            tempNode.next = new _Node(item, null, tempNode);
        }
    }

    insertBefore(insertItem, value) {
        let currentNode = this.head;

        while (value !== currentNode.next.value) {
            currentNode = currentNode.next;
        }
        let findValue = this.find(value);

        currentNode.next = new _Node(insertItem, findValue, currentNode);
    }

    insertAfter(insertItem, value) {
        let findValue = this.find(value);
        let tempNext = findValue.next;
        findValue.next = new _Node(insertItem, tempNext, findValue);
    }

    insertAt(insertItem, position) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode.next !== null) {
            count++;

            if(count === position) {
                this.insertBefore(insertItem, currentNode.value)
            }
            currentNode = currentNode.next;
        }
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            this.head.previous = null;
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode !== null && currentNode.value !== item) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            console.log('Item not found');
            return;
        }

        previousNode.next = currentNode.next;
        currentNode.next.previous = previousNode;
    }

    find(item) {
        let currentNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currentNode.value !== item) {
            if (currentNode.next === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }

        return currentNode;
    }

}

module.exports = DLL;