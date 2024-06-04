#!/usr/bin/env node
const num1 = 3;
const num2 = 7;
const operator = "+";
if (operator == "+") {
  console.log(num1 + num2);
} else if (operator == "-") {
  console.log(num1 - num2);
} else if (operator == "*") {
  console.log(num1 * num2);
} else if (operator == "/") {
  console.log(num1 / num2);
} else {
  console.log("Unknown operator.")
}