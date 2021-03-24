const ascendingInsertionSort = (arr) => 
{
    let item;

    for(let i = 0; i < arr.length; i++)
    {
        item = arr[i];                 // Will assign ith index of array to item

        let j  = i-1;                  // We have to find the appropriate index to place the item
                                       // So, we will assign j to ith index - 1

        while(j >= 0 && arr[j] > item) // Index can't be lower than 0, so we'll use '>=' to check if the index of j
                                       // is greater than or equal to 0 & will also check if the value (arr[j]) is greater than item
                                       // If the condition fulfills,
        {
            arr[j+1] = arr[j];         // we'll assign (j+1)th index of array to array's jth index
            j = j-1;                   // and reduce the value j to -1 so, the condition can be false & we can get out of this block 
        }

        arr[j+1] = item;               // Finally, we'll assign the value of (j+1)th index of array to item
    }
    return arr.join(" ");              // In the end, we'll return the array but this time it'll be sorted 
}

// ** In case of ascending

const descendingInsertionSort = (arr) => 
{
    
    let item;

    for(let i = arr.length; i > 0; i--)
    {
        item = arr[i];                  // Will assign ith index of array to item

        let j  = i-1;                   // We have to find the appropriate index to place the item
                                        // So, we will assign j to ith index - 1

        while(j >= 0 && arr[j] < item)  // Index can't be lower than 0, so we'll use '>=' to check if the index of j
                                        // is greater than or equal to 0 & will also check if the value (arr[j]) is greater than item
                                        // If the condition fulfills,
        {
            arr[j+1] = arr[j];          // we'll assign the value of jth index of array to array's (j+1)th index
            j = j-1;                    // and reduce the value j to -1 so, the condition can be false & we can get out of this block
        }

        arr[j+1] = item;                // Finally, we'll assign the value of (j+1)th index of array to item
    }
    return arr.join(" ");               // In the end, we'll return the array but this time it'll be sorted
}
// ** In case of descending


// This Algo is good to use if the inputed array is alomost sorted or partially sorted
// Time Complexity O(n^2) 
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

console.log(`Sorted Array (Ascending): ${ascendingInsertionSort(newArray)}`);

console.log(`Sorted Array (Descending): ${descendingInsertionSort(newArray)}`);
*/