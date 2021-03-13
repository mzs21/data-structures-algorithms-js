const SinglyLinkedList = require('../singlyLinkedList.js');

class SortedSinglyLinkedList extends SinglyLinkedList
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

const sortedSinglyLinkedList = new SortedSinglyLinkedList();
sortedSinglyLinkedList.prepend(100);
sortedSinglyLinkedList.prepend(250);
sortedSinglyLinkedList.prepend(3000);

sortedSinglyLinkedList.append(500);

sortedSinglyLinkedList.insertAt(400,3);
// singlyLinkedList.insertAt(700,8); // Successfully throws error
sortedSinglyLinkedList.insertAt(700,5);
sortedSinglyLinkedList.insertAt(800,0);

sortedSinglyLinkedList.printData();

sortedSinglyLinkedList.printLinkedList();

sortedSinglyLinkedList.sortLinkedList();

sortedSinglyLinkedList.printSortedLinkedListData();

sortedSinglyLinkedList.printLinkedList();