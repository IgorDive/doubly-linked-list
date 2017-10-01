const Node = require('./node');

class LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this._length == 0) {this.head = this.tail = node; this._length++;}
        if (this._length != 0) {node.previous = this.head; this.head.next = node; this._length++;}
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        let currentNode = this.tail;

        if (index <= 0 && index > this._length) {alert("некорректный индекс")}
        if (index == 1) {return this.tail.data}
        if (index == this._length) {return this.head.data}
        if (index > 1 && index < this._length) {
            for (let i = 2; i <= index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.data;
        }
        return null;
    }

    insertAt(index, data) {
        let currentNode = this.tail;

        if (index <= 0 && index > this._length) {alert("некорректный индекс")}
        if (index == 1) {this.tail.data = data}
        if (index == this._length) {this.head.data = data}
        if (index > 1 && index < this._length) {
            for (let i = 2; i <= index; i++) {
                currentNode = currentNode.next;
            }
            currentNode.data = data;
        }
    }

    isEmpty() {
        if (this._length == 0) return true;
        return false;
    }

    clear() {
        this._length = 0;
        this.tail = null;
        this.head = null;
    }

    deleteAt(index) {
        let currentNode = this.tail;

        if (index <= 0 && index > this._length) {alert("некорректный индекс")}
        if (index == 1) {this.tail = this.tail.next; this.tail.previous = null;}
        if (index == this._length) {this.head = this.head.previous; this.head.next = null;}
        if (index > 1 && index < this._length) {
            for (let i = 2; i <= index; i++) {
                currentNode = currentNode.next;
            }
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
        }       
    }
    
    reverse() {
        if (this._length == 0) {
            alert("Список пуст");
            return;
        }
        if (this._length != 0) {
            let tempLink = null;
            let currentNode = this.tail;

            currentNode.previous = currentNode.next;
            currentNode.next = null;


            for (let i = 2; i < this._length; i++) {
                currentNode = currentNode.previous;
                tempLink = currentNode.next;
                currentNode.next = currentNode.previous;
                currentNode.previous = tempLink;
            }

            currentNode = currentNode.previous;
            currentNode.next = currentNode.previous;
            currentNode.previous = null;

            tempLink = this.tail;
            this.tail = this.head;
            this.head = tempLink;
        }
    }
    
    indexOf(data) {
        let currentNode = this.tail;

        if (this.tail.data == data) return 1;
        if (this.head.data == data) return this._length;
        for (let i = 2; i < this._length; i++) {
            currentNode = currentNode.next;
            if (currentNode.data == data) return i;
        }
        alert("не существует");
        return null;
    }
}

module.exports = LinkedList;
