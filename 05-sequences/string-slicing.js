// let s = "jack and jill went up the hill";
// console.log(s[7]); // => s[7] will simplify whatever is at index 7
// for (let char of s) {
//     console.log(char);
// }
// for (let i = 0; i < s.length; i++){
//     console.log(i, s[i]);
// }

// strings are immutable 
// s[0] ='Z'
// console.log(s)


// slice start to end(exclusive)
let message = "HELLO WORLD"
console.log(message.slice(2,5))
console.log(message.slice(4,6))
console.log(message)
message = message.toLowerCase()
console.log(message)

message = message.toUpperCase()
console.log(message)
console.log(message.slice(7))
console.log(message.slice(-3))