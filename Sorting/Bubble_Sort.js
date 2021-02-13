const ascending_Bubble_Sort = (arr) =>
{
    let temp;

    for (let i = 0; i < arr.length; i++)                // Will loop through the array
    {
        for (let j = 0; j < (arr.length)-i-1; j++)      // This inner loop will loop before (arr.length)-i-1
        {
            if(arr[j] > arr[j+1])                       // If this conditiion fulfills, then we'll swap the values
            {                                           // ** In case of ascending
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr.join(" ");
}

const descending_Bubble_Sort = (arr) => {
    let temp;

    for (let i = 0; i < arr.length; i++)                // Will loop through the array
    {
        for (let j = 0; j < (arr.length)-i-1; j++)      // This inner loop will loop before (arr.length)-i-1
        {
            if (arr[j] < arr[j + 1])                    // If this conditiion fulfills, then we'll swap the values
            {                                           // ** In case of descending
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr.join(" ");
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

console.log(newArray.join(' ')); // This array will be of integers


console.log("Sorted Array (Ascending): " + ascending_Bubble_Sort(newArray));

console.log("Sorted Array (Descending): " + descending_Bubble_Sort(newArray));
