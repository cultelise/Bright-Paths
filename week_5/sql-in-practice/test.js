let wishlist = [
	{ name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light' },
	{ name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium' },
	{ name: 'Card Game', size: 'small', clatters: 'no', weight: 'light' },
];

let presents = [
	{ size: 'medium', clatters: 'a bit', weight: 'medium' },
	{ size: 'small', clatters: 'yes', weight: 'light' },
	{ size: 'small', clatters: 'no', weight: 'light' },
];

function guessGifts(gifts) {
	let toys = [];
	for (let gift of gifts) {
		for (let item of wishlist)
			item['size'] === gift['size']
				? item['clatters'] === gift['clatters']
					? item['weight'] === gift['weight']
						? toys.push(item['name'])
						: 0
					: 0
				: 0;
	}
	return toys;
}

console.log(guessGifts(presents));
