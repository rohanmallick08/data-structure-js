// Implement Binary Search Tree
// AVL Tree and RED Black Tree is self Balancing Tree which balance the
// Unbalace tree by self.
// https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
// https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
// https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
// https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
// https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }

        var currentNode = this.root;
        while(true) {
            if (value < currentNode.value) {
                // Traserse Left
                if (!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                     currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
        return this;
    }

    lookup(value) {
        if (!this.root) return false;
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                // Look up Left
                currentNode = currentNode.left;
            } else {
                // Look up Right
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
        if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
        } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
        } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
            if (parentNode === null) {
                this.root = currentNode.left;
            } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
                }
            }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
                this.root = currentNode.right;
            } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
                }
            }
            
            //Option 3: Right child that has a left child
            } else {

                //find the Right child's left most child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                while(leftmost.left !== null) {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                }
                
                //Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;

                if(parentNode === null) {
                    this.root = leftmost;
                } else {
                    if(currentNode.value < parentNode.value) {
                    parentNode.left = leftmost;
                    } else if(currentNode.value > parentNode.value) {
                    parentNode.right = leftmost;
                    }
                }
            }
        return true;
        }
        }
    }
}

var bst = new BinarySearchTree();
bst.insert(12);
bst.insert(8);
bst.insert(14);
bst.insert(10);
bst.insert(19);
bst.insert(16);
bst.insert(15);
bst.lookup(16)

JSON.stringify(traverse(bst.root))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

