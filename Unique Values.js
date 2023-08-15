/*
 return true only if all values are unique, otherwise false
 using Array, Object, string method lastIndexOf()
 no Set Data Structure
*/
function unique(str) {
  let values = {}
  for (let letter of str) {
    if (values[letter]) {
      return false
    }
    values[letter] = "exists"
  }
  return true
}

console.log(unique("abcde"))
// true
console.log(unique("abacdefb"))
// false
