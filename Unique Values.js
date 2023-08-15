/*
 return true only if all values are unique, otherwise false
 using Array, Object, string method lastIndexOf()
 no Set Data Structure
*/
function unique(str) {
  let values = []
  for (let letter of str) {
    // console.log(values.indexOf(letter))
    // values = [...values, letter]
    if (values.indexOf(letter) !== -1) {
      return false
    }
    values.push(letter) // See in line 10 ;)
  }
  return true
}

console.log(unique("abcde"))
// true
console.log(unique("abacdefb"))
// false
