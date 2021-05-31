let arr1 = [1, 3, 5, 7, 9];
let arr2 = [];

for (let index = 0; index < arr1.length; index++) {
    arr2[index] = arr1[index];
}

console.log("AFTER COPY");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
