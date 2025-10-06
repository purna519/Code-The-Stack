let a = 10;
console.log(a);

console.log(typeof (a));


b = 'Purna';
console.log(b);
console.log(typeof (b));

let c;
console.log(c);

// c --> memory allocated
// c --> value not there

c = null;
//c --> value is there
//c --> value is null , something is there rather nothing
console.log(c);


// String => sequence of characters

// Array => list of elements / group of elements
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof (arr));

// Object
let person = {
    name: "Purna",
    age: 20,
    location:"Vijayawada"
}
console.log(typeof (person));

// array of objects
let persons = [
    {
        name: "purna",
        age: 20,
        email:"purna@gmail.com"
    },
    {
        name: "Harika",
        age: 27,
        email:"harika@gmil.com"
    },
    {
        name: "Sruthi",
        age: 40,
        email:"sruthi@gmail.com"
    }
]

persons.map((item) => {
    console.log(item.name);
    console.log(item.age);
    console.log(item.email);
})



// // array of 10 numbers
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // array of (a to f)
// let arr2 = [a, b, c, d, e, f];





