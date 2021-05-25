// calculate n! (e.g. 5x4x3x2x1) 
let factorial = 1;
let n = 5;
let number = n;
while (number > 0) {
  factorial = factorial * number;
  number--;
}

console.log(n+"! =", factorial);
