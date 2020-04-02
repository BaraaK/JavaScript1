'use strict';

function myTypeOf (input) {
    // return !( isNaN(input) )
    if ( typeof (input) === "number") 
        return true;
    else
        return false;
}
function calculateTotalPrice (obj) {
    let sum = 0;
    let flag = true;

    const arr = Object.values(obj);
    for ( let i of arr) { 
        if ( !(myTypeOf(i)) ) {
            flag = false;
            break;
        }
    }
    if ( flag ) {
        for ( let i of arr ) {
                sum += i;
        } 
        return sum.toFixed(2);
    }
    else
        return " object does not contains properties that  contain number values";

}
 let cartForParty = {banana : 2.4 , appel : 1.75 , water : 12 , chips : 3.25 , sugar : 4.15}
console.log (calculateTotalPrice(cartForParty));
