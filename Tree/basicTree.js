class Tree
{
    constructor(data)
    {
        this.parent = data;
    }
}

/*
                                         a
                                     ____|____
                                    /    |    \
                                   b     c     d
                                         |    / \
                                         e   f   g                           
*/

/*
const a = new Tree('a');
const b = new Tree('b');
const c = new Tree('c');
const d = new Tree('d');
const e = new Tree('e');
const f = new Tree('f');
const g = new Tree('g');

a.b = b;
a.c = c;
a.d = d;

c.e = e;

d.f = f;
d.g = g;

console.log(a);
*/
