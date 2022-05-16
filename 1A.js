const string = "hello amrut hello amrut hello";

// console.log(string.charAt(0));
function countWords(string, word1, word2) {
  let array = string.split(" "); //.split converts string to array of substrings.
  let count = 0;
  let count1 = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === word1) {
      count++;
    }
    if (array[i] === word2) {
      count1++;
    }
  }
  //   if (count > count1) {
  //     console.log(`${word1} > ${word2}`);
  //   } else {
  //     console.log(`${word2} > ${word1}`);
  //   }
  console.log(count > count1 ? `${word1} > ${word2}` : `${word2} > ${word1}`);
}

// console.log(countWords);
countWords(string, "hi", "amrut");
