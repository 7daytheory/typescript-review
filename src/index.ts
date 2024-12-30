/******* Tuples ******/
let person: [string, number, boolean] = ['Matt', 32, false]


/******** Examples ****/

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
