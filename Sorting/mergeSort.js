const merge = (leftArr, rightArr) =>
{
    const result = [];                    // Array that will contain the final result

    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) 
    {
        //Extracting elements
        const leftElem = leftArr[leftIndex];
        const rightElem = rightArr[rightIndex];

        if(leftElem < rightElem)          // If left element is < right element then, push left element
        {                                 // This will store the array in ascending order, to store in 
                                          // descending order change '<' to '>'
            result.push(leftElem);
            leftIndex++;
        }
        else
        {
            result.push(rightElem);       // Otherwise, push right element
            rightIndex++;
        }
    }
    /*
        // As we don't know which elements have been left behind from which array, so
        // we'll use spread operator to use the remaining unused elements.
        // We'll get either get elements from left array or right array but not from both.
    */

    let finalResult = [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    
    return finalResult;
}
// Time Complexity O(n)
// Space Complexity O(n)

const mergeSort = (arr) =>
{
    if(arr.length <= 1) return arr; // If array's length is <= to 1, then just return the array;
    
    // Otherwise....
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Time Complexity O(n log(n)) 
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

console.log(`Sorted Array (Ascending): ${mergeSort(newArray).join(' ')}`);

//console.log(`Sorted Array (Descending): ${mergeSort(newArray).join(' ')}`);
// To print in descending order, change '<' to '>' on line 14
*/