let inString = prompt("Enter a string:");
let vowels = 0;
let ch;

for(let i = 0; i < inString.length; i ++) {

  // Extract the next character (from position i) ...
  // ... and convert it to upper case
  ch = inString.charAt(i).toUpperCase();

  if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    vowels ++;
}

console.log("The number of vowels found was", vowels);
