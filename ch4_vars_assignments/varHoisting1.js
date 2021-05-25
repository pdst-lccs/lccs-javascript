// var causes month to be hoisted (as if it were declared at the top of the program)
month = 1;
var month; 
console.log("The month is", month);

// The above code is equivalent to ...
/*
var month;
month = 1; 
console.log("The month is", month);
*/