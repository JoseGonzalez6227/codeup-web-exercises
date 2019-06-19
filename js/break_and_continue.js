"use strict";
do {
    var numberPicked = prompt('Chose an odd number between 1 and 50');
    if (numberPicked % 2 === 0)
        alert(numberPicked + ' is not odd, please pick again');
    else {
        alert('Congrats you picked the right number');
        break;
    }
} while (numberPicked <= 50);

var yikes = function (skip) {
    for (var i = 1; i < 50; i += 2) {
        if (i === skip) {
            console.log('Yikes! Skipping number: ' + i);
            continue;
        }
        console.log('Here is an odd number:' + i);
    }
};
yikes(numberPicked);