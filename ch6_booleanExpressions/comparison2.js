// Comparisons - strings and numbers
console.log(3 < "20"); // true ("20" converted to 20)
console.log("3" <= "20"); // false (comparing two strings: Unicodes are 3:51, 2:50)
console.log("5" == 5); // true ("5" converted to 5)
console.log("5" === 5); // false (because they are not strictly equal)
console.log("five" == 5); // false ("five" is NaN)
console.log("shark" > "5"); // true (comparing two strings: Unicodes are s:115, 5:53)
console.log("shark" > 5); // false ("shark" is NaN)
