class Stack
{
    constructor()
    {
        this.items = [];                                        
        this.count = 0;                                         
    }

    // Adds element to the top of the stack
    
    push(element)                                           // Time Complexity O(1)
    {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`)
        this.count += 1;
        return this.count - 1;
    }

    // Returns and removes top element in stack
    // Returns undefined if stack is empty

    pop()                                                   // Time Complexity O(1)
    {
        if(this.count == 0) return undefined;

        let deleteItm = this.items[this.count - 1];
        console.log(`${deleteItm} removed`)
        this.count--;
        return deleteItm;
    }

    // Checks top element in stack

    peek()
    {
        console.log(`Top element in stack ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // Checks if stack is empty

    isEmpty()
    {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count == 0;
    }

    // Stacks size

    size()
    {
        console.log(`Stack size ${this.count}`)
        return this.count;
    }

    print()
    {   
        let str = '';

        if(this.count != 0)
        {
            for(let i = 0; i< this.count; i++)
            {
                str += this.items[i] + ' ';
            }
        }
        else{str = '[EMPTY]'}
        
        return str;
    }

    // Clears stack

    clear()
    {
        this.items = [];
        this.count = 0;

        console.log('Stack cleared...');

        return this.items;
    }
}

// LIFO Principle (LIFO: Last in First Out)

// Space Complexity O(n)

// The lines below are not part of the data structure

/*
const stack = new Stack();


stack.isEmpty();
stack.push(100);
stack.push(200);

stack.peek();
stack.push(300);

console.log('Stack: ' + stack.print())

stack.pop();

stack.size();

console.log('Stack: ' + stack.print())

stack.clear();
stack.size();

console.log('Stack: ' + stack.print())

*/