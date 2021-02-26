class CircularQueue
{
    #list;
    #capacity;
    #tail = -1;
    #head = -1;
    #size = 0;

    constructor(capacity)
    {
        this.#capacity = Math.max(Number(capacity), 0) || console.error("You haven't entered the capacity"); 
                                                                    // Capacity should be greater than zero
        this.#list = Array(this.#capacity).fill(null);
    }

    get size()
    {
        return this.#size;
    }

    get isFull()
    {
        return this.size === this.#capacity; 
    }

    get isEmpty()
    {
        return this.size === 0;
    }

    enqueue(item)                                                    // Time Complexity O(1)
    {
        if(!this.isFull)
        {
            this.#tail = (this.#tail + 1) % this.#capacity;
            this.#list[this.#tail] = item;
            this.#size += 1;

            if(this.#head === -1)
            {
                this.#head = this.#tail;
            }
        }
        console.log(`Queued: ${item}`);
        return this.size;
    }

    dequeue()                                                        // Time Complexity O(1)
    {
        let item = null;

        if(!this.isEmpty)
        {
            item = this.#list[this.#head];
            this.#list[this.#head] = null;
            this.#head = (this.#head + 1) % this.#capacity;
            this.#size -= -1;

            if(!this.#size)                                         // Queue is empty
            {
                this.#head = -1;
                this.#tail = -1;
            }
        }

        return item;
    }

    peek()
    {
        console.log(`Peek: ${this.#list[this.#head]}`)
        return this.#list[this.#head];
    }

    // Print Queue
    print()
    {
        console.log(`Queue: ${this.#list.filter(elem => elem != null).join(' ')}`);
    }

    
    // Clear Queue
    clear()
    {
        console.log(`Queue cleared...`)
        return this.#list = [];
    }

}

// FIFO Principle (FIFO : First in First Out)
// Space Complexity O(n)

// The lines below are not part of the data structure

/*
const cirQueue = new CircularQueue();

cirQueue.enqueue(15);
cirQueue.enqueue(16);
cirQueue.enqueue(17);
cirQueue.enqueue(18);
cirQueue.enqueue(19);

cirQueue.print();

cirQueue.peek();

cirQueue.dequeue();
cirQueue.dequeue();

cirQueue.peek();

cirQueue.enqueue(40);

cirQueue.print();

cirQueue.clear();

cirQueue.print();
*/