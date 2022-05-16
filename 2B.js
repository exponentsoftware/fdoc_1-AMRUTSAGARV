// ?Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

// function sevenRandomNumbers(n) {
//   return Math.random() * (n + 1);
// }

// console.log(sevenRandomNumbers(10));
// The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

const sevenRandomNumbers = () => {
  let array = [];

  for (let i = 0; i < 8; i++) {
    let num = Math.floor(Math.random() * 10);
    array.includes(num) ? num : array.push(num);
  }
  return array;
};
console.log(sevenRandomNumbers());
