// prompt the user to enter a string
let inString = prompt("Enter a string:");
let vowels = 0;
let ch;

for(let i = 0; i < inString.length; i ++) {

  // Extract the next character (from position i) ...
  // ... and convert it to upper case
  ch = inString.charAt(i).toUpperCase();

  // if ch is a vowel increment the vowel counter
  if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    vowels ++;
}
// display the result
console.log("The number of vowels found was", vowels);
