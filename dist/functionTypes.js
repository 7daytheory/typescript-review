"use strict";
//************ Functions *******/
// Javascript Version
// function addTwoNumbers(a, b) {
//     return a + b;
// }
//Give the parameters a type - you can also give the return value a type
function addTwoNumbers(a, b) {
    return a + b;
}
//Arrow function version
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
//addTwoNumbers('a', '2'); Won't work
addTwoNumbers(1, 2);
subtractTwoNumbers(2, 1);
//void type because we are not returning anything
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0); //reduce can be used because type if an array
    console.log(total);
}
addAllNumbers([1, 5, 6, 7, 11, 34, 3, 11]);
// ******** Return Type Inference ******///////
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
//No return type addeed but it infers the return type will be string
const result = formatGreeting('Matthew', 'Hello');
