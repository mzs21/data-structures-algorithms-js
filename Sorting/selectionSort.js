const selectionSort = (arr) => 
{
    let index;                                      // This sorting algo wokrs by swaping the value of indexes
    
    for (let i = 0; i < (arr.length)-1; i++)        // Will loop before the (arr.length)-1
    {
        index = i;                                  // Set the value of index to 'i'
        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[j] < arr[index])                 // If the value of jth index of the array is less than the value of
            {
                index = j;                          // 'index' of the array, then we set the value of index to j
            }
        } 
        
        if(index != i)                              // If the index is not equal to i,
        {
            [arr[i], arr[index]] = [arr[index], arr[i]];  // then, we'll swap the value 
        }
    }
    return arr;                                     // This array will be sorted
}

// This will print the array in ascending order, 
// to print the array in descending order replace '<' with '>' on line 10

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

console.log(`Sorted Array (Ascending): ${selectionSort(newArray).join(' ')}`);

//console.log(`Sorted Array (Descending): ${selectionSort(newArray).join(' ')}`);
*/