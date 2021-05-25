// A function to convert from € to $
function convert(euroAmount, rate) {
  let dollar = amount * rate;
  return dollar; // return the converted amount
}

// Prompt the user to enter the Euro amount
let amount = Number(prompt("Enter amount (€)"));

// Call convert and save the returned value in dollarAmount
let dollarAmount = convert(amount, 1.13);

// Display the answer
console.log("€"+amount+" is worth $"+dollarAmount);
