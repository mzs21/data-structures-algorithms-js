const linearSearch = (ara, find) =>
{
    for (let i = 0; i < ara.length; i++)    // Will loop through the array
    {
        if(ara[i] === find)                 // If the value we are looking for is found at the ith index of the array,        
        {return i;}                         // we'll return the index
    }
    return true;                            // Otherwise we'll return true
}

// Time Complexity O(n) 
// Space Complexity O(1) 
// Sorted array elements aren’t required.

/*
const input = require('prompt-sync')(); // Using to take input

const arr = input('Values: '); // Will take input as string

const newStr = arr.split(' '); // Will convert into an array

const newArray = []; // Empty array

for (let i = 0; i < newStr.length; i++) 
{ 
    newArray.push(Number(newStr[i]));  // Will convert the string elements to numbers
} 

console.log(newArray); // This array will be of integers

const element = Number(input('The element I want to find: ')); 

const findNumber = linearSearch(newArray, element);

if(findNumber != true) 
{
    console.log("Number is found at index " + Number(findNumber + 1));
}
else
{
    console.log("Number is not found");
}
*/