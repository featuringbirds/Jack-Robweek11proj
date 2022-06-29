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
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
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
