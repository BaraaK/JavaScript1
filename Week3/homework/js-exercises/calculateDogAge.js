'use strict';

function calculateDogAge (age) {
 if ( Number.isInteger (age) )
    return `Your doggie is ${ age * 7 } years old in dog years!`;
 else {
    return `Enter integer numbers`;
}
}
console.log (calculateDogAge (2) );
console.log (calculateDogAge (5) );
console.log (calculateDogAge (1.5) );
console.log (calculateDogAge ("one year") );