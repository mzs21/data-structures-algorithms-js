class Node 
{
    constructor(value, priority)
    {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue
{
    constructor() 
    {
        this.datas = [];
        this.count = 0;
    }

    enqueue(value, priority)                                        // Time Complexity O(log n)
    {
        this.count++;

        let newNode = new Node(value, priority);
        
        this.datas.push(newNode);

        this.bubbleUp();
    }

    bubbleUp()                                          // Time Complexity O(log n)
    {
        let index = this.datas.length - 1;

        const elem = this.datas[index];                 // 'data' will be stored in 'elem'

        while(index > 0)                                // Index must be greater than 0
        {
            let parentIndex = Math.floor((index - 1) / 2);      // Parent Index
            let parent = this.datas[parentIndex];               // Parent index's data

            if(elem.priority >= parent.priority) break;       
            // If the input 'data's priority is >= to data's priority in parent index, then we'll break out;
            
            // Otherwise we'll swap the values
            this.datas[parentIndex] = elem;             // Will swap 'data' with parent index's data

            this.datas[index] = parent;                 // Then, new 'data' will be parent value
           
            index = parentIndex;                        // Update the index to parent index
        }
    }

    dequeue()                                        // Time Complexity O(log n)
    {
        this.count--;
        let min = this.datas[0];                        // Min data in Min ER
        
        let endData = this.datas.pop();                 // Last data in Min ER

        let length = this.datas.length;
        if(length > 0)                                  // if array length is greater than 0
        {
            this.datas[0] = endData;                    // The value of Min data is now 'endData'
            this.bubbleDown();    
        }

        console.log(`Currently "${min.value}" is the priority in Priority Queue`);

        return min;
    }

    bubbleDown()                                        // Time Complexity O(log n)
    {
        let index = 0;

        const length = this.datas.length;

        const element = this.datas[0];

        while(true) 
        {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            let leftChild, rightChild;

            let swap = null;        // It's going to keep track of the position, we'er going to swap with

            if(leftChildIndex < length)  // leftChildIndex is inbound, then assign the value to the left child
            {
                leftChild = this.datas[leftChildIndex]; 

                if(leftChild.priority < element.priority) // If leftChild is lesser than element then set swap equal to leftChildIndex
                {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) // rightChildIndex is inbound, then assign the value to the right child
            {
                rightChild = this.datas[rightChildIndex];

                if
                (
                    (swap === null && rightChild.priority < element.priority) || // If swap is still null & rightChild is lesser than element
                    (swap !== null && rightChild.priority < leftChild.priority)  // If swap isn't null & rightChild is lesser than leftChild
                )
                {
                    swap = rightChildIndex; // then set swap equal to rightChildIndex
                }
            }
           
            if(swap === null) break;
            
            // Otherwise we'll swap the values
            this.datas[index] = this.datas[swap]; // Will swap the data in 'swap's' index with parent data's index
            
            this.datas[swap] = element;           // Then, new 'data' will be parent value
            
            index = swap;                         // Update the index to parent index
        }
    }

    size()
    {
        console.log(`Total datas in Priority Queue : ${this.count}`);
    }

}

// Space Complexity O(n)
// Complete Binary Tree is required
// Using Min Binary Heap approach

/*
let ER = new PriorityQueue();

ER.enqueue("High Fever", 4)
ER.enqueue("Cold", 5);
ER.enqueue("Scratch", 7);
ER.enqueue("Back pain", 6);
ER.enqueue("Car accident", 2);
ER.enqueue("Critical situation", 1);
ER.enqueue("Broken bone", 3);

ER.size()

ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.size();
*/