const minHeapify = (arr, len, index) =>        // Time Complexity O(log n)
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

        minHeapify(arr, len, min);
    }
    return arr;
}

const minHeapSort = (arr) =>                // Time Complexity O(n log n)
{
    let length = arr.length;

    let lastParent = Math.floor(length / 2 - 1);
    let lastChild = length - 1;

    for(let i = lastParent; i >= 0; i--) 
    {
        minHeapify(arr, length, lastParent);       // Building min heap
    }

    for(let i = lastChild; i > 0; i--)
    {
        [arr[0], arr[i]] = [arr[i], arr[0]];     // Swap parent with last node

        minHeapify(arr, i, 0);                   // Again calling minHeapify on the reduced heap
    }

    return arr;
}

// Space Complexity O(1)
// In-place algorithm


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

// Min Heap: [1, 10, 16, 22, 33, 35, 52, 43, 47, 100]

/*
const input = require('prompt-sync')(); // Using to take input

const arr = input('Values: '); // Will take input as string

const newStr = arr.split(' '); // Will convert into an array

const newArray = []; // Empty array

for (let i = 0; i < newStr.length; i++) 
{
    newArray.push(Number(newStr[i]));  // Will convert the string elements to numbers
}

console.log(`Array: ${newArray.join(' ')}`); // This array will be of integers

console.log(`Sorted Array: ${minHeapSort(newArray).join(' ')}`);
*/