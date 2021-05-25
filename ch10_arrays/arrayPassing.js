function incrementValues(arrayParam) {
  console.log("incrementValues() called");

  for (let i=0; i < arrayParam.length; i++) {
    arrayParam[i]++;
  }
  
  console.log("incrementValues() ends");
} // end incrementValues()

let argArray = [1, 3, 5, 7, 9];
console.log("Array before call:", argArray);
incrementValues(argArray);
console.log("Array after call:", argArray);
