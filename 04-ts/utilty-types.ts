type PartialType<T> = {
	[K in keyof T]?: T[K];
};

// Пример использования
interface User {
	name: string;
	age: number;
}

type PartialUser = PartialType<User>;

type ReadonlyType<T> = {
	readonly [K in keyof T]: T[K];
};

// Пример использования
interface Book {
	title: string;
	author: string;
}

type ReadonlyBook = ReadonlyType<Book>;

type OmitType<T, K extends keyof T> = {
	[P in Exclude<keyof T, K>]: T[P];
};

// Пример использования
interface Person {
	name: string;
	age: number;
	city: string;
}

type PersonWithoutAge = OmitType<Person, 'age'>;
