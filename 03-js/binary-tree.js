class NodeBinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new NodeBinaryTree(value);

		if (!this.root) {
			this.root = newNode;
		} else {
			this._insertNode(this.root, newNode);
		}
	}

	_insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this._insertNode(node.left, newNode);
			}
		} else {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	search(value) {
		return this._searchNode(this.root, value);
	}

	_searchNode(node, value) {
		if (!node || node.value === value) {
			return node;
		}

		if (value < node.value) {
			return this._searchNode(node.left, value);
		} else {
			return this._searchNode(node.right, value);
		}
	}

	delete(value) {
		this.root = this._deleteNode(this.root, value);
	}

	_deleteNode(node, value) {
		if (!node) {
			return null;
		}

		if (value < node.value) {
			node.left = this._deleteNode(node.left, value);
		} else if (value > node.value) {
			node.right = this._deleteNode(node.right, value);
		} else {
			if (!node.left && !node.right) {
				return null;
			}

			if (!node.left) {
				return node.right;
			}

			if (!node.right) {
				return node.left;
			}

			const minRight = this._findMinNode(node.right);
			node.value = minRight.value;
			node.right = this._deleteNode(node.right, minRight.value);
		}

		return node;
	}

	_findMinNode(node) {
		if (!node.left) {
			return node;
		}
		return this.findMinNode(node.left);
	}

	update(oldValue, newValue) {
		const nodeToUpdate = this.search(oldValue);
		if (nodeToUpdate) {
			nodeToUpdate.value = newValue;
		}
	}

	getHeight() {
		return this._calculateHeight(this.root);
	}

	_calculateHeight(node) {
		if (!node) {
			return 0;
		}

		const leftHeight = this._calculateHeight(node.left);
		const rightHeight = this._calculateHeight(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}
}

// Пример использования класса

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log('Height of the tree:', binaryTree.getHeight());

binaryTree.update(5, 8);

binaryTree.delete(15);

console.log('Height of the tree after deletion:', binaryTree.getHeight());
