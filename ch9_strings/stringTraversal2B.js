let inStr = prompt("Enter a string:");
let outStr = "";

for(let i = inStr.length-1; i >= 0; i--) {
  outStr += inStr[i];
}

console.log(outStr);
