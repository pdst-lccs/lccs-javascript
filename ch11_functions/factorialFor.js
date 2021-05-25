// calculate n! (e.g. 5x4x3x2x1) 
let factorial = 1;
let n = 5;
for (let number = n; number > 0; number--) {
  factorial = factorial * number;
}

console.log(n+"! =", factorial);
