// Declare an array called 'counts'
let counts = [0,0,0,0,0,0,0];
let roll;

for (let i = 1; i <= 1000000; i++ ) {
  // Generate a random number between 1 and 6
  roll = Math.floor(Math.random() * 6) + 1;
  counts[roll]++; // <-- This is the MAGIC!!
} // end for

// Display the output
console.log("Face\tFrequency\n");		
for ( let i = 1; i <= 6; i++ ) 		
  console.log("%d\t%d\n", i, counts[i]);
