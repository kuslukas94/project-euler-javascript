//User input Excercise
const prompt = require("prompt-sync")({ sigint: true});
const num = prompt("Insert a number: ");
if (num % 2 === 0) {
    console.log(`${num} je sudé číslo.`);
  } else {
    console.log(`${num} je liché číslo.`);
  }
let res = 1;
for (i = 1; i <= num; i++) {
  res = res * i;
}
console.log(`Jeho factorial je: ${res}.`)