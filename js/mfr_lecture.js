"use strict";
// .map
// (x) is representing the number in the array = 4 ** 2 = 16 etc
const myNumbers = [4,5,6,7,8];

const myNewNumbers  = myNumbers.map(x => x ** 2);

const greaterThanSix = myNumbers.filter(x => x > 6);
const sumNumbers = myNumbers.reduce(currentSum =>
// this returns [16,25,36,49,64]
console.log(myNewNumbers);
// this returns
console.log(greaterThanSix);

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];
//use reduce to return the longest author name
const longestName = books.reduce(function(previous,current){
    const currentName = current.author;
    if(currentName.length > previous.length) {
        return currentName;
    }else {
        return previous;
    }
},'');

//maps through and returns all book titles
const bookTitles = books.map(book => book.title);

//filters through to check for 'coming in age' in genres
//returns book titles of matches
const commingOfAge = books.map(book => book.genres.indexOf('coming of age') >= 0).map(book => book.title);

/*
    MAP
    using .map, create an array that returns all author names.
 */
const authors = books.map(book => book.author);
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const bookGenres = books.filter(book => book.genres.length > 2).map(book => book.title);
console.log(bookGenres);
/*
    REDUCE
    using .reduce, return the total years between all books.
 */const totalYears = books.reduce(function(accumulation,current){
    return accumulation + current.yearsInPublication;
},0);

console.log(totalYears);