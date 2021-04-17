class MinBinaryHeap
{
    constructor() 
    {
        this.datas = [];
        this.count = 0;
    }

    insert(data)                                        // Time Complexity O(log n)
    {
        this.count++;
        this.datas.push(data);

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

            if(elem >= parent) break;       
            // If the input 'data' is >= to parent index's data, then we'll break out;
            
            // Otherwise we'll swap the values
            this.datas[parentIndex] = elem;             // Will swap 'data' with parent index's data

            this.datas[index] = parent;                 // Then, new 'data' will be parent value
           
            index = parentIndex;                        // Update the index to parent index
        }
    }

    extractMin()                                        // Time Complexity O(log n)
    {
        this.count--;
        let min = this.datas[0];                        // Min data in Min Heap
        
        let endData = this.datas.pop();                 // Last data in Min Heap

        let length = this.datas.length;
        if(length > 0)                                  // if array length is greater than 0
        {
            this.datas[0] = endData;                    // The value of Min data is now 'endData'
            this.bubbleDown();    
        }

        console.log(`${min} removed from Min Binary Heap`);

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

                if(leftChild < element) // If leftChild is lesser than element then set swap equal to leftChildIndex
                {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) // rightChildIndex is inbound, then assign the value to the right child
            {
                rightChild = this.datas[rightChildIndex];

                if
                (
                    (swap === null && rightChild < element) || // If swap is still null & rightChild is lesser than element
                    (swap !== null && rightChild < leftChild)  // If swap isn't null & rightChild is lesser than leftChild
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

    print()
    {
        console.log(`Min Binary Heap : ${this.datas.join(' ')}`);
    }

    size()
    {
        console.log(`Total datas in Min Binary Heap: ${this.count}`);
    }

    findLeftChild(data)
    {
        let index = this.datas.indexOf(data);

        let leftChild = this.datas[2 * index + 1];

        if(leftChild) console.log(`Left Child of ${data} is ${leftChild}`);
        else console.log(`No left child of '${data}' found`);
    }

    findRightChild(data)
    {
        let index = this.datas.indexOf(data);

        let rightChild = this.datas[2 * index + 2];

        if(rightChild) console.log(`Right Child of ${data} is ${rightChild}`);
        else console.log(`No right child of '${data}' found`);
    }


    findParent(data)
    {
        let index = this.datas.indexOf(data);
        
        let parent = this.datas[Math.floor((index - 1) / 2)];

        if(parent) console.log(`Parent of ${data} is ${parent}`);
        else console.log(`'${data}' is the root`);
    }

    minHeapify(arr, len, index)        // Time Complexity O(log n)
    {
        let min = index;                            // Parent Index
        let leftIndex = 2 * index + 1;              // Left Index
        let rightIndex = 2 * index + 2;             // Right Index

        if(leftIndex < len && arr[leftIndex] < arr[min]) // If left child of parent exists and is less than min
        {
            min = leftIndex;        
        }

        if(rightIndex < len && arr[rightIndex] < arr[min]) // If right child of parent exists and is less than min
        {
            min = rightIndex;        
        }

        if(min !== index)   // If min is not parent index
        {
            [arr[index], arr[min]] = [arr[min], arr[index]]; // Swap values

            this.minHeapify(arr, len, min);
        }
        return arr;
    }

    minHeapSort()                // Time Complexity O(n log n)
    {
        let arr = this.datas;
        let length = arr.length;

        let lastParent = Math.floor(length / 2 - 1);
        let lastChild = length - 1;

        for(let i = lastParent; i >= 0; i--) 
        {
            this.minHeapify(arr, length, lastParent);       // Building min heap
        }

        for(let i = lastChild; i > 0; i--)
        {
            [arr[0], arr[i]] = [arr[i], arr[0]];     // Swap parent with last node

            this.minHeapify(arr, i, 0);              // Again calling minHeapify on the reduced heap
        }

        console.log(`Sorted Min Heap: ${arr.join(' ')}`);
        return arr;
    }
}

// Space Complexity O(n)
// Complete Binary Tree is required

/*
                                         1
                                      /     \
                                    10       16
                                   /  \     /  \
                                  22  33   35  52
                ------------------|   |        
               /  \          ---------|                    
              43  47        /
                           100                                       
*/
// Before starting extraction

/*
let heap = new MinBinaryHeap();

heap.insert(43);
heap.insert(33);
heap.insert(35);
heap.insert(16);
heap.insert(22);
heap.insert(10);
heap.insert(52);
heap.insert(1);
heap.insert(47);
heap.insert(100);

heap.print();

heap.findLeftChild(16);
heap.findRightChild(43);
heap.findParent(1);
heap.findParent(100);

heap.size()

heap.extractMin();

heap.print();

heap.size();

heap.minHeapSort();
*/