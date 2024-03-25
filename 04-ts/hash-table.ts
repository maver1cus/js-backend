class HashTable<T> {
	private table: { [key: string]: T };
	private size: number;

	constructor(size: number) {
		this.table = {};
		this.size = size;
	}

	private hash(key: string): number {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i)) % this.size;
		}
		return hash;
	}

	insert(key: string, value: T): void {
		const index = this.hash(key);
		this.table[index] = value;
	}

	search(key: string): T {
		const index = this.hash(key);
		return this.table[index];
	}

	delete(key: string): void {
		const index = this.hash(key);
		delete this.table[index];
	}

	update(key: string, value: T): void {
		const index = this.hash(key);
		if (this.table[index]) {
			this.table[index] = value;
		}
	}

	count(): number {
		return Object.keys(this.table).length;
	}
}

// Пример использования
type HashValueType = number | string;

const myTable = new HashTable<HashValueType>(10);

myTable.insert('name', 'Alice');
myTable.insert('age', 30);

console.log(myTable.search('name'));

myTable.delete('age');
console.log(myTable.search('age'));

myTable.update('name', 'Bob');
console.log(myTable.search('name'));

console.log(myTable.count());
