let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let mark = Number(prompt("Enter percentage mark (0-100):"));
let grade;

if (gradeLetter == "H") {
  if (mark >= 90) {
     grade = "H1";
  } else if (mark >= 80) {
     grade = "H2";
  } else if (mark >= 70) {
     grade = "H3";
  } else if (mark >= 60) {
     grade = "H4";
  } else if (mark >= 50) {
     grade = "H5";
  } else if (mark >= 40) {
     grade = "H6";
  } else if (mark >= 30) {
     grade = "H7";
  } else if (mark >= 0) {
     grade = "H8";
  }
} // end if gradeLetter is "H"
else if (gradeLetter == "O") {
  if (mark >= 90) {
     grade = "O1";
  } else if (mark >= 80) {
     grade = "O2";
  } else if (mark >= 70) {
     grade = "O3";
  } else if (mark >= 60) {
     grade = "O4";
  } else if (mark >= 50) {
     grade = "O5";
  } else if (mark >= 40) {
     grade = "O6";
  } else if (mark >= 30) {
     grade = "O7";
  } else if (mark >= 0) {
     grade = "O8";
  }
} // end if gradeLetter is "O"
