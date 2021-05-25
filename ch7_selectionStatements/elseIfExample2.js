let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

if ( Number(num1) > Number(num2) ){
   console.log(num1, "is greater than", num2);
} 
else if ( Number(num1) < Number(num2) ){
   console.log(num1, "is less than", num2);
} 
else {
   console.log(num1, "is equal to", num2);
}

console.log("Program execution continues from here");
