// Generate two random numbers between 1 and 10 incl.
let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;

let message = "What is "+n1+" + "+n2;
let userAnswer = prompt(message);

if ( userAnswer == n1+n2 ) {
  console.log("Correct - well done!");
} else {
  console.log("Sorry - incorrect answer!");
  console.log("The right answer is", n1+n2);
}
