/******* Tuples ******/
let person: [string, number, boolean] = ['Matt', 32, false]


/******** 
 * Examples 
 */

let hsla: [number, string, string, number] // hsla Common color coding type
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
    //get coords

    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords()

/******* 
 * Named Tuples - released in Typescript 4 so you know what the string/numbers represent (coords or name, age etc)
 */

let user: [name: string, age: number]

user = ['Peach', 25]

console.log(user)