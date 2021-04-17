const binarySearch = (ara,find) => 
{
    let left = 0;
    let right = ara.length;
    let mid;

    while(left <= right)                            // If 'left is '<=' to right, if it's true then,
    {
        mid = Math.floor((left + right) / 2);       // we'll set the value of 'mid' to summation of left & right, divided by 2
        if (ara[mid] == find) return mid;           // If the value located in the midth index of array is euqal to our desired 
                                                    // value then we'll return the index

        if (ara[mid] < find) left = mid + 1;        // If the first 'if' fails, then we'll check if the midth index of array is 
                                                    // less than our desired value and set the value of 'left' to mid + 1
        else right = mid - 1;                       // Otherwise we'll set the value of 'right' to mid - 1;
    }
    return true;                                    // If the 'while' condition fails, we'll just return true
}

// Time Complexity O(logn) 
// Space Complexity O(n) 
// Sorted array elements are required

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

const element = Number(input(`The element I want to find: `));

const findNumber = binarySearch(newArray, element);

if (findNumber !== true) console.log(`Number is found at index: ${Number(findNumber)}`);

else console.log(`Number is not found`);
*/