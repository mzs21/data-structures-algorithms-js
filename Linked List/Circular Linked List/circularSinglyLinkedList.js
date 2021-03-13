const SinglyLinkedList = require('../singlyLinkedList.js');

class CircularSinglyLinkedList extends SinglyLinkedList
{
    
    printCircularLinkedList()
    {
        let current = this.head;

        console.log('Circular Singly Linked List:');

        for (let i = 0; i < this.size; i++) 
        {   
            console.log(current);
            current = current.next;

            if(current.next === null) current.next = this.head;
        }
    }
}

// The lines below are not part of the data structure

/*
const circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.prepend(100);
circularSinglyLinkedList.append(500);

circularSinglyLinkedList.prepend(300);

circularSinglyLinkedList.append(1000);

circularSinglyLinkedList.insertAt(400,2);

circularSinglyLinkedList.insertAt(200,0);

circularSinglyLinkedList.length();
circularSinglyLinkedList.printData();

circularSinglyLinkedList.printLinkedList();

circularSinglyLinkedList.printCircularLinkedList();

circularSinglyLinkedList.getData(300);
circularSinglyLinkedList.getData(3000);
circularSinglyLinkedList.getIndex(4);

circularSinglyLinkedList.removeIndex(2);

circularSinglyLinkedList.length();

circularSinglyLinkedList.printData();

circularSinglyLinkedList.printCircularLinkedList();

circularSinglyLinkedList.clear();

circularSinglyLinkedList.length();

circularSinglyLinkedList.printData();
*/