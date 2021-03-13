const DoublyLinkedList = require('../doublyLinkedList.js');

class CircularDoublyLinkedList extends DoublyLinkedList
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
const circularDoublyLinkedList = new CircularDoublyLinkedList();
circularDoublyLinkedList.prepend(100);
circularDoublyLinkedList.append(500);

circularDoublyLinkedList.prepend(300);

circularDoublyLinkedList.append(1000);

circularDoublyLinkedList.insertAt(400,2);

circularDoublyLinkedList.insertAt(200,0);

circularDoublyLinkedList.length();
circularDoublyLinkedList.printData();

circularDoublyLinkedList.printLinkedList();

circularDoublyLinkedList.printCircularLinkedList();

circularDoublyLinkedList.getData(300);
circularDoublyLinkedList.getData(3000);
circularDoublyLinkedList.getIndex(4);

circularDoublyLinkedList.removeIndex(2);

circularDoublyLinkedList.length();

circularDoublyLinkedList.printData();

circularDoublyLinkedList.printCircularLinkedList();

circularDoublyLinkedList.clear();

circularDoublyLinkedList.length();

circularDoublyLinkedList.printData();
*/