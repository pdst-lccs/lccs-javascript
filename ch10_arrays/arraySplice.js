let weekDays = ['Mon', 'Wed', 'Thur'];

console.log("Returned from second splice :", weekDays.splice(1, 0, "Tuesday")); 
console.log("After first splice :", weekDays);

// reset weekDays
weekDays = ['Mon', 'Wed', 'Thur'];
console.log("Returned from second splice :", weekDays.splice(1, 2)); 
console.log("After second splice :", weekDays);
