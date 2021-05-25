let ages = [18, 16, 18, 17, 19, 17];
let max = 0;

for (let i=0; i < ages.length; i++) {
  if (ages[i] > max)
    max = ages[i];
}

console.log("The maximum age is %d",  max);
