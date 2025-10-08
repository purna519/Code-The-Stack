// Arthemtic Operators

a = 0;
b = 20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a % b);
// console.log(++a);
// console.log(--a);

// a++ - post increment
// ++a - pre increment

// ++a; - 11
// a++; - 11
// a--; - 12
// a++; - 11
// a--; - 12
// a--; - 11
// --a; - 9
// ++a; - 10
// a--; - 10

// console.log(a); 9



// Relational Operators
// =====================

// console.log(a += 11);
// console.log(a -= 11);
// console.log(a *= 11);
// console.log(a /= 11);
// console.log(a %= 11);
// console.log(a >= 11);
// console.log(a <= 11);
// console.log(a != b);

// c = 10;
// d = "10";

// console.log(c == d);
// console.log(c === d);


// Logical Operator
// =================

// a = 18
// // > 10 <18 = 11,12,13,14,15,16,17 - true
// // >= 10 <18 = 10,11,12,13,14,15,16,17 - true

// console.log(a >= 10 && a < 18);
// console.log(a >= 10 || a < 18);
// console.log(a != 18);
// let booleanexp = (a != 18) //false
// console.log(booleanexp);
// console.log(!booleanexp);

// Bitwise Operator
// ================
console.log(a == 10 & b == 10); // 0 -false , 1,infinte - true
console.log(a == 10 | b == 20);
console.log(!a);
console.log(b >> 4);
console.log(b << 5);

// 00000000000000000000000000010100 - 20
// 00000000000000000000000000000100 - 4
// 00000000000000000000000000000001 - 1
// 00000000000000000000000101000000 - 320
// 00000000000000000000001010000000 - 640

// Ternary Operator
// ==================

current = 0;

console.log(current ? "Current is supplying" : "Current is not supplying");




// Task
// =====

// let targetNumber = Math.floor(Math.random() * 10) + 1; - random ga oka number geenrate chesidhi, chese aa numer ni ee       targetNumber ane variable lo store chesidhi

// Take a number from user
// compare the generated number with user provided number
// suppose the both numbers are equal print Hurray! you guessed the right number
// otherwise print Sorry, please try again.....