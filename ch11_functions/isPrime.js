let x = Number(prompt("Please enter an integer: "));
let prime;
if (x <= 0)
  prime = false;
else
  prime = true;
  
if (x > 2) {
  let denominator = 2;
  while (denominator <= Math.sqrt(x)) {
    if (x % denominator === 0) {
      prime = false;
      break;
    } else {
      denominator++;
    } // end else
  } // end while
} // end if
	
if (prime)
  console.log(x+" is prime");
else
  console.log(x+" is NOT prime");

