'use strict';

// FOR LOOP

// for(var i = 2; i < 131072; i *= 2) {
//     console.log(i);
// }



// WHILE LOOP
var i = 2;

while ( i <= 65536) {
    console.log(i);
    i *= 2;
}

var allcones = Math.floor(Math.random() * 50) + 50;
console.log('Starting the day with ' + allcones + 'cones.');

do {
   var conesWanted =  Math.floor(Math.random() * 5) + 1;

   if (conesWanted <= allcones) {
       allcones -= conesWanted;
       console.log(conesWanted + "cones sold..");
   } else {
       console.log("Cannot sell you " + conesWanted + " cones. i only have " + allcones + "...");
   }

} while (allcones > 0);

console.log('Yay! I sold them all');