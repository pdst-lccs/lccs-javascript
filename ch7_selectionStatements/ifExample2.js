let date = new Date();
let computerYear = date.getFullYear();
let userYear = prompt("Enter the current year");

if (userYear == computerYear) {
   console.log("You are correct");
   console.log("Well done!");
}

console.log("The current year is", computerYear);