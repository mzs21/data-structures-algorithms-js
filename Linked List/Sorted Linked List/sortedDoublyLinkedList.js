const DoublyLinkedList = require('../doublyLinkedList.js');

class SortedDoublyLinkedList extends DoublyLinkedList
{
    sortLinkedList()
    {
        let current = this.head;
        let index = null;
        let temp;
        if(current === null) return;
        else
        {
            while(current !== null)
            {
                index = current.next; // Will point to the next value of current

                while(index !== null)
                {
                    //The following 'if' block will sort ascending
                    // Change '>' to '<' to sort descending
                    if(current.data > index.data)
                    {
                        temp = current.data;
                        current.data = index.data;
                        index.data = temp;
                    }
                    index = index.next;
                }
                current = current.next;
            }
        }
    }

    printSortedLinkedListData()
    {
        let current = this.head;

        console.log('Sorted Data(s) of Linked List:');

        for (let i = 0; i < this.size; i++)
        {
            console.log(`Data: ${current.data}`);
            current = current.next;
        }
    }
}

/*
const sortedDoublyLinkedList = new SortedDoublyLinkedList();
sortedDoublyLinkedList.prepend(100);
sortedDoublyLinkedList.prepend(250);
sortedDoublyLinkedList.prepend(3000);

sortedDoublyLinkedList.append(500);

sortedDoublyLinkedList.insertAt(400,3);
// singlyLinkedList.insertAt(700,8); // Successfully throws error
sortedDoublyLinkedList.insertAt(700,5);
sortedDoublyLinkedList.insertAt(800,0);

sortedDoublyLinkedList.printData();

sortedDoublyLinkedList.printLinkedList();

sortedDoublyLinkedList.sortLinkedList();

sortedDoublyLinkedList.printSortedLinkedListData();

sortedDoublyLinkedList.printLinkedList();
*/