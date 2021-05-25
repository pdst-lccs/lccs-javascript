// Declare two strings to work with
let pangram = "Pack my box with five dozen liquor jugs";
let toungeTwister = "Sally sells seashells by the sea shore";

// charAt and charCodeAt
console.log("The Unicode representation for", pangram.charAt(), "is", pangram.charCodeAt());
console.log("The Unicode representation for", pangram.charAt(1), "is", pangram.charCodeAt(1));

// toUpperCase, toLowerCase and concat
console.log("toUpperCase:", pangram.toUpperCase());
console.log("toLowerCase:", pangram.toLowerCase());

// concat
let lowerCaseStr = toungeTwister.toLowerCase();
let upperCaseStr = toungeTwister.toUpperCase();
console.log(lowerCaseStr.concat(upperCaseStr));

// indexOf
let index = toungeTwister.indexOf("ells");
console.log("indexOf first \'ells\' is:", index);
console.log("indexOf of next \'ells\' is:",  toungeTwister.indexOf("ells", index+1));

// lastIndexOf
let lastIndex = toungeTwister.lastIndexOf("ells");
console.log("lastIndexOf \'ells\' is:", lastIndex);
console.log("2nd lastIndexOf of \'ells\' is:", toungeTwister.lastIndexOf("ells",lastIndex-1));

// slice
console.log("slice 1:", pangram.slice(5));
console.log("slice 2:", pangram.slice(5, 11));

// replace
console.log("replace 1:", pangram.replace("box", "bag"));
console.log("replace 2:", toungeTwister.replace("sells", "sold"));

// split
console.log("split 1:", pangram.split());
console.log("split 2:", toungeTwister.split(" "));
