let weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
let weekendDays = ['Sat', 'Sun'];

let daysOfWeek = weekendDays.concat(weekDays); 

console.log(daysOfWeek.join());
console.log(daysOfWeek.slice(2));
console.log(daysOfWeek.slice(2,5));

console.log(weekDays.concat("Weekend"));
console.log(weekendDays.sort());
console.log(weekDays.reverse());
