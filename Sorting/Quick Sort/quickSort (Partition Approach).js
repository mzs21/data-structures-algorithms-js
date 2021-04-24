const partition = (arr, start = 0, end = arr.length-1) =>
{
    let pivot = arr[start];
    let indexToSwap = start;

    for(let elem = start + 1; elem < arr.length; elem++) 
    {
        if(arr[elem] < pivot)
        {
            indexToSwap++;
            [arr[elem], arr[indexToSwap]] = [arr[indexToSwap], arr[elem]];
        }
    }

    [arr[start], arr[indexToSwap]] = [arr[indexToSwap], arr[start]];

    return indexToSwap; 
}

const quickSort = (arr, left = 0, right = arr.length - 1) => 
{
    let pivotIndex;
    
    if(left < right)
    {
        pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1); // Left array

        quickSort(arr, pivotIndex + 1, right); // Right array
    }

    return arr;
}

// This will print the array in ascending order, 
// to print the array in descending order replace '<' with '>' on line 8

// Time Complexity O(n) 
// Space Complexity O(n)

/*
const input = require('prompt-sync')(); // Using to take input

const arr = input('Values: '); // Will take input as string

const newStr = arr.split(' '); // Will convert into an array

const newArray = []; // Empty array

for (let i = 0; i < newStr.length; i++) {
    newArray.push(Number(newStr[i]));  // Will convert the string elements to numbers
}

console.log(`Array: ${newArray.join(' ')}`); // This array will be of integers

console.log(`Sorted Array (Ascending): ${quickSort(newArray).join(' ')}`);

// console.log(`Sorted Array (Descending): ${quickSort(newArray).join(' ')}`);
*/