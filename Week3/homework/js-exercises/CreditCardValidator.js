'use strict'; 

// numOfDigitIs16 function test if number of input is 16 objects
function numOfDigitIs16 (input) {
    
    if ( input.length == 16  ) 
        return true;
    else 
        return false;
}

// inputIsNumber function test if  input's objects are integers
function inputIsNumber (input){
    
    let flag = true;
    
    for ( let i of input ) {
        if ( ! (i >= '0' && i <= '9') ) {
            flag = false;
            break;
        } 
    }
    return flag;
}

// validate if the input have a set of more than an object
function differentDigits (input) {
    
    let mySet = new Set ();
    
    for ( let i of input) 
        mySet.add (i); // set only store the same object once
    
    if ( mySet.size > 1) 
        return true;
    else 
        return false;
}

// validate if the last object of input is an even integer
function finalEven (input) {
    
    if ( input [ input.length - 1 ] % 2 == 0 )
        return true;
    else 
        return false;
}

// validate if the sum of input digits bigger than 16
function sumOfDigits (input) {
    
    let sum = 0;
    
    for ( let i of input)
    {
        sum = sum + Number.parseInt(i);
    }
    if ( sum > 16)
        return true;
    else
        return false;
}


function creditCardValidator (input) {
   
    if ( numOfDigitIs16(input) && inputIsNumber(input) && differentDigits(input) && finalEven(input) && sumOfDigits(input) ) 
        return `your card number ( ${input} ) is VALID`;
    else
        return `your card number ( ${input} ) is INVALID`;
}


console.log( creditCardValidator('9999777788880000') );
console.log( creditCardValidator('6666666666661666') );
console.log( creditCardValidator('a92332119c011112') );
console.log( creditCardValidator('4444444444444444') );
console.log( creditCardValidator('1111111111111110') );
console.log( creditCardValidator('6666666666666661') );