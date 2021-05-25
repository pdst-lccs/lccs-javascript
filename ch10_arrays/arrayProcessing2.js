let ages = [18, 16, 18, 17, 19, 17];
let total = 0;

for (let i=0; i < ages.length; i++) 
  total = total + ages[i];

console.log("The mean age is %d", total/ages.length);
