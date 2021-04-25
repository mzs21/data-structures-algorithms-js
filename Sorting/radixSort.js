const getDigit = (num, i) => // Gets the digit in ith position of number
{
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => // Counts the length of a number
{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (numsArr) => // Finds the number having the highest length
{
    let maxDigits = 0

    for(let i = 0; i < numsArr.length; i++)
    {
        maxDigits = Math.max(maxDigits, digitCount(numsArr[i]));
    }

    return maxDigits;
}

const radixSort = (numsArr) =>
{
    let maxDigitCount = mostDigits(numsArr); // Counts the max length of among the numbers

    for(let k = 0; k < maxDigitCount; k++)
    {
        let digitBuckets = Array.from({length : 10}, () => []); // An array of 10 arrays

        for(let i = 0; i < numsArr.length; i++)
        {
            let digit = getDigit(numsArr[i], k); 

            digitBuckets[digit].push(numsArr[i]); // Pushing the number according to ith position everytime
        }
        numsArr = [].concat(...digitBuckets);   // Combining all sub arrays
    } 
    return numsArr;
}
// This will print the array in ascending order, 
// to print the array in descending order replace '...digitBuckets' 
// with '...digitBuckets.reverse()' on line 38

// Time Complexity O(nk) 
// Space Complexity O(n + k) 

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

console.log(`Sorted Array (Ascending): ${radixSort(newArray).join(' ')}`);

// console.log(`Sorted Array (Descending): ${radixSort(newArray).join(' ')}`);
*/