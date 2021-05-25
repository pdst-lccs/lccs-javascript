let uprCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lwrCaseLetters = "abcdefghijklmnopqrstuvwxyz"
let letters = uprCaseLetters+lwrCaseLetters

console.log(uprCaseLetters.toLowerCase());
console.log(lwrCaseLetters.toLowerCase());
            
console.log(uprCaseLetters.slice(0,5));
console.log(uprCaseLetters.slice(20));
console.log(lwrCaseLetters.slice(1,6));

console.log(letters.slice(26,52));
console.log(letters.indexOf("a"));
console.log(letters.lastIndexOf("A"));
console.log(letters.replace("abc", "123"));

console.log(uprCaseLetters == lwrCaseLetters);
console.log(uprCaseLetters == lwrCaseLetters.toUpperCase());
