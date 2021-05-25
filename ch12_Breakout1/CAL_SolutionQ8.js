// CAL Suggested solution to Question 8

let quit = false; // Q4 continue as long as the variable quit is false
while (quit == false) {   // Q4 the original code is 'wrapped' inside this while loop

  // Q6 Get the required operation from the user
  let operationQuestion = "Enter operation ('+', '-', '/' or '*')";
  console.log(operationQuestion);
  let operation = prompt(operationQuestion);
    
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
  let problemInWords = "What is "+ String(n1) + operation + String(n2); // Q6
  console.log(problemInWords);
  let userResponse = Number(prompt(problemInWords));
  console.log("User entered %d", userResponse); // this is for debug purposes

  // STEP 3. Process the response
  // Compute the correct answer. Then ...
  // ... as long as the user's answer is different to the computer's answer ...
  // ... tell the user they are wrong and ...
  // ... ask the user for another response
  let correctAnswer; // Q6 = n1 + n2; // Compute the correct answer

  // Q6 Compute the correct answer for the operation
  if (operation === "+") {
      correctAnswer = n1 + n2;
  } else if (operation === "-") {
      correctAnswer = n1 - n2;
  } else if (operation === "*") {
      correctAnswer = n1 * n2;
  } else {
      correctAnswer = n1 / n2;
  }
  
  
  let attempts = 1; // Q2 used to store the number of incorrect attempts
  // Q3 - create a list of messages to use if the response in incorrect
  const messages1 = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];

  while (userResponse != correctAnswer) {
      // Q7 - take a negative response to mean the user doesn't know the answer
      if (userResponse < 0) {
          break; // exit the loop
      } else {
        //console.log("Wrong answer! Try again.");
        // Q3 Display a randomly selected message telling the user they are wrong
        const index = Math.floor(Math.random() * messages1.length);
        console.log(messages1[index]);
        alert(messages1[index]);

        userResponse = Number(prompt(problemInWords));
        console.log("User entered %d", userResponse); // this is for debug purposes

        attempts++; // Q2 increment attempts
      }
  } // end while


  // Q7 - user didn't know the answer so tell them
  if (userResponse < 0) {
      console.log("Answer not known. The correct answer was", correctAnswer);
      alert("Answer not known. The correct answer was" + String(correctAnswer));
  } else {
      // STEP 4. Display a randomly selected encouragement message
      const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
      const r = Math.floor(Math.random() * messages.length);
      console.log(messages[r]);
      alert(messages[r]);
  }

  console.log("You took", attempts, "attempts"); // Q2 display attempts
  
  // Q4 find out if the user wants to continue ...
  // ... if the user enters anything other than Y then ..
  // ... set quit to true (this will cause the loop to end)
  let yesNo = prompt("Continue [Y/N]");
  if (yesNo.toUpperCase() != "Y")
    quit = true; 
  
} // Q4 end of while loop