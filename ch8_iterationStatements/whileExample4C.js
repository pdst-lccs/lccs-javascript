// Validate a yes/no response (do-while version)
let response;
do {
    response = prompt("Do you wish to continue (Y/N)");
} while (response != "Y" && response != "N"); 

// response is valid
console.log("Thank you. You entered a valid response ... ");

