"use strict";
//********** any type **************/
let myAge;
myAge = 30;
myAge = false;
myAge = "55";
//Won't cause any errors because it accepts "any" value type, but you should try to use this as less as possible
//inerfence any type
let title;
title = 25;
title = {
    hello: 'hi',
};
/******** Any Type in Arrays ******/
let myThings = ['hello', true, 30, null];
myThings.push({ id: 123 }); //Can insert anything because array is any type
