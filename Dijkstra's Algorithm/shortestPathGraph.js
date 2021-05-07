class Node 
{
    constructor(value, priority)
    {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue
{
    constructor() 
    {
        this.datas = [];
        this.count = 0;
    }

    enqueue(value, priority)                                        // Time Complexity O(log n)
    {
        this.count++;

        let newNode = new Node(value, priority);
        
        this.datas.push(newNode);

        this.bubbleUp();
    }

    bubbleUp()                                          // Time Complexity O(log n)
    {
        let index = this.datas.length - 1;

        const elem = this.datas[index];                 // 'data' will be stored in 'elem'

        while(index > 0)                                // Index must be greater than 0
        {
            let parentIndex = Math.floor((index - 1) / 2);      // Parent Index
            let parent = this.datas[parentIndex];               // Parent index's data

            if(elem.priority >= parent.priority) break;       
            // If the input 'data's priority is >= to data's priority in parent index, then we'll break out;
            
            // Otherwise we'll swap the values
            this.datas[parentIndex] = elem;             // Will swap 'data' with parent index's data

            this.datas[index] = parent;                 // Then, new 'data' will be parent value
           
            index = parentIndex;                        // Update the index to parent index
        }
    }

    dequeue()                                        // Time Complexity O(log n)
    {
        this.count--;
        let min = this.datas[0];                        // Min data in Min ER
        
        let endData = this.datas.pop();                 // Last data in Min ER

        let length = this.datas.length;
        if(length > 0)                                  // if array length is greater than 0
        {
            this.datas[0] = endData;                    // The value of Min data is now 'endData'
            this.bubbleDown();    
        }
        return min;
    }

    bubbleDown()                                        // Time Complexity O(log n)
    {
        let index = 0;

        const length = this.datas.length;

        const element = this.datas[0];

        while(true) 
        {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            let leftChild, rightChild;

            let swap = null;        // It's going to keep track of the position, we'er going to swap with

            if(leftChildIndex < length)  // leftChildIndex is inbound, then assign the value to the left child
            {
                leftChild = this.datas[leftChildIndex]; 

                if(leftChild.priority < element.priority) // If leftChild is lesser than element then set swap equal to leftChildIndex
                {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) // rightChildIndex is inbound, then assign the value to the right child
            {
                rightChild = this.datas[rightChildIndex];

                if
                (
                    (swap === null && rightChild.priority < element.priority) || // If swap is still null & rightChild is lesser than element
                    (swap !== null && rightChild.priority < leftChild.priority)  // If swap isn't null & rightChild is lesser than leftChild
                )
                {
                    swap = rightChildIndex; // then set swap equal to rightChildIndex
                }
            }
           
            if(swap === null) break;
            
            // Otherwise we'll swap the values
            this.datas[index] = this.datas[swap]; // Will swap the data in 'swap's' index with parent data's index
            
            this.datas[swap] = element;           // Then, new 'data' will be parent value
            
            index = swap;                         // Update the index to parent index
        }
    }
}

class ShortestPathGraph
{
    constructor()
    {
        this.adjacencyList = {};
    }

    addVertex(vertex)                   // Time Complexity O(1)
    {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];        // If the vertex doesn't exist, then add it.
    }

    removeVertex(vertex)                // Time Complexity O(|VERTEX| + |EDGE|)
    {
        if(this.adjacencyList[vertex])
        {
            while(this.adjacencyList[vertex].length)
            {
                 this.adjacencyList[vertex].pop();                      // Will pop all the value 

                for (let key of Object.keys(this.adjacencyList))       // Will loop through all keys
                {
                    if(this.adjacencyList[key].filter(value => value !== vertex))
                    {
                        this.removeEdge(key, vertex);           // Will remove all edges 
                    }
                }         
            }
            delete this.adjacencyList[vertex];
        }
        else throw new Error(`Vertex doesn't exist`);
    }
    
    addEdge(vertexOne, vertexTwo, weight)      // Time Complexity O(1)
    {
        if(this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo])      // If both vertices exist 
        {
            this.adjacencyList[vertexOne].push({Node: vertexTwo, Value: weight});
            this.adjacencyList[vertexTwo].push({Node: vertexOne, Value: weight});
        }
        else throw new Error(`Vertex doesn't exist`);
    }

     removeEdge(vertexOne, vertexTwo)    // Time Complexity O(|EDGE|)
    {
        if(this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo])      // If both vertices exist 
        {
            this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(vertex => vertex.Node !== vertexTwo);      
            this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(vertex => vertex.Node !== vertexOne );   
        }
        else throw new Error(`Vertex doesn't exist`);
    }
    
    printGraph()
    {
        console.log('Graph:\n', this.adjacencyList);
    }

    dijkstra(startVertex, finishVertex)
    {
        const nodes = new PriorityQueue()
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // Building up initial state
        for (let vertex in this.adjacencyList)      // Loop through all vertices
        {
            if (vertex === startVertex) 
            {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            else 
            {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        let nodesLength = nodes.datas.length;

        while(nodesLength) // As long as there is something to visit
        {
            smallest = nodes.dequeue().value;

            if(smallest === finishVertex)
            {
                while(previous[smallest])       // Building up the Path
                {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity)
            {
                for (let neighbor in this.adjacencyList[smallest]) 
                {
                    let nextNode = this.adjacencyList[smallest][neighbor];      // Finds neighboring node

                    // Calculate new distance to neighboring node
            
                    let newDistance = distances[smallest] + nextNode.Value;     // Current smallest value + next node's Value

                    let nextNeighbor = nextNode.Node;

                    if(newDistance < distances[nextNeighbor])
                    {
                        distances[nextNeighbor] = newDistance;  // Updating new smallest distance to neighbor
                        previous[nextNeighbor] = smallest;      // Updating previous - how we got to neighbor
                        nodes.enqueue(nextNeighbor, newDistance); // Equeue in PQ with new priority
                    }
                }
            }
        }
        let result = path.concat(smallest).reverse().toString().replace(/,/g, ' -> ');

        console.log(`Shortest Path: ${result}`);

        return result;
    }
}
    

// This is an WEIGHTED UNDIRECTED GRAPH

/*

                              Dhaka
                     1500   /       \   1200
                           /   1300  \
                        Tokyo------Istanbul
                          |           |
                     1400 |           | 1000                          
                          |    500    |
                        London------Berlin
                           \         /
                        600 \       / 800
                               NYC

*/


let graph = new ShortestPathGraph();

graph.addVertex("Tokyo");
graph.addVertex("Dhaka");
graph.addVertex("Istanbul");
graph.addVertex("London");
graph.addVertex("Berlin");
graph.addVertex("NYC");

graph.addEdge("Dhaka", "Tokyo", 1500);
graph.addEdge("Dhaka", "Istanbul", 1200);
graph.addEdge("Tokyo","London", 1400);
graph.addEdge("Berlin", "Istanbul", 1000);
graph.addEdge("London", "Berlin", 500);
graph.addEdge("London", "NYC", 600);
graph.addEdge("NYC", "Berlin", 800);
graph.addEdge("Istanbul", "Tokyo", 1300);

graph.printGraph();
graph.dijkstra("Dhaka", "NYC");


graph.removeEdge("Dhaka", "Istanbul", 1200);

/*

                              Dhaka
                     1500   /          
                           /   1300  
                        Tokyo------Istanbul
                          |           |
                     1400 |           | 1000                          
                          |    500    |
                        London------Berlin
                           \         /
                        600 \       / 800
                               NYC

*/

graph.printGraph();
graph.dijkstra("Berlin", "Dhaka");


graph.removeVertex("Berlin");
graph.addEdge("Istanbul", "NYC", 600);

/*

                              Dhaka
                     1500   /          
                           /   1300  
                        Tokyo------Istanbul
                          |           |
                     1400 |           |                           
                          |           |
                        London        | 600
                           \         /
                        600 \       / 
                               NYC

*/

graph.printGraph();
graph.dijkstra("NYC", "Dhaka");
