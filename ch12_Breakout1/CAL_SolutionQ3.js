// CAL Suggested solution to Question 3

// STEP 1. Generate the question
// Generate 2 random numbers
let n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
let n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10

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

// Q3 - create a list of messages to use if the response in incorrect
const messages1 = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];

let correctAnswer = n1 + n2; // Compute the correct answer
while (userResponse != correctAnswer) {
    // Q3 comment the next line out - it's functionallity is replaced by the new lines below
    // console.log("Wrong answer! Try again.");
    // Q3 Display a randomly selected message telling the user they are wrong
    const index = Math.floor(Math.random() * messages1.length);
    console.log(messages1[index]);
    alert(messages1[index]);

    userResponse = Number(prompt(problemInWords));
    console.log("User entered %d", userResponse); // this is for debug purposes
} // end while

// STEP 4. Display a randomly selected encouragement message
const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const r = Math.floor(Math.random() * messages.length);
console.log(messages[r]);
alert(messages[r]);

