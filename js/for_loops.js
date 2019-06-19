'use strict';

// Multiplication tables

var showMultiplicationTable = 7;
for (var x = 1; x <= 10; x++) {
    var result = showMultiplicationTable * x;
    console.log(showMultiplicationTable + ' * ' + x + ' = ' + result);
    }




for (var j=0;j<11;j++) {
    var randomNum = Math.floor(Math.random() * 100) + 20;
    var remainderNum = randomNum % 2;
    // switch (remainderNum) {
    //     case 0:console.log(randomNum + " is even");
    //     break;
    //     default:console.log(randomNum + ' is odd');
    // }
     if (remainderNum === 0) {
         console.log(randomNum + " is even");
     } else {
         console.log(randomNum + ' is odd');
     }
}




for (i = 1; i <= 9; i++) {
    var res = [];
    for (var a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}






for(var i = 100; i >= 5; i -= 5) {

    console.log(i);

}