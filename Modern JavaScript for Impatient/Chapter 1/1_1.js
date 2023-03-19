// What happens when you add 0 to the values NaN, Infinity, false, true, null,
// and undefined? What happens when you concatenate the empty string with
// NaN, Infinity, false, true, null, and undefined? Guess first and then try it out

let zero =0
console.log(zero+NaN);
console.log(zero+Infinity);
console.log(zero+null);
console.log(zero+false);
console.log(zero+true);
console.log(zero+undefined);