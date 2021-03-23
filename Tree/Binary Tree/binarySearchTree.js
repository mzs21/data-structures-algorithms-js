const Node = require('../Node/nodeTree.js');

class BianrySearchTree
{
    constructor(data)
    {
        this.root = new Node(data);
        this.count = 1;
    }

    size()
    {
        console.log(`Total Nodes: ${this.count}`);
        return this.count;
    }

    insert(data)                                       // Time Complexity O(n)
    {
        this.count++;

        let newNode = new Node(data);

        const searchTree = node => 
        {
            if(data <= node.data)                      // Go left
            {
                if(!node.left) 
                { 
                    node.left = newNode;                // If no left child, append node

                    console.log(`${data} inserted to Node ${node.data} as left child`);
                }    
                else searchTree(node.left);            // If left child exists, look left again
            }

            else if(data > node.data)                 // Go right
            {
                if(!node.right) 
                {
                    node.right = newNode;             // If no right child, append node

                    console.log(`${data} inserted to Node ${node.data} as right child`);
                }
                else searchTree(node.right);          // If right child exists, look right again
            }
        }

        searchTree(this.root);
    }

    remove(data)                                       // Time Complexity O(n)
    {
        console.log(`${data} removed from Tree`);

        const removeNode = (node,data) => 
        {
            if(node === null) return null;
            if(data === node.data)
            {
                // Case 1: If node has no children
                if(node.left === null && node.right === null) return null;

                // Case 2: If node has no left child
                if(node.left === null) return node.right;
        
                // Case 3: If node has no right child
                if(node.right === null) return node.left;
               
                // Case 4: If node has 2 children

                let tempNode = node.right;

                while(tempNode.left !== null) tempNode = tempNode.left;

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data)
                return node;
            }

            else if(data < node.data)
            {
                node.left = removeNode(node.left, data);
                return node;
            }

            else
            {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        
        this.root = removeNode(this.root, data);
    }

    min()                                   // Finds the minimum value in the tree
    {
        let currentNode = this.root;

        while(currentNode.left)             // Continue traversing through left until no more children
        {
            currentNode = currentNode.left;
        }
        console.log(`Minimum data: ${currentNode.data}`);
        return currentNode.data;
    }

    max()                                   // Finds the maximum value in the tree
    {
        let currentNode = this.root;

        while(currentNode.right)             // Continue traversing through right until no more children
        {
            currentNode = currentNode.right;
        }
        console.log(`Maximum data: ${currentNode.data}`);
        return currentNode.data;
    }

    contains(data)                          // Time Complexity O(n)
    {
        let currentNode = this.root;

        while(currentNode)
        {
            if(data === currentNode.data) 
            {
                console.log(`Data: '${data}' exists`);
                return true;
            }
            if(data <= currentNode.data) currentNode = currentNode.left;
            else currentNode = currentNode.right;
            
        }

        console.log(`Data: '${data}' doesn't exist`);
        return false;
    }

    printTree()
    {
        let nodes = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length)
        {
            let currentNode = queue.shift();

            nodes.push(currentNode);

            if(currentNode.left) queue.push(currentNode.left);

            if(currentNode.right) queue.push(currentNode.right);
        }

        nodes.forEach(node => console.log(node));
        return nodes;
    }

    findMinHeight(node = this.root)        // Finds minimum height in the tree
    {
        if(node === null) return -1;

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
    
        if(left < right) return left + 1;
        else return right + 1;

    }

    findMaxHeight(node = this.root)         // Finds maximum height in the tree
    {
      if(node === null) return -1;

      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      
      if(left > right) return left + 1;
      else return right + 1;
    }

    isBalanced()                            // Checks if the tree is balanced or not
    {
        this.findMinHeight() >= this.findMaxHeight() - 1 ?
        console.log(`Balanced ? Yes`) : 
        console.log(`Balanced ? No`);

        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    // Depth first search - Looking branch by branch

    preOrder()                      // Root, Left, Right
    {
        let nodes = [];

        const traverse = node => 
        {
            nodes.push(node.data);                   // Push root data

            if(node.left) traverse(node.left); // If left child exists, got left again

            if(node.right) traverse(node.right); // If right child exists, got right again
        }

        traverse(this.root);

        console.log(`Pre-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    inOrder()                       // Left, Root, Right
    {
        let nodes = [];

        const traverse = node => 
        {
            if(node.left) traverse(node.left); // If left child exists, got left again

            nodes.push(node.data);                   // Push root data

            if(node.right) traverse(node.right); // If right child exists, got right again
        }

        traverse(this.root);

        console.log(`In-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    postOrder()                     // Left, Right, Root
    {
        let nodes = [];

        const traverse = node => 
        {
            if(node.left) traverse(node.left); // If left child exists, got left again

            nodes.push(node.data);                   // Push root data

            if(node.right) traverse(node.right); // If right child exists, got right again
        }

        traverse(this.root);

        console.log(`Post-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    // Breadth first search - Looking level by level
    
    BFS()
    {
        let nodes = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length)
        {
            let currentNode = queue.shift();

            nodes.push(currentNode.data);

            if(currentNode.left) queue.push(currentNode.left);

            if(currentNode.right) queue.push(currentNode.right);
        }

        console.log(`BFS Traversal: ${nodes.join(' ')}`);
        return nodes;
    }
}

// Space Complexity O(n)

// BST is a type of Binary Tree where, Left (Subtree) < Root < Right (Subtree)
// Exception, a child can be equal to parent and in that case it's
// either, Left (Subtree) <= Root < Right (Subtree) or Left (Subtree) < Root <= Right (Subtree)
// It's an ordered tree

/*
                                         50
                                      /     \
                                    40       70
                                   /  \     /  \
                                 40   45  65   90
                ----------------------|    |----------------------        
              /  \                                              /  \
             42  48                                            63   67         
*/

/*
const bst = new BianrySearchTree(50); // Root / Level 0

// Level 1 nodes
bst.insert(40);  
bst.insert(70);

// Level 2 nodes
bst.insert(40);
bst.insert(45);

bst.insert(65);
bst.insert(90);

// Level 3 nodes
bst.insert(42);
bst.insert(48);

bst.insert(63);
bst.insert(67);

bst.size();

bst.min();
bst.max();

bst.printTree();

console.log('Minimum height: ' + bst.findMinHeight());
console.log('Maximum height: ' + bst.findMaxHeight());
bst.isBalanced();


bst.contains(40);
bst.contains(98);

bst.preOrder();

bst.inOrder();

bst.postOrder();

bst.BFS();

bst.remove(45);

bst.contains(45);

bst.printTree();

console.log('Minimum height: ' + bst.findMinHeight());
console.log('Maximum height: ' + bst.findMaxHeight());
bst.isBalanced();
*/