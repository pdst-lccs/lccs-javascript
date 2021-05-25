// Validate a month number
let month = Number(prompt("Enter a month number (1-12)"));
while (isNaN(month) || (month < 1 || month > 12)) {
   month = Number(prompt("Enter a month number (1-12)"));
}

console.log("Thank you. You entered a valid month number ... ");
