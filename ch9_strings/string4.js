let s1 = "Joe";
let s2 = "Joe";
let s3 = s2;
let s4 = new String("Joe");
let s5 = new String("Joe");
let s6 = s5;

console.log(s1 == s2); // true
console.log(s1 == s3); // true
console.log(s1 == s4); // true
console.log(s4 == s5); // false
console.log(s5 == s6); // true

console.log(s1 === s2); // true
console.log(s1 === s3); // true
console.log(s1 === s4); // false
console.log(s4 === s5); // false
console.log(s5 === s6); // true
