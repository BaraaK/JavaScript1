'use strict';

function giveCompliment (name) {
let complimentList = ['You\'re an awesome friend.','You\'re a gift to those around you.',
                      'You are awesome!','I like your style.','You have the best laugh.','I appreciate you.',
                      'You\'re strong.','Your perspective is refreshing.','I\'m grateful to know you.','You deserve a hug right now.'];
return ` ${ name } ${ complimentList [ Math.floor ( Math.random () * complimentList.length  ) ] } `;
}

console.log( giveCompliment ("Alaska") );
console.log( giveCompliment ("Alaska") );
console.log( giveCompliment ("Alaska") );