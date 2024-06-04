//Palindrom detection Exercise
const prompt = require("prompt-sync")({ sigint: true});
const palindrome = prompt("Insert a word: ");
let endToStart = palindrome.split('').reverse().join('');
  if (palindrome === endToStart) {
    console.log("This word is a palindrome!");
  } else {
    console.log("This word is not a palindrome.");
  }
console.log(endToStart);
