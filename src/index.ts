//***
// ******** Union Types
// */

let someId: number | string //Allows multiple types - not any but a number or a string in this secnario

someId = 2
someId = "1"

let loginEmail: string | null = null

loginEmail = "matthew@gmail.com"
loginEmail = null // User logged out perhaps

//Setup Union Type in advange
type Id = number | string
let anotherId : Id

anotherId = "12agagtAeg"
anotherId = 3

//***Common Union Type Pitfall ****/
// Watch out for this - can be fixed with type guards which I will go over below

// function swapIdType(id: Id): Id {
//     //Can only use props and method common to bot number and string types
//     // parseInt(id) -> not allowed for example
 
//     parseInt(id) // Even if it's a string - because it COULD be a number it won't allow it

//     return id
// }

// swapIdType("5");

/***
 * Type Guards
 * (basically just checking argument type to see if we can execute the code on it)
 */

function swapIdType(id: Id): void {
    let swapNumber
    //type guard
    if(typeof(id) === 'string') {
        swapNumber = parseInt(id)
    } else {
        swapNumber = id.toString();
    }

    console.log(swapNumber)
}

swapIdType(5)
swapIdType("5")
