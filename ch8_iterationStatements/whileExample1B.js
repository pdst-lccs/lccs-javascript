let counter = 0;
let tables = prompt("What times tables do you require?");
while (counter <= 12) {
   console.log(tables, "x", counter, "=", tables*counter);
   counter++; // Increment counter
}
