const ascending_Selection_Sort = (arr) => 
{
    let index, temp;                                // This sorting algo wokrs by swaping the value of indexes
    
    for (let i = 0; i < (arr.length)-1; i++)        // Will loop before the (arr.length)-1
    {
        index = i;                                  // Set the value of index to 'i'
        for(let j = i+1; j < arr.length; j++)       // This inner loop will start from (i+1)th index
        {
            if(arr[j] < arr[index])                 // If the value of jth index of the array is less than the value of
                {index = j;}                        // 'index' of the array, then we set the value of index to j
        }                                           // ** In case of ascending
        
        if(index != i)                              // If the index is not equal to i,
        {
            temp = arr[i];                          // then, we'll swap the value 
            arr[i] = arr[index];
            arr[index] = temp;
        } 
    }
    return arr.join(" ");                           // This array will be sorted
}

const descending_Selection_Sort = (arr) => 
{
    let index, temp;                                // This sorting algo wokrs by swaping the value of indexes


    for (let i = 0; i < (arr.length) - 1; i++)      // Will loop before the (arr.length)-1
    {    
        index = i;                                  // Set the value of index to 'i'

        for (let j = i + 1; j < arr.length; j++)    // This inner loop will start from (i+1)th index
        {
            if (arr[j] > arr[index])                // If the value of jth index of the array is greater than the value of
            { index = j; }                          // 'index' of the array, then we set the value of index to j
        }                                           // ** In case of descending

        if (index != i)                             // If the index is not equal to i,
        {                           
            temp = arr[i];                          // then, we'll swap the value
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr.join(" ");                           // This array will be sorted
}

// Time Complexity O(n^2) 
// Space Complexity O(n)

const input = require('prompt-sync')(); // Using to take input

const arr = input('Values: '); // Will take input as string

const newStr = arr.split(' '); // Will convert into an array

const newArray = []; // Empty array

for (let i = 0; i < newStr.length; i++) {
    newArray.push(Number(newStr[i]));  // Will convert the string elements to numbers
}

console.log(newArray); // This array will be of integers


console.log("Sorted Array (Ascending): " + ascending_Selection_Sort(newArray));

console.log("Sorted Array (Descending): " + descending_Selection_Sort(newArray));
