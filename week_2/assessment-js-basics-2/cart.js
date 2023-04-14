///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: 'pizza',
    price: 9.99,
  },
  {
    name: 'pasta',
    price: 8.99,
  },
  {
    name: 'salad',
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) =>
  cartTotal * (1 + tax) - couponValue;

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The first property in the customer object would be a unique id number associated with the customer. 
    This property is important to identify the particular customer and to make their data easily retrievable within the database.
    A number is used because numbers are easily scalable and unique.

    The second property would be the customer's name as a string. 
    This property is important for general identification, shipping, and marketing purposes.
    A string is used because strings are the data types which most effectively store meaningful, easily copyable text.

    The third property would be the customer's address as an object with two properties, each with values as an array of strings.
    This property is important for shipping, identification, verification and marketing purposes.
    A string is used for the same reasons as the name, and an object/array is used for multiple billing and mailing addresses.

    The fourth property would be an email address saved as a string.
    This might have been the first or second property, if these were sorted by significance, since emails are so important these days.
    For minimal conversion requirements, we would save the emails as strings.

    The fifth property would be an array of objects representing past purchases.
    This is useful for keeping track of orders and customer spending habits.
    An array of objects allows us to organize the purchases however we like, 
    with any number of descriptor properties (like amounts purchased, or order number).

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerObject = {
  id: 782108239,
  name: 'Elise Heard',
  addresses: {
    mailing: [
      '123 Forest Way, Bev Hills, CA 90210',
      '321 Mountain Lane, NY, NY 10001',
    ],
    billing: ['1000 Wall Street, NY, NY 10004'],
  },
  email: 'elise@notavalidemail.com',
  pastPurchases: [
    { orderID: 12938, items: ['yo-yo', 'socks'], totalDollars: 20 },
  ],
};
