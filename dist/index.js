"use strict";
/******* Tuples ******/
let person = ['Matt', 32, false];
/******** Examples ****/
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
