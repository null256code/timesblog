// type UserId = Brand<string, 'UserId'>; みたいな形で使う
export type Brand<K, T> = K & { __brand: T };
