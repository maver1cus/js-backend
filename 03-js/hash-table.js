class HashTable {
	constructor(size) {
		this.table = {};
		this.size = size;
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i)) % this.size;
		}
		return hash;
	}

	insert(key, value) {
		const index = this._hash(key);
		this.table[index] = value;
	}

	search(key) {
		const index = this._hash(key);
		return this.table[index];
	}

	delete(key) {
		const index = this._hash(key);
		delete this.table[index];
	}

	update(key, value) {
		const index = this._hash(key);
		if (this.table[index]) {
			this.table[index] = value;
		}
	}

	count() {
		return Object.keys(this.table).length;
	}
}

// Пример использования класса

const myTable = new HashTable(10);

myTable.insert('name', 'Alice');
myTable.insert('age', 30);

console.log(myTable.search('name'));

myTable.delete('age');
console.log(myTable.search('age'));

myTable.update('name', 'Bob');
console.log(myTable.search('name'));

console.log(myTable.count());
