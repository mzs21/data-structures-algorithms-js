class Node
{
    constructor(data, previous, next)
    {
        this.data = data;
        this.previous = previous || null;
        this.next = next || null;
    }
}

module.exports = Node;