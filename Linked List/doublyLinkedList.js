const Node = require('./doublyNode.js')
class DoublyLinkedList
{
    constructor()
    {
        this.head = this.tail = null;
        this.size = 0;
    }

    prepend(data)                   // Time Complexity O(1)
    {
        if(!this.head) this.head = this.tail = new Node(data);
        else
        {
            let oldHead = this.head;
            this.head = new Node(data);
            oldHead.previous = this.head;
            this.head.next = oldHead;
        }

        this.size++

        console.log(`Data '${data}' is PREPENDED `);
    }

    // Appends data
    append(data)                    // Time Complexity O(n)
    {
        // If empty, make head
        if(!this.tail) this.head = this.tail = new Node(data);
        else
        {
            let oldTail = this.tail;
            this.tail = new Node(data);
            oldTail.next = this.tail;
            this.tail.previous = oldTail;
        }

        this.size++;

        console.log(`Data '${data}' is APPENDED `);
    }

    // Prints Data(s) of Linked List
    printData()
    {
        let current = this.head;

        console.log('Linked List:');

        for (let i = 0; i < this.size; i++)
        {
            console.log(`Data: ${current.data}`);
            current = current.next;
        }
    }

    // Prints Linked List
    printLinkedList()
    {
        let current = this.head;

        console.log('Linked List:');

        for (let i = 0; i < this.size; i++)
        {
            console.log(current);
            current = current.next;
        }
    }

    insertAt(data, index)                       // Time Complexity O(n)
    {
        // If index is out of range
        this.outOfRange(index);

        // If first index
        if(index === 0) return this.prepend(data);

        const node = new Node(data);

        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        for(let count = 0; count < index; count++)
        {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;

        console.log(`Data '${data}' is INSERTED at index ${index}`);
    }

    // Gets the value of an index
    getIndex(index) 
    {
        let current = this.head;
        let count = 0;

        for(let i =0; i < this.size; i++)
        {
            if(count === index) console.log(`Data at index ${index} is: ${current.data}`);
            count++;
            current = current.next;
        }
        
        if(index > count) console.log("Index doesn't exist");    
    }

    // Gets the index of an data
    getData(data)
    {
        let current = this.head;
        let index = -1;
        let found = 0;

        for(let i =0; i < this.size; i++)
        {
            index++;
            if(current.data === data)
            {
                found = 1;
                console.log(`Data ${current.data} is at index ${index}`);
            }
            current = current.next;
        }

        if(!found) console.log("Data doesn't exist");;
    }

    // Removes Index
    removeIndex(index)                          // Time Complexity O(n)
    {
        // If index is out of range
        this.outOfRange(index);

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(this.head === 0) this.head = current.next;
        else
        {
            for(let count = 0; count < index; count++)
            {
                count++;
                previous = current;
                current = current.next;
            }
            
            previous.next = current.next;
        }

        this.size--;

        console.log(`Data '${current.data}' is REMOVED from index ${index}`);
    }
    
    // Clears Linked list
    clear()
    {
        this.head = null;
        this.size = 0;
    }

    // If index is out of range
    outOfRange(index)
    {
        if(index > 0 && index > this.size) throw new RangeError("Index out of range");
    }
    // Size of Linked List
    length()
    {
        console.log(`Length of Linked List: ${this.size}`);
    }

    // Reverses Linked list
    reverseLinkedList()
    {
        let current = this.head;
        let previous = null;
        let next = null;

        console.log('Reversed Linked List:')

        while (current !== null) 
        {
            next = current.next;
            current.next = previous;
            console.log(current);
            previous = current;
            current = next;
        }
        this.head = previous;
        
    }
}

module.exports = DoublyLinkedList;
// Space Complexity O(n)
// The lines below are not part of the data structure

/*
const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

doublyLinkedList.prepend(100);

doublyLinkedList.insertAt(400,3);
//doublyLinkedList.insertAt(700,8); // Successfully throws error
doublyLinkedList.prepend(50);

doublyLinkedList.getData(1000);

doublyLinkedList.length();

doublyLinkedList.printData();

doublyLinkedList.reverseLinkedList();

console.log('After reversing: ');
doublyLinkedList.printData();

doublyLinkedList.getData(300);

doublyLinkedList.removeIndex(3);

doublyLinkedList.length();

doublyLinkedList.printData();

doublyLinkedList.printLinkedList();

doublyLinkedList.getData(100);

doublyLinkedList.getIndex(2);
doublyLinkedList.getIndex(9);

doublyLinkedList.reverseLinkedList();

console.log('After reversing: ');
doublyLinkedList.printData();

doublyLinkedList.clear();
doublyLinkedList.length();

doublyLinkedList.printLinkedList();
*/