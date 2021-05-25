let age = prompt("Enter your age and I will tell you the year you were born");
let currentYear = new Date().getFullYear(); // Get the current year, yyyy
console.log("You were born in", currentYear - age);
