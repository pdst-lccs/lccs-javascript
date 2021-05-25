// Read the three numbers from the end user
let x1 = Number(prompt("Please enter 1st number: "));
let x2 = Number(prompt("Please enter 2nd number: "));
let x3 = Number(prompt("Please enter 3rd number: "));

function maxOf3(x1, x2, x3) {
  let max;  
  if ((x1 >= x2) && (x1 >= x3)) {
      max = x1;
  } else if ((x2 >= x1) && (x2 >= x3)) {
      max = x2;
  } else {
      max = x3;
  }
  
  return max;
}

// Display the output
console.log("The maximum number is", maxOf3(x1, x2, x3));
