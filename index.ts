//Setting up TS files
let age: number = 30 // Type Inferance -> makes var type int

//age = "String" //Cannot change to a string

let firstName: string = "Matthew"
let isFiction: boolean
firstName = "Matt" 
isFiction = true; 

//Type Inferance (ugggh) - hover over vars and you can see the var tyoes
let planet = "Earth"
let moon = 1
let isLarge = false

//planet = 10 // Won't work obviously
planet = "Mars"
moon = 3
isLarge = true

//undefined & null (lol ugh)
let something: null; // Can only be null 
let another: undefined; //Can only be undefined (Honestly don't know when I'd use this)

let anything: any;

anything = 30;
anything = "Matthew"
anything = true