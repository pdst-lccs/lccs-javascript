let num = prompt("Enter a number");
let rem = num % 10;
let suffix;

switch (rem) {
   case 1:
      suffix = "st";
      break;
   case 2:
      suffix = "nd";
      break;
   case 3:
      suffix = "rd";
      break;
   default:
      suffix = "th";
} // end switch

console.log("Output:", num+suffix);
