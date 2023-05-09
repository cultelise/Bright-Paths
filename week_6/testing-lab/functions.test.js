let {
	returnTwo,
	greeting,
	add,
	multiply,
	divide,
	subtract,
} = require('./functions.js');

test('should return 2', () => {
	expect(returnTwo()).toBe(2);
});

test('greetings should return hello, (name)', () => {
	expect(greeting('Elise')).toBe('Hello, Elise.');
	expect(greeting('James')).toBe('Hello, James.');
});

describe('math functions', () => {
	test('add should add two arguments', () => {
		expect(add(2, 2)).toBe(4);
		expect(add(5, 9)).toBe(14);
	});
	test('multiply should multiply two arguments', () => {
		expect(multiply(2, 2)).toBe(4);
		expect(multiply(5, 9)).toBe(45);
	});
	test('divide should divide two arguments', () => {
		expect(divide(2, 2)).toBe(1);
		expect(divide(200, 5)).toBe(40);
	});
	test('subtract should subtract two arguments', () => {
		expect(subtract(2, 2)).toBe(0);
		expect(subtract(5, 9)).toBe(-4);
	});
});
