class CircularQueue
{
    constructor(capacity)
    {
        this.list = [];
        this.head = 0;
        this.tail = 0;
        this.size = 0;
        this.capacity = capacity;
    }

    // Size of Queue
    length()
    {
        console.log(`Size of Queue: ${this.size}`);
        return this.size;
    }

    // Checks if queue is full
    isFull()
    {
        return this.size === this.capacity; 
    }

    // Checks if Queue is empty
    isEmpty()
    {
        return this.size === 0;
    }

    // Adds element to the rear of the Queue
    enqueue(item)                                                    // Time Complexity O(1)
    {
        if(this.isFull())
        {
            throw new Error("Queue is full");
        }
        else
        {
            this.list[this.tail] = item;
            this.tail = (this.tail + 1) % this.capacity;
            this.size ++;
            
        }
        console.log(`Queued: ${item}`);
        return item;
    }

    // Removes element from the front of the Queue
    dequeue()                                                        // Time Complexity O(1)
    {
        let item = null;

        if(!this.isEmpty()) 
        {
            item = this.list[this.head];
            this.list[this.head] = null;
            this.head = (this.head + 1) % this.capacity;
            this.size --; 
        }
        return item;
    }

    peek()
    {
        console.log(`Peek: ${this.list[this.head]}`)
        return this.list[this.head];
    }

    // Print Queue
    print()
    {
        console.log(`Queue: ${this.list.filter(elem => elem !== null).join(' ')}`);
    }

    
    // Clear Queue
    clear()
    {
        console.log(`Queue cleared...`);
        this.size = 0;
        return this.list = [];
    }

}

// FIFO Principle (FIFO : First in First Out)
// Space Complexity O(n)

// The lines below are not part of the data structure


const cirQueue = new CircularQueue(5);

cirQueue.enqueue(15);
cirQueue.enqueue(16);
cirQueue.enqueue(17);
cirQueue.enqueue(18);
cirQueue.enqueue(19);
//cirQueue.enqueue(20);

cirQueue.print();

cirQueue.peek();

cirQueue.dequeue();
cirQueue.dequeue();

cirQueue.length();

cirQueue.peek();

cirQueue.enqueue(40);
//cirQueue.enqueue(42);

cirQueue.print();
cirQueue.length();


cirQueue.clear();

cirQueue.print();

cirQueue.length();
