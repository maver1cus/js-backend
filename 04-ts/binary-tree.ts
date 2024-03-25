class NodeBinaryTree {
	value: number;
	left: NodeBinaryTree | null;
	right: NodeBinaryTree | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	root: NodeBinaryTree | null;

	constructor() {
		this.root = null;
	}

	insert(value: number): void {
		const newNode = new NodeBinaryTree(value);

		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	private insertNode(node: NodeBinaryTree, newNode: NodeBinaryTree): void {
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	search(value: number): NodeBinaryTree | null {
		return this.searchNode(this.root, value);
	}

	private searchNode(
		node: NodeBinaryTree | null,
		value: number
	): NodeBinaryTree | null {
		if (!node || node.value === value) {
			return node;
		}

		if (value < node.value) {
			return this.searchNode(node.left, value);
		} else {
			return this.searchNode(node.right, value);
		}
	}

	delete(value: number): void {
		this.root = this.deleteNode(this.root, value);
	}

	private deleteNode(
		node: NodeBinaryTree | null,
		value: number
	): NodeBinaryTree | null {
		if (!node) {
			return null;
		}

		if (value < node.value) {
			node.left = this.deleteNode(node.left, value);
		} else if (value > node.value) {
			node.right = this.deleteNode(node.right, value);
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

			const minRight = this.findMinNode(node.right);
			node.value = minRight.value;
			node.right = this.deleteNode(node.right, minRight.value);
		}

		return node;
	}

	private findMinNode(node: NodeBinaryTree): NodeBinaryTree {
		if (!node.left) {
			return node;
		}
		return this.findMinNode(node.left);
	}

	update(oldValue: number, newValue: number): void {
		const nodeToUpdate = this.search(oldValue);
		if (nodeToUpdate) {
			nodeToUpdate.value = newValue;
		}
	}

	getHeight(): number {
		return this.calculateHeight(this.root);
	}

	private calculateHeight(node: NodeBinaryTree | null): number {
		if (!node) {
			return 0;
		}

		const leftHeight = this.calculateHeight(node.left);
		const rightHeight = this.calculateHeight(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}
}

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
