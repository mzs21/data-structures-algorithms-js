const Node = require('../Node/nodeTree.js');
  

class BianryTree extends Node{} // Just for formality

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
const five = new Node(5);

root.left = seven;
root.right = five;

// Level 2 nodes

const two = new Node(2);
const six = new Node(6);
const nine = new Node(9);

seven.left = two;
seven.right = six;

five.right = nine;

// Level 3 nodes

const eleven = new Node(11);
const four = new Node(4);

six.left = five;
six.right = eleven;

nine.left = four;

console.log(root);

// You can check child nodes too

console.log(six); 

console.log(nine);
*/