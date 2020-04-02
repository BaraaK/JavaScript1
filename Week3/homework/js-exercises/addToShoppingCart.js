'use strict'; 

let cart = ['bananas','milk'];
function addToShoppingCart (item) {
if ( cart.length >= 3 ) 
    cart.shift();

cart.push (item);
    
return `You bought ${cart}!`
}
console.log ( addToShoppingCart ("apples") ) ;
console.log ( addToShoppingCart ("Cheese") ) ;
console.log ( addToShoppingCart ("Bread") ) ;