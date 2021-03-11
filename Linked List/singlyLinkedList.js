const Node = require('./singlyNode.js')
class SinglyLinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    // Prepends data
    prepend(data)                               // Time Complexity O(1)
    {
        this.head = new Node(data, this.head);
        this.size++

        console.log(`Data '${data}' is PREPENDED `);
    }
    
    // Appends data
    append(data)                                // Time Complexity O(n)
    {
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.head) this.head = node;
        else
        {
            current = this.head;

            while (current.next)
            {
                current = current.next;     // Traverse through the list
            }

            current.next = node;
        }

        this.size++;

        console.log(`Data '${data}' is APPENDED `);
    }

    // Inserts at any index
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

        while(count < index)
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

        while(current)
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

        while(current)
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
        this.outOfRange(index)

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(this.head === 0) this.head = current.next;
        else
        {
            while(count < index)
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

    // Prints Data(s) of Linked List
    printData()
    {
        let current = this.head;

        console.log('Data(s) of Linked List:');

        while (current) 
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

        while (current) 
        {   
            console.log(current);
            current = current.next;
        }
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

module.exports = SinglyLinkedList;
// Space Complexity O(n)
// The lines below are not part of the data structure

/*
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.prepend(100);
singlyLinkedList.prepend(200);
singlyLinkedList.prepend(300);

singlyLinkedList.append(500);

singlyLinkedList.insertAt(400,3);
// singlyLinkedList.insertAt(700,8); // Successfully throws error
singlyLinkedList.insertAt(700,5);
singlyLinkedList.insertAt(800,0);

singlyLinkedList.getData(1000);

singlyLinkedList.length();

singlyLinkedList.printData();

singlyLinkedList.reverseLinkedList();

console.log('After reversing: ');
singlyLinkedList.printData();

singlyLinkedList.getData(300);

singlyLinkedList.removeIndex(3);

singlyLinkedList.length();

singlyLinkedList.printData();

singlyLinkedList.printLinkedList();

singlyLinkedList.getData(500);

singlyLinkedList.getIndex(2);
singlyLinkedList.getIndex(9);

singlyLinkedList.reverseLinkedList();

console.log('After reversing: ');
singlyLinkedList.printData();

singlyLinkedList.clear();
singlyLinkedList.length();
singlyLinkedList.printData();
*/