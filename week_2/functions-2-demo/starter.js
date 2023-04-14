////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: 'leash',
    colors: ['red', 'blue', 'green'],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: 'chew toy',
    colors: ['brown'],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: 'rope',
    colors: ['blue & green', 'red & yellow'],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: 'mouse toy',
    colors: ['pink', 'grey', 'black'],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: 'scratching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// CODE HERE
//apply discount by percentage or rate

const applyPercentDiscount = (product, discountPercent) => {
  product.displayPrice *= 1 - discountPercent / 100;
  console.log(product.displayPrice);
};

console.log(20 / 100);

// applyPercentDiscount(catProducts[0], 50);
// console.log(catProducts);

const applyFlatDiscount = (product, discountFlat) => {
  product.displayPrice -= discountFlat;
};

const applyDiscounts = (arr, cb, discount) => {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    cb(product, discount);
  }
};
// console.log(dogProducts);
// applyDiscounts(dogProducts, applyFlatDiscount, 1);
// console.log(dogProducts);
// console.log(catProducts);
// applyDiscounts(catProducts, applyPercentDiscount, 50);
// console.log(catProducts);

//apply discount by categories

const discountByCategory = (arr, cb, discount, category) => {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    if (product.category === category) {
      cb(product, discount);
    }
  }
};

// console.log(catProducts);
// discountByCategory(catProducts, applyFlatDiscount, 1, 2);
// console.log(catProducts);

//apply discount by inventory

const discountByInventory = (arr, cb, discount, threshold) => {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    if (product.inventory < threshold) {
      cb(product, discount);
    }
  }
};

// discountByInventory(catProducts, applyFlatDiscount, 2, 100);
// console.log(catProducts);

const discountByColor = (arr, cb, discount, color) => {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    for (let productColor of product.colors)
      if (productColor === color) {
        cb(product, discount);
      }
  }
};

discountByColor(catProducts, applyFlatDiscount, 2, 'tan');
console.log(catProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
