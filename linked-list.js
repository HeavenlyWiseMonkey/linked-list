class Node {
    constructor(data=null, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head=null) {
        this.head = head;
        let point = head;
        while (point.next) {
            point = point.next;
        }
        this.tail = point;
        this.size = (head) ? 1 : 0;
    }
    append(value) {
        let point = this.tail;
        const node = new Node(value);
        point.next = node;
        this.tail = point.next;
        this.size ++;
    }
    prepend(value) {
        let point = this.head;
        const node = new Node(value);
        node.next = point;
        this.head = node;
        this.size ++;
    }
    getSize() {
        return this.size;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    at(index) {
        let point = this.head;
        while (point) {
            if (index===0) {
                return point;
            }
            point = point.next;
            index--;
        }
        return null;
    }
    pop() {
        let point = this.head;
        while (point.next!==this.tail) {
            point = point.next
        }
        this.tail = point;
        this.size --;
    }
    contains(value) {
        let point = this.head;
        while (point) {
            if (point.data===value) {
                return true;
            }
            point = point.next;
        }
        return false;
    }
    find(value) {
        let point = this.head;
        let index = 0;
        while (point) {
            if (point.data===value) {
                return index;
            }
            point = point.next;
        }
        return null;
    }
    toString() {
        let point = this.head;
        let listString = '';
        while (point) {
            listString = listString.concat(`( ${point.data} ) -> `);
            point = point.next;
        }
        listString = listString.concat('null');
        return listString;
    }
    insertAt(value, index) {
        let point = this.head;
        let node = new Node(value);
        if (index===0) {
            this.head = node;
            this.head.next = point;
            return;
        }
        else if (index===this.size) {
            point = this.tail;
            this.tail = node;
            this.point.next = this.tail;
            return;
        }
        else if (index>this.size) {
            return;
        }
        while (point) {
            if (index===1) {
                node.next = point.next;
                point.next = node;
            }
            point = point.next;
            index--;
        }
        this.size ++;
    }
    removeAt(index) {
        let point = this.head;
        if (index===0) {
            this.head = this.head.next;
            return;
        }
        else if (index>=this.size) {
            return;
        }
        while (point) {
            if (index===1) {
                if (point.next === this.tail) {
                    this.tail = point;
                }
                point.next = point.next.next;
            }
            point = point.next;
            index--;
        }
        this.size --;
    }
}

const list = new LinkedList(new Node(1));
list.append(2);
list.prepend(4);
list.insertAt(5, 1);
list.removeAt(1);
console.log(list.toString());
