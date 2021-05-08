let {ShoppingCart} = require('../shoppingCart.js')
let {Product} = require('../product.js')
let assert = require('assert');

describe('Mocha Tests', function() {
  describe('Total Price of Shopping Carts', function() {
    const apple = new Product('apple', 4.95); 
     const orange = new Product('orange', 3.99);

    it('It should show a total price of $13.89 for 2 apples and 1 orange added in a shopping cart', function() {
      const cart = new ShoppingCart ();
      cart.addProduct(orange,1);
      cart.addProduct (apple,2);
      assert.equal(13.89, cart.total());
    });


    it('It should show a total price of $9.9 after adding 3 apples and removing 1 apple in a new shopping cart', function() {
      const cart_two = new ShoppingCart ();
      cart_two.addProduct (apple,3);
      cart_two.removeProduct (apple,1);
      assert.equal(9.9, cart_two.total());
    });
  }); 
});