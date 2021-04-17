const maxHeapify = (arr, len, index) =>             // Time Complexity O(log n)
{
    let max = index;                            // Parent Index
    let leftIndex = 2 * index + 1;              // Left Index
    let rightIndex = 2 * index + 2;             // Right Index

    if(leftIndex < len && arr[leftIndex] > arr[max]) // If left child of parent exists and is greater than max
    {
        max = leftIndex;        
    }

    if(rightIndex < len && arr[rightIndex] > arr[max]) // If right child of parent exists and is greater than max
    {
        max = rightIndex;        
    }

    if(max !== index)   // If max is not parent index
    {
        [arr[index], arr[max]] = [arr[max], arr[index]]; // Swap values

        maxHeapify(arr, len, max);
    }
    return arr;
}

const maxHeapSort = (arr) =>                        // Time Complexity O(n log n)
{
    let length = arr.length;

    let lastParent = Math.floor(length / 2 - 1);
    let lastChild = length - 1;

    for(let i = lastParent; i >= 0; i--) 
    {
        maxHeapify(arr, length, lastParent);       // Building max heap
    }

    for(let i = lastChild; i > 0; i--)
    {
        [arr[0], arr[i]] = [arr[i], arr[0]];     // Swap parent with last node

        maxHeapify(arr, i, 0);                   // Again calling heapify on the reduced heap
    }

    return arr;
}


// Space Complexity O(1)
// In-place algorithm

/*
                                        100
                                      /     \
                                    52       43
                                   /  \     /  \
                                  33  47   10  35
                ------------------|   |        
               /  \          ---------|                    
              1   16        /
                           22                                       
*/

// Max Heap: [100, 52, 43, 33, 47, 10, 35, 1, 16, 22]

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

console.log(`Sorted Array: ${maxHeapSort(newArray).join(' ')}`);
*/