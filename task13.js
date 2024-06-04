//Palindrome Function
function isPalindrome(word) {
  let endToStart = word.split('').reverse().join('');
  if (word === endToStart === true) return true;
    else {
      return false;
    }
}
console.log(isPalindrome("oko"));