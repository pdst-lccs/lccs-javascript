let arr1 = [1, 3, 5, 7, 9];
let arr2 = arr1;

console.log("BEFORE TRAVERSAL");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

for (let i=0; i < arr1.length; i++) {
  arr1[i]++;
}

console.log("AFTER TRAVERSAL");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
