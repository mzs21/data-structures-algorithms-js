const quickSort = (arr) =>
{
    if(arr.length <= 1) return arr; // If array's length is <= to 1, then just return the array;

    let pivot = arr[arr.length - 1]; 

    let leftArr = [];
    let rightArr = [];

    for (let element = 0; element < arr.length - 1; element++)     // This will loop through before the pivot element
    {
        arr[element] < pivot ? leftArr.push(arr[element]) : rightArr.push(arr[element]);      
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // Will do recursive call untill the array is sorted
}
// This will print the array in ascending order, 
// to print the array in descending order replace '<' with '>' on line 12

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

//console.log(`Sorted Array (Descending): ${quickSort(newArray).join(' ')}`);
*/