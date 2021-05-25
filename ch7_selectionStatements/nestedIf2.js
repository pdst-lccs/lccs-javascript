// Alternative nesting to achieve the same result
let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let mark = Number(prompt("Enter percentage mark (0-100):"));
let grade;

if (mark >= 90) {
   if (gradeLetter == "H") {
     grade = "H1";
   } else if (gradeLetter == "O") {
     grade = "O1";
   } 
} else if (mark >= 80) {
   if (gradeLetter == "H") {
     grade = "H2";
   } else if (gradeLetter == "O") {
     grade = "O2";
   }
} else if (mark >= 70) {
   if (gradeLetter == "H") {
     grade = "H3";
   } else if (gradeLetter == "O") {
     grade = "O3";
   }
} else if (mark >= 50) {
   if (gradeLetter == "H") {
     grade = "H5";
   } else if (gradeLetter == "O") {
     grade = "O5";
   }
} else if (mark >= 40) {
   if (gradeLetter == "H") {
     grade = "H6";
   } else if (gradeLetter == "O") {
     grade = "O6";
   }
} else if (mark >= 0) {
   if (gradeLetter == "H") {
     grade = "H8";
   } else if (gradeLetter == "O") {
     grade = "O8";
   }
}
