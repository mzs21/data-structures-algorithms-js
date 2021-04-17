class HashTable
{
    constructor(size)
    {
        this.keyMap = new Array(size); 
    }

    hash(key)               // Time Complexity O(n)
    {
        let hashedKey = 0;
        
        for (let i = 0; i < key.length; i++) 
        {
            hashedKey += key.charCodeAt(i) - 96;  //  UTF-16 value of ith character of key - 96
        }

        return hashedKey % this.keyMap.length;
    }

    set(key, value)         // Time Complexity O(n)
    {
        // Separate Chaining approach

        let index = this.hash(key);

        if(!this.keyMap[index]) this.keyMap[index] = [];    // If the index is empty, set it as an empty array

        this.keyMap[index].push([key,value]);               // Push the value
    }

    get(key)                // Time Complexity O(n)
    {                                                
        let index = this.hash(key);

        if(this.keyMap[index])                                  // Index isn't empty
        {
            for(let i = 0; i < this.keyMap[index].length; i++)
            {
                if(this.keyMap[index][i][0] === key)            // If value of key is found
                {
                    let key = this.keyMap[index][i][0];
                    let value = this.keyMap[index][i][1];

                    console.log(`Key: ${key}, Value: ${value}`);
                }
            }
        }
        return undefined;
    }

    values()                // Time Complexity O(n^2)
    {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) 
        {
            if (this.keyMap[i])                                     // If there is data in ith index 
            {
                for (let j = 0; j < this.keyMap[i].length; j++)     // Will loop through total number of data
                {
                    if(!valuesArr.includes(this.keyMap[i][j][1]))   // Checking for duplicates
                    {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                } 
            }
            
        }

        console.log(`Values: ${valuesArr.join(', ')}`);
    }

    keys()                  // Time Complexity O(n^2)
    {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) 
        {
            if (this.keyMap[i])                                     // If there is data in ith index
            {
                for (let j = 0; j < this.keyMap[i].length; j++)     // Will loop through total number of data
                {
                    if(!keysArr.includes(this.keyMap[i][j][0]))     // Checking for duplicates
                    {    
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                } 
            }
            
        }

        console.log(`Keys: ${keysArr.join(', ')}`);
    }

    remove(key)             // Time Complexity O(n)
    {
        let index = this.hash(key);

        let flag = false;
        if(this.keyMap[index])                                  // Index isn't empty
        {
            for(let i = 0; i < this.keyMap[index].length; i++)
            {
                if(this.keyMap[index][i][0] === key)            // If value of key is found
                {
                    console.log(`Key: ${key} is deleted`);
                    delete this.keyMap[index][i];

                    flag = true;
                }          
            }
        }
        if(!flag) console.log(`Key: ${key} is not found`);
    }

    print()
    {
        console.log(this.keyMap);
    }
}

// Space Complexity O(n)
// This isn't a efficient version
// This hash table is only useful for strings
// To set value "Separate Chaining" approach is used

/*
let ht = new HashTable(23);

ht.set("tomato", "#FF6347");
ht.set("yellow", "#FFFF00");
ht.set("red", "#FF0000");
ht.set("salmon", "#FA8072");
ht.set("lime", "#00FF00");
ht.set("pink", "#FFC0CB");
ht.set("orchid", "#DA70D6");
ht.set("violet", "#EE82EE");
ht.set("purple", "#800080");
ht.set("purple", "#DA70D6");
ht.set("purple", "#DA70D6");

ht.print();

ht.get("red");

ht.keys();

ht.values();


ht.remove(453);
ht.remove('red');

ht.print();
*/