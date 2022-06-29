// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;

  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
      } else if (currentNode.left !== null) {
        this.insert(val, currentNode.left);
      }
    } else {
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
        } else if (currentNode.right !== null) {
          this.insert(val, currentNode.right);
        }
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.val === target) return true;
      else if (target < currentNode.val) {
        currentNode = currentNode.left;
      } else if (target > currentNode.val) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    //self, left right
    if (currentNode === null) return

    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    //left, self right
    if (currentNode === null) return;

    this.inOrderTraversal(currentNode.left)

    console.log(currentNode.val)

    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    //left, right, self
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
