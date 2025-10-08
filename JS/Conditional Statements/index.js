// simple if
// ===========
// a = 10

// if (a > 0) {
//     console.log("A is greater than 0");
// }

// console.log("if staement didnt executed");


// if - else
// =============
// current = 1

// if (current) {
//     console.log("Elecricity is supplying");
// }
// else {
//     console.log("Electricity is not supplying");
// }


// else if
// =============

// if bill amount is 1k above then computer should print bill amount reduction 10% , if 2k above then reduction of 20% , if 4k above 50%

billAmount = prompt("Enter bill Amount : ");

if (billAmount >= 1000 && billAmount < 2000) {
    billAmount = billAmount * 0.1
    console.log(billAmount);
}
else if (billAmount >= 2000 && billAmount < 4000) {
    billAmount = billAmount * 0.2;
    console.log(billAmount);
}
else if (billAmount > 4000) {
    billAmount = billAmount * 0.5;
    console.log(billAmount);
}
else {
    console.log("Sorry you didnt get any discount");
}


// Nested if
// =========

// Kajal = 0
// SaiPallavi = 0
// Tammana = -3/4


// if (Kajal != SaiPallavi) {
//     if (Kajal != Tammana) {
//         if (Kajal > SaiPallavi) {
//             if (Kajal > Tammana) {
//                 console.log("Kajal is topper");
//             }
//             else {
//                 console.log("Tammana is topper");
//             }
//         }
//         else if (SaiPallavi > Tammana) {
//             console.log("Sai pallavi is topper");
//         }
//         else {
//             console.log("Tammana is topper");
//         }
//     }
//     else if (Kajal > SaiPallavi) {
//         console.log("kajal and tammana are the toppers");
//     }
//     else {
//         console.log("sai pallavi is the topper");
//     }
// }
// else if (Kajal == Tammana) {
//     console.log("All are topppers");
// }
// else if (Tammana > Kajal) {
//     console.log("Tammana is topper");
// }
// else {
    // if (Kajal < 0) {
    //     if (SaiPallavi < 0) {
    //         if (Tammana < 0) {
    //             console.log("All class got negative marks");
    //         }
    //         else {
    //             console.log("Tammana is topper");
    //         }
    //     }
    //     else if (Tammana < 0) {
    //         console.log("Sai pallavi is topper");
    //     }
    //     else {
    //         if (SaiPallavi == Tammana) {
    //             console.log("Sai pallavi and tammana is toppers");
    //         }
    //         else {
    //             console.log("Tammana is topper");
    //         }
    //     }
    // }
//     console.log("Invalid data");
// }
