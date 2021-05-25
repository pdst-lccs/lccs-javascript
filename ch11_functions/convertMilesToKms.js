function miles2kms(miles) {
  let kms = miles * 1.6;
  return kms;
}

let kimometers = miles2kms(50);
console.log("There are "+kimometers+"kms in 50 miles");
