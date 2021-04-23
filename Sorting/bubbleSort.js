const bubbleSort = (arr) =>
{
    for (let i = 0; i < arr.length; i++)                
    {
        for (let j = 0; j < (arr.length)-i-1; j++)      // This inner loop will loop before (arr.length)-i-1
        {
            if(arr[j] > arr[j+1])                       // If this conditiion fulfills, then we'll swap the values
            {                                           
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swapping values

                // This will print the array in ascending order, 
                // to print the array in descending order replace '>' with '<' 
            }
        }
    }
    return arr;
}

// Time Complexity O(n^2) 
// Space Complexity O(1) 

/*
const input = require('prompt-sync')(); // Using to take input

const arr = input('Values: '); // Will take input as string

const newStr = arr.split(' '); // Will convert into an array

const newArray = []; // Empty array

for (let i = 0; i < newStr.length; i++) {
    newArray.push(Number(newStr[i]));  // Will convert the string elements to numbers
}

console.log(`Array: ${newArray.join(' ')}`); // This array will be of integers

console.log(`Sorted Array (Ascending): ${bubbleSort(newArray).join(' ')}`);

//console.log(`Sorted Array (Descending): ${bubbleSort(newArray).join(' ')}`);
// To print in descending order, change '>' to '<' on line 7
*/