// A function to determine ‘oddness’
function isOdd(number) {
  if (number % 2 !== 0)
    return true;
  else
    return false; 
}

for (let n=0; n<=100; n++) {
  if (isOdd(n))
    console.log(n);
}
