const quickSort = (arr) =>
{
    if(arr.length <= 1) return arr; // If array's length is <= to 1, then just return the array;

    let pivot = arr[arr.length - 1]; 

    let leftArr = [];
    let rightArr = [];

    for (let element of arr.slice(0, arr.length - 1))     // This will loop through before the pivot element
    {
        element < pivot ? leftArr.push(element) : rightArr.push(element);
        // This will print the array in ascending order, 
        // to print the array in descending order replace '<' with '>'      
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // Will do recursive call untill the array is sorted
}

// Time Complexity O(n^2) 
// Space Complexity O(log(n))

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

//console.log(`Sorted Array (Descending): ${quickSort(newArray).join(' ')}`);
// To print in descending order, change '<' to '>' on line 12
*/