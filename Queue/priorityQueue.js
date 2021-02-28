class PriorityQueue
{
    constructor()
    {
        this.list = [];
    }

    // Adds element to the rear of the Queue
    enqueue(element)                                    // Time Complexity O(1)
    {
        if(this.isEmpty())
        {
            this.list.push(element);
        }
        else
        {
            let added = false;
            for(let i = 0; i < this.list.length; i++)
            {
                if(element[1] < this.list[i][1])        // Checking priorities
                {
                    this.list.splice(i, 0 , element);
                    added = true;
                    break;
                }
            }
            if(!added)
            {
                this.list.push(element);
            }
        }
    }

    // Removes element from the front of the Queue
    dequeue()                                           // Time Complexity O(n)
    {
        return this.list.shift();
    }

    // Prints Queue
    print()
    {
        console.log(this.list);
    }

    // Checks if Queue is empty
    isEmpty()
    {
        return this.list.length == 0;
    }

    // Size of Queue
    size()
    {
        console.log(`Size of Queue: ${this.list.length}`);
        return this.list.length;
    }

    // Front value of Queue
    front()
    {
        console.log(`Front value: ${this.list[0]} `);
        return this.list[0];
    }

    // Rear value of Queue
    rear()
    {
        console.log(`Rear value: ${this.list[this.list.length-1]} `);
        return this.list[this.list.length-1];
    }

    // Clears Queue
    clear()
    {
        console.log('items cleared..')
        this.list.length = 0;
        return this.list = [];
    }
}

// FIFO Principle (FIFO : First in First Out)
// Space Complexity O(n)

// The lines below are not part of the data structure


const priQueue = new PriorityQueue();

priQueue.enqueue(['etet',4]);
priQueue.enqueue(['rye',5]);
priQueue.enqueue(['wtw',2]);
priQueue.enqueue(['rtur', 3]);
priQueue.enqueue(['Xa',1]);

priQueue.print();
priQueue.size();

priQueue.dequeue();
priQueue.size();
priQueue.print();

priQueue.front();
priQueue.rear();

priQueue.clear();
priQueue.print();

priQueue.size();


