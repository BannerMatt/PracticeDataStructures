/*
 * This is a Double Linked List implementation in Javascript
 */
function DoubleLinkedList() {
    this.len = 0;
    this.head = null;
    this.tail = null;
}

DoubleLinkedList.prototype = {
    pushFront: function(val) {
        var node = {
            val: val,
            next: null,
            prev: null
        };
        if (this.len === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.len += 1;
    },

    pushBack: function(val) {
        var node = {
            val: val,
            next: null,
            prev: null
        };
        if (this.len === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.len += 1;
    },

    add: function(val) {
        this.pushBack(val);
    },

    /*
     * I am not happy with this implementation of insert as it
     * restricts insertion to an index instead of a specific node, 
     * traditional doubly linked lists have insert time of O(1) 
     * while this is O(n)
     * A quick google search shows this is a common limitation of
     * Javascript Doubly Linked List implementations
     */
    insert: function(index, val) {
        if (index === 0) {
            this.pushFront(val);
        } else if (index < this.len) {
            var node = {
                val: val,
                next: null,
                prev: null
            },
            hold = this.head,
            i = 0;

            for (i = 0; i < index; i++) {
                hold = hold.next;
            }

            node.prev = hold.prev;
            hold.prev.next = node;
            node.next = hold;
            hold.prev = node;

            this.len += 1;
        } else if (index === this.len) {
            this.pushBack(val);
        } else {
            alert('Invalid Index!');
        }
    },

    popFront: function() {
        if (this.len > 0) {
            var val = this.head.val;
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            }

            this.len -= 1;
            return val;
        } else {
            alert('No nodes defined!');
        }
    },

    popBack: function() {
        if (this.len > 0) {
            var val = this.tail.val;
            this.tail = this.tail.prev;
            if (this.tail !== null) {
                this.tail.next = null;
            }

            this.len -= 1;
            return val;
        } else {
            alert('No nodes defined!');
        }
    },

    get: function(index) {
        if (this.len > 0) {
            if (index === 0) {
                return this.head.val;
            } else if (index === this.len-1) {
                return this.tail.val;
            } else if (index < this.len) {
                var hold = this.head,
                i = 0;

                for (i = 0; i < index; i++) {
                    hold = hold.next;
                }

                return hold.val;
            } else {
                alert('Invalid Index!');
            }
        } else {
            alert('No nodes defined!');
        }
    },

    /*
     * I am not happy with this implementation of remove as it
     * restricts deletion to an index instead of a specific node, 
     * traditional doubly linked lists have remove time of O(1) 
     * while this is O(n)
     * A quick google search shows this is a common limitation of
     * Javascript Doubly Linked List implementations
     */
    remove: function(index) {
        if (index === 0) {
            this.popFront();
        } else if (index === this.len-1) {
            this.popBack();
        } else if (index < this.len) {
            var hold = this.head,
            i = 0;

            for (i = 0; i < index; i++) {
                hold = hold.next;
            }

            var val = hold.val;
            hold.prev.next = hold.next;
            hold.next.prev = hold.prev;

            this.len -= 1;
            return val;
        } else {
            alert('Invalid Index!');
        }
    }
};
