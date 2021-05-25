let counter = 0;
let runningTotal = 0;
let number = prompt("Enter a number ('stop' to end):");

while (number != 'stop') {
   counter++; // Increment counter
   number = Number(number)
   runningTotal += number;
   number = prompt("Enter a number ('stop' to end):");
}

if (counter == 0) // avoid dividing by zero
   console.log("No mean value as there were no values entered");
else
   console.log("Mean value:", runningTotal/counter);
