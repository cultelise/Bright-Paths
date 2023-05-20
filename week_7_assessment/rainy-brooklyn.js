function addToZero(arr) {
	let x = false;

	arr.forEach((num, index) => {
		for (let i = index + 1; i < arr.length; i++) {
			const element = arr[i];
			if (num + element === 0) {
				x = true;
			}
		}
	});

	return x;
}
// 10ms, O(1)
console.log(addToZero([1, 2, 3, -2]));

function hasUniqueChars(str) {
	let strArr = [];

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (strArr.includes(char)) {
			return false;
		}
		strArr.push(char);
	}

	return true;
}
// 20ms, O(n)
console.log(hasUniqueChars('Monday'));

function isPangram(str) {
	let isPangram = true;
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	alphabet.forEach((letter) => {
		if (!str.includes(letter)) {
			isPangram = false;
		}
	});

	return isPangram;
}
// 50ms, O(1)
console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
console.log(isPangram('I like cats, but not mice'));

function findLongestWord(list) {
	let lengthArr = [];

	list.forEach((element) => {
		lengthArr.push(element.length);
	});

	return list[lengthArr.indexOf(Math.max(...lengthArr))];
}
// 50ms O(n)
console.log(findLongestWord(['hi', 'hello']));
