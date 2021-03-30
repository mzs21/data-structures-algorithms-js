const Node = require('../Node/nodeTree.js');
  
class BianryTree extends Node
{
    printTree(root)
    {
        let queue = [root];

        while(queue.length > 0)
        {
            let currentNode = queue.shift();

            console.log(currentNode);

            if(currentNode.left) queue.push(currentNode.left);

            if(currentNode.right) queue.push(currentNode.right);
        }
    }

    // Depth first search - Looking branch by branch

    preOrder(root)                      // Root, Left, Right
    {
        let nodes = [];

        const traverse = node => 
        {
            nodes.push(node.data);                   // Push root data

            if(node.left) traverse(node.left); // If left child exists, go left again

            if(node.right) traverse(node.right); // If right child exists, go right again
        }

        traverse(root);

        console.log(`Pre-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    inOrder(root)                       // Left, Root, Right
    {
        let nodes = [];

        const traverse = node => 
        {
            if(node.left) traverse(node.left); // If left child exists, go left again

            nodes.push(node.data);                   // Push root data

            if(node.right) traverse(node.right); // If right child exists, go right again
        }

        traverse(root);

        console.log(`In-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    postOrder(root)                     // Left, Right, Root
    {
        let nodes = [];

        const traverse = node => 
        {
            if(node.left) traverse(node.left); // If left child exists, go left again
            
            if(node.right) traverse(node.right); // If right child exists, go right again
            
            nodes.push(node.data);                   // Push root data
        }

        traverse(root);

        console.log(`Post-order Traversal: ${nodes.join(' ')}`);
        return nodes;
    }

    // Breadth first search - Looking level by level

    BFS(root)
    {
        let queue = [root];
        let nodes = [];

        while(queue.length > 0)
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

/*
                                         2
                                      /     \
                                     7       5
                                   /  \     /  \
                                  2    6        9
                -----------------------|        |------------        
               /  \                                       /  \
              5   11                                     4            
*/

/*
// Root / Level 0
const root = new BianryTree(2); // Root / Level 0

// Level 1 nodes

const seven = new Node(7);
const fiveForRoot = new Node(5);

root.left = seven;
root.right = fiveForRoot;

// Level 2 nodes

const two = new Node(2);
const six = new Node(6);
const nine = new Node(9);

seven.left = two;
seven.right = six;

fiveForRoot.right = nine;

// Level 3 nodes
const five = new Node(5);
const eleven = new Node(11);
const four = new Node(4);

six.left = five;
six.right = eleven;

nine.left = four;

//root.printTree(root);

// You can check specific child nodes too

//console.log(six); 

//console.log(nine);

root.preOrder(root);

root.inOrder(root);

root.postOrder(root);

root.BFS(root);
*/