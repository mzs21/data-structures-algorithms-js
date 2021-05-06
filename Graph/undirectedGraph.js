class UndirectedGraph
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
                let adjacentVertex = this.adjacencyList[vertex].pop(); // Will pop all the value 
                this.removeEdge(vertex, adjacentVertex);               // Will remove all edges 
            }
            delete this.adjacencyList[vertex];
        }
        else throw new Error(`Vertex doesn't exist`);
    }

    addEdge(vertexOne, vertexTwo)      // Time Complexity O(1)
    {
        if(this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo])      // If both vertices exist 
        {
            this.adjacencyList[vertexOne].push(vertexTwo);
            this.adjacencyList[vertexTwo].push(vertexOne);
        }
        else throw new Error(`Vertex doesn't exist`);
    }

    removeEdge(vertexOne, vertexTwo)    // Time Complexity O(|EDGE|)
    {
        if(this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo])      // If both vertices exist 
        {
            this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(vertex => vertex !== vertexTwo);
            this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(vertex => vertex !== vertexOne);
        }
        else throw new Error(`Vertex doesn't exist`);
    }

    printGraph()
    {
        console.log('Graph:\n', this.adjacencyList);
    }

    // Recursive DFS
    
    DFS(startVertex)
    {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function DFSRecursive(vertex)
        {
            if(!vertex) return null;            // If the vertex doesn't exist, return null

            visited[vertex] = true;             // Will set the vertex as visited

            result.push(vertex);                // Then push the vertex

            adjacencyList[vertex].forEach(neighbor =>   // Will loop through all the vertices
                {
                    if(!visited[neighbor]) return DFSRecursive(neighbor);   // If the vertex is not visited, we'll do recursion
                });
        })(startVertex);
        
        console.log(`DFS: ${result}`);

        return result;
    }
    

    // Iterative DFS
    /*
    DFS(startVertex)
    {
        let stack = [startVertex];              // Will keep track of vertices
        let result = [];
        let visited = {};
        let currentVertex;

        visited[startVertex] = true;              // Will set the vertex as visited

        while(stack.length)                       // while stack is not empty
        {
            currentVertex = stack.pop();          // Pop, then

            result.push(currentVertex);           // push to the result array

            this.adjacencyList[currentVertex].forEach(neighbor =>       // Will loop through all the vertices
                {
                    if(!visited[neighbor])                              // If the vertex is not visited
                    {   
                        visited[neighbor] = true;                       // make it visited

                        stack.push(neighbor);                           // Then push it to the stack
                    }
                });
        }

        console.log(`DFS: ${result}`);

        return result;
    }
    */

    BFS(startVertex)
    {
        let queue = [startVertex];              // Will keep track of vertices
        let result = [];
        let visited = {};
        let currentVertex; 

        visited[startVertex] = true;              // Will set the vertex as visited

        while(queue.length)                       // while stack is not empty
        {
            currentVertex = queue.shift();        // Shift, then

            result.push(currentVertex);           // push to the result array 

            this.adjacencyList[currentVertex].forEach(neighbor =>       // Will loop through all the vertices
                {
                    if(!visited[neighbor])                              // If the vertex is not visited
                    {
                        visited[neighbor] = true;                       // make it visited

                        queue.push(neighbor);                           // Then push it to the queue
                    }
                });
        }

        console.log(`BFS: ${result}`);

        return result;
    }
}

// There will be a difference between the output of Recursive DFS & Iterative DFS 

// To change the order of BFS do 'this.adjacencyList[currentVertex].slice().reverse().forEach' on line 131

// UNDIRECTED GRAPH

/*

                              Dhaka
                            /       \
                           /         \
                        Tokyo      Istanbul
                          |           |
                          |           |                           
                          |           |
                        London------Berlin
                           \         /
                            \       /
                               NYC

*/


let graph = new UndirectedGraph();

graph.addVertex("Tokyo");
graph.addVertex("Dhaka");
graph.addVertex("Istanbul");
graph.addVertex("London");
graph.addVertex("Berlin");
graph.addVertex("NYC");

graph.addEdge("Dhaka", "Tokyo");
graph.addEdge("Dhaka", "Istanbul");
graph.addEdge("Tokyo","London");
graph.addEdge("Berlin", "Istanbul");
graph.addEdge("London", "Berlin");
graph.addEdge("London", "NYC");
graph.addEdge("NYC", "Berlin");

graph.printGraph();
graph.DFS("Dhaka");
graph.BFS("Dhaka");


graph.removeEdge("Dhaka", "Istanbul")

/*

                              Dhaka
                            /       
                           /         
                        Tokyo      Istanbul
                          |           |
                          |           |                           
                          |           |
                        London------Berlin
                           \         /
                            \       /
                               NYC

*/

graph.printGraph();
graph.DFS("Dhaka");
graph.BFS("Dhaka");

graph.removeVertex("Berlin");

/*

                              Dhaka
                            /       
                           /         
                        Tokyo      Istanbul
                          |           |
                          |           |                           
                          |           |
                        London------
                           \         /
                            \       /
                               NYC

*/

graph.printGraph();
graph.DFS("Dhaka");
graph.BFS("Dhaka");
