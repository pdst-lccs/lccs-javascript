// CAL Suggested solution to Question 4

let quit = false; // Q4 continue as long as the variable quit is false
while (quit == false) {   // Q4 the original code is 'wrapped' inside this while loop
 
  // STEP 1. Generate the question
  // Generate 2 random numbers
  let n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
  let n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10

  // STEP 2. Ask the user the question and get a response
  // n1 and n2 are converted to strings so that they can be displayed as part ...
  // ... of the prompt string
  let problemInWords = "What is "+ String(n1) + " plus " + String(n2);
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

  // Q4 find out if the user wants to continue ...
  // ... if the user enters anything other than Y then ..
  // ... set quit to true (this will cause the loop to end)
  let yesNo = prompt("Continue [Y/N]");
  if (yesNo.toUpperCase() != "Y")
    quit = true; 
  
} // Q4 end of while loop

