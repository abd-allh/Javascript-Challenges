/*
 return true only if all values are unique, otherwise false
 using Array, Object, string method lastIndexOf(), Set() Data Structure
*/
function unique(str) {
  /*********  Using Set() Data Structure  *********/
  let tempStr = new Set() // It only accept unique values!

  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false
    }
    tempStr.add(letter)
  }
  return true
  /*********  Another way using lastIndexOf()  *********/
  //   for (let i = 0; i < str.length; i++) {
  //     //console.log(str.lastIndexOf(str[i])) // See what's happening!
  //     if (str.lastIndexOf(str[i]) !== i) {
  //       return false
  //     }
  //   }
  //   return true
  /*********  Another way using Object  *********/
  //   let values = {}
  //   for (let letter of str) {
  //     if (values[letter]) {
  //       return false
  //     }
  //     values[letter] = "exists"
  //   }
  //   return true
  /*********  Another way using Array  *********/
  //   let values = []
  //   for (let letter of str) {
  //     // console.log(values.indexOf(letter))
  //     // values = [...values, letter]
  //     if (values.indexOf(letter) !== -1) {
  //       return false
  //     }
  //     values.push(letter) // See in line 10 ;)
  //   }
  //   return true
}

console.log(unique("abcde"))
// true
console.log(unique("abacdefb"))
// false
