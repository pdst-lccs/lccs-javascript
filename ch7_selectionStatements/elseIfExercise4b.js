let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let gradeLevel;
let mark = Number(prompt("Enter percentage mark (0-100):"));

if (mark >= 90) {
   gradeLevel = 1;
} else if (mark >= 80) {
   gradeLevel = 2;
} else if (mark >= 70) {
   gradeLevel = 3;
} else if (mark >= 60) {
   gradeLevel = 4;
} else if (mark >= 50) {
   gradeLevel = 5;
} else if (mark >= 40) {
   gradeLevel = 6;
} else if (mark >= 30) {
   gradeLevel = 7;
} else if (mark >= 0) {
   gradeLevel = 8;
}

console.log("Final Grade: ", gradeLetter + gradeLevel);
