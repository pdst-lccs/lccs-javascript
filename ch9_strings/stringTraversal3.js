let s = prompt("Enter a string:");
let isPalindrom = true;

// Traverse the string comparing each char
for (let i=0, j = s.length-1; i < s.length; i++, j--) {
  if (s[i] != s[j]) {
    isPalindrom = false;
    break;
  }
}
// Display the result
if (isPalindrom)
  console.log(s, "is a palindrome!");
else
  console.log(s, "is not a palindrome!");
