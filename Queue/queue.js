class Queue
{
    constructor() 
    {
        this.items = [];
    }

    // Add element to the front of the Queue
    enqueue(element)                                    // Time Complexity O(1)
    {
        console.log(`${element} enqueued`)
        return this.items.unshift(element);
    }

    // Remove element from the front of the Queue
    dequeue()                                           // Time Complexity O(n)
    {
        let shiftedElem = this.items.shift();
        console.log(`${shiftedElem} dequeued`)
        return shiftedElem
    }
    
    // Front value of Queue
    front()
    {
        console.log(`Front value: ${this.items[0]} `);
        return this.items[0];
    }

    // Rear value of Queue
    rear()
    {
        console.log(`Rear value: ${this.items[this.items.length-1]} `);
        return this.items[this.items.length-1];
    }

    // Size of Queue
    size()
    {
        console.log(`Size of Queue: ${this.items.length}`);
        return this.items.length;
    }

    // Check Queue is empty
    isEmpty()
    {
        console.log(this.items.length == 0 ? 'Queue is empty' : 'Queue is NOT empty');
        return this.items.length == 0;
    }

    // Print Queue
    print()
    {
        let str = '';

        if(this.items.length != 0)
        {
            for(let i = 0; i< this.items.length; i++)
            {
                str += this.items[i] + ' ';
            }
        }
        else{str = '[EMPTY]'}
        
        return str;
    }

    // Clear Queue
    clear()
    {
        console.log('items cleared..')
        return this.items = [];

    }
}

// FIFO Principle (FIFO : First in First Out)
// Space Complexity O(n)

// The lines below are not part of the data structure


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.front();

queue.rear();

queue.size()

console.log('Queue: ' + queue.print());

queue.dequeue()

queue.size()

console.log('Queue: ' + queue.print());

queue.isEmpty();

queue.clear();

queue.size();
console.log('Queue:' + queue.print());

