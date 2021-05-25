// CAL Suggested solution to Question 9

// A function to return the arithmetic operation
function getOperation() {
  let operationQuestion = "Enter operation ('+', '-', '/' or '*')";
  console.log(operationQuestion);
  
  return prompt(operationQuestion);
} // end getOperation

// A function to return the difficulty level
function getDifficultyLevel() {
  let diffLevelQuestion = "Enter difficulty level (1 or 2)";
  console.log(diffLevelQuestion);
  
  return Number(prompt(diffLevelQuestion));
} // end getDifficultyLevel

// A function to generate an operand based on the difficulty level
function getOperand(level) {
  if (level === 1) {
    // Generate a random number between 0 and 9 incl.
    return Math.floor(Math.random() * 10); // 0 <= n2 < 10
  } else {
    // Generate a random number between 10 and 99 incl.
    return Math.floor(Math.random() * 90) + 10; // 10 <= n2 < 100
  }
} // end getOperand


// A function to receive the user's answer
function getResponse(problemInWords) {
  console.log(problemInWords);
  let userResponse = Number(prompt(problemInWords));
  console.log("User entered %d", userResponse); // this is for debug purposes
  return userResponse;
} // end getResponse

// A function to compute the correct answer
function getCorrectAnswer(op1, op2, op){
  let correctAnswer;
  
  // Compute the correct answer for the operation
  if (op === "+") {
      correctAnswer = op1 + op2;
  } else if (op === "-") {
      correctAnswer = op1 - op2;
  } else if (op === "*") {
      correctAnswer = op1 * op2;
  } else {
      correctAnswer = op1 / op2;
  }
  
  return correctAnswer;
} // getCorrectAnswer


// A function that generates and displays a random message
function displayRandomMsg(messages) {
  const r = Math.floor(Math.random() * messages.length);
  console.log(messages[r]);
  alert(messages[r]);
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
