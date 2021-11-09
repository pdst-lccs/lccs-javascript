// CAL Suggested solution to Question 5

// Q5 solution starts here ...
let diffLevelQuestion = "Enter difficulty level (1 or 2)";
console.log(diffLevelQuestion);
let difficultyLevel = Number(prompt(diffLevelQuestion));
let n1, n2;
if (difficultyLevel == 1) {
  // Generate 2 random numbers between 0 and 9 incl.
  n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
  n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10
} else {
  // Generate 2 random numbers between 10 and 99 incl.
  n1 = Math.floor(Math.random() * 90) + 10; // 10 <= n1 < 100
  n2 = Math.floor(Math.random() * 90) + 10; // 10 <= n2 < 100
}

/// STEP 1. Generate the question
// Generate 2 random numbers
// Q5 comment out the next two lines (n1 and n2 are set above)
//let n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
//let n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10

// Q5 solution ends here ...

// STEP 2. Ask the user the question and get a response
// n1 and n2 are converted to strings so that they can be displayed as part ...
// ... of the prompt string
let problemInWords = "What is "+ String(n1) + " + " + String(n2);
console.log(problemInWords);
let userResponse = Number(prompt(problemInWords));
console.log("User entered %d", userResponse); // this is for debug purposes

// STEP 3. Process the response
// Compute the correct answer. Then ...
// ... as long as the user's answer is different to the computer's answer ...
// ... tell the user they are wrong and ...
// ... ask the user for another response
let correctAnswer = n1 + n2; // Compute the correct answer
while (userResponse != correctAnswer) {
    console.log("Wrong answer! Try again.");
    userResponse = Number(prompt(problemInWords));
    console.log("User entered %d", userResponse); // this is for debug purposes
} // end while

// STEP 4. Display a randomly selected encouragement message
const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const r = Math.floor(Math.random() * messages.length);
console.log(messages[r]);
alert(messages[r]);
