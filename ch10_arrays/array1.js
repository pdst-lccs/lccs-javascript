// This sample program motivates a use for arrays

// Let's say we wanted to count the number of times each side of a dice is rolled
// The program uses six separate variables to store the counts ...
// ... 'ones' stores the number of times 1 is rolled, ...
// ... 'twos' stores the number of times 2 is rolled etc.
// These variables are declared and initialised as follows

let ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0;

// Simulate a million rolls
for (let i = 1; i <= 1000000; i++ ) {
  // Generate a random number between 1 and 6
  let roll = Math.floor(Math.random() * 6) + 1

  if (roll == 1)
    ones++;
  else if (roll == 2)
    twos++;
  else if (roll == 3)
    threes++;
  else if (roll == 4)
    fours++;
  else if (roll == 5)
    fives++;
  else if (roll == 6)
    sixes++;
} // end for

// Display the frequencies on the console
console.log("Ones:\t%d", ones);
console.log("Twos:\t%d", twos);
console.log("Threes:\t%d", threes);
console.log("Fours:\t%d", fours);
console.log("Fives:\t%d", fives);
console.log("Sixes:\t%d", sixes);
