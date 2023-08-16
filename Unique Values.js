/*
 return true only if all values are unique, otherwise false
 using one clever Oneliner Set() Data Structure ;)
*/
function unique(str) {
  return new Set(str).size === str.length
}

console.log(unique("abcde"))
// true
console.log(unique("abacdefb"))
// false
