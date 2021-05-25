// CAL Suggested solution to Question 9 - function stubs

// A function to return the arithmetic operation
function getOperation() {
  

} // end getOperation

// A function to return the difficulty level
function getDifficultyLevel() {
  

} // end getDifficultyLevel

// A function to generate an operand based on the difficulty level
function getOperand(level) {


} // end getOperand


// A function to receive the user's answer
function getResponse(problemInWords) {

  
} // end getResponse

// A function to compute the correct answer
function getCorrectAnswer(op1, op2, op){


} // getCorrectAnswer


// A function that generates and displays a random message
function displayRandomMsg(messages) {


} // end displayRandomMsg


// MAIN PROGRAM STARTS HERE

const correctMessages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const incorrectMessages = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];

let quit = false;
while (!quit) {
  // Ask the user to enter the diffulty level, the operation and the two operands
  let difficultyLevel = getDifficultyLevel();  
  let operation = getOperation();
  let n1 = getOperand(difficultyLevel);
  let n2 = getOperand(difficultyLevel);
  
  // determine the correct answer from the computer
  let correctAnswer = getCorrectAnswer(n1, n2, operation);  
  
  // keep asking the question until the user gets it right or gives up
  let questionString = "What is "+ String(n1) + operation + String(n2);
  let userResponse = getResponse(questionString);
  while (userResponse != correctAnswer && userResponse > 0) {
    displayRandomMsg(incorrectMessages);
    userResponse = getResponse(questionString);
  }
  
  // check if the user got it right or 'gave up'
  if (userResponse == correctAnswer) {
    displayRandomMsg(correctMessages);
  } else {
    console.log("Answer not known. The correct answer was", correctAnswer);
    alert("Answer not known. The correct answer was" + String(correctAnswer));

  }
  
  // Finally, determine whether to keep going or not
  let yesNo = prompt("Continue [Y/N]");
  quit = yesNo.toUpperCase() == "Y" ? false : true;
  
} // end while
