"use strict";
/******* Tuples ******/
let person = ['Matt', 32, false];
/********
 * Examples
 */
let hsla; // hsla Common color coding type
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    //get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
/*******
 * Named Tuples - released in Typescript 4 so you know what the string/numbers represent (coords or name, age etc)
 */
let user;
user = ['Peach', 25];
console.log(user);
