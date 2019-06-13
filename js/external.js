"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');
var userColor = prompt("Whats your favorite color?");
alert("That's awesome, " + userColor + " is my favorite color too!");



var littleMermaidRental = prompt("How many days you renting The Little Mermaid?");
var brotherBearRental = prompt("How many days you renting Brother Bear?");
var herculesRental = prompt("How many days you renting Hercules?");

var total = (littleMermaidRental + brotherBearRental + herculesRental) * 3;

alert("You owe Hollywood video: $" + total.toFixed(2));



var googleRate = 400;
var amazonRate = 380;
var fbRate = 350;

var googleHours = Number(prompt("How many hours did your work for Google this week?"));
var amazonHours = Number(prompt("How many hours did your work for Amazon this week?"));
var fbHours = Number(prompt("How many hours did your work for Facebook this week?"));



alert("You earned $" + ((googleHours * googleRate) + (amazonHours * amazonRate) + (fbHours * fbRate)).toFixed(2));



var classTime = prompt("What time is the class");
var noScheduleConflict = !confirm("Does the student have a class at " + classTime);

var maxClassSize = Number(prompt("What's the maximum class size?"));
var studentsEnrolled = Number(prompt('How many students are currently enrolled?'));
console.log(studentsEnrolled < maxClassSize);
alert('Students can enroll in class: ' + (noScheduleConflict && (studentsEnrolled < maxClassSize)));


var isPremiumMember = confirm("Is the customer a premium member?");
var numberItemsBought = Number(prompt("How many items did the customer buy?"));
var isOfferValid = confirm("Is this coupon still valid?");

alert("Customer coupon valid : " + (isOfferValid && (isPremiumMember || numberItemsBought >= 2)));