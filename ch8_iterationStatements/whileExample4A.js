// Validate a yes/no response
let response = prompt("Do you wish to continue (Y/N)");
while (response != "Y" && response != "N") {
    response = prompt("Do you wish to continue (Y/N)");
} 

// response is valid
console.log("Thank you. You entered a valid response ... ");
