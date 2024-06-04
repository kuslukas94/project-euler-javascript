#!/usr/bin/env node
//Task 4 using Switch Case
const num1 = 3;
const num2 = 5;
const operator = "+";
let res = "";
switch (operator) {
  case "+":
    res = num1 + num2;
    break;
  case "-":
    res = num1 - num2;
    break;
  case "*":
    res = num1 * num2;
    break;
  case "/":
    res = num1 / num2;
    break;
}
console.log(res);
