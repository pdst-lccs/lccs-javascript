// A function to determine ‘evenness’
function isEven(number) {
  if (number % 2 === 0)
    return true;
  else
    return false; 
}

for (let n=0; n<=100; n++) {
  if (isEven(n))
    console.log(n);
}
