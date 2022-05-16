let array = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < array.length / 2; i++) {
  let temp = array[i]; //A
  array[i] = array[array.length - 1 - i]; //E
  array[array.length - 1 - i] = temp;
}
console.log(array);
