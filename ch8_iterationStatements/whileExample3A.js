let runningTotal = 0;
let number = Number(prompt("Enter a number (0 to end):"));

while (number != 0) {
   runningTotal += number;
   number = Number(prompt("Enter a number (0 to end):"));
}

console.log("Total:", runningTotal);
