// parseFloat
console.log(parseFloat(0.0123E+2)); // 1.23
console.log(parseFloat(123E-2)); // 1.23
console.log(parseFloat("50.5")); // 50.5
console.log(parseFloat("50point5")); // 50
console.log(parseFloat(".5")); // 0.5
console.log(parseFloat("fifty5")); // NaN
console.log(parseFloat(false)); // NaN



// More examples below ...
/*
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
*/
