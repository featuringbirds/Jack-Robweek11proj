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

  search(target) {
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
    if (currentNode === null) return;
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)

    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (this.root === null) return []
    const values = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      values.push(current.val);
      console.log(current.val);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return values;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (this.root === null) return [];
    const result = [];
    const stack = [this.root];
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.val);
      console.log(current.val);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right)
    }
    return result;
}
}

module.exports = { BinarySearchTree, TreeNode };
