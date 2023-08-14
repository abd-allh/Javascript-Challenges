function longestWord(str) {
  let words = str.split(" ")
  let longestWord = ""
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  /*********  Another way using forEach  *********/

  //   words.forEach((word) => {
  //     if (word.length > longestWord.length) {
  //       longestWord = word
  //     }
  //   })

  return longestWord
}
console.log(longestWord("I woke up early today"))
console.log(longestWord("I went straight to the beach"))
