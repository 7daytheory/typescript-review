//********** any type **************/

let myAge: any

myAge = 30
myAge = false
myAge = "55"

//Won't cause any errors because it accepts "any" value type, but you should try to use this as less as possible

//inerfence any type
let title

title = 25
title = {
    hello: 'hi',
}


/******** Any Type in Arrays ******/
let myThings: any[] = ['hello', true, 30, null]

myThings.push({id: 123}) //Can insert anything because array is any type


/************ Functions and any type ********/

function addTogether(value: any): any {
    return value + value
}

//Doesn't give the variables a value type because it can be any
const resultOne = addTogether('Hello'); // HelloHello
const resultTwo = addTogether(2); //4

//One of the only useful times for using any is when migrating js to ts