function capitalizeWords(str) {
  let words = str.split(" ").map((word) => {
    // let firstLetter = word.slice(0, 1)
    // let rest = word.slice(1)
    // firstLetter = firstLetter.toUpperCase()
    // return `${firstLetter}${rest}`

    /*********  Another way using charAt  *********/

    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return words.join(" ")
}

console.log(capitalizeWords("I woke up early today"))
console.log(capitalizeWords("I went straight to the beach"))
