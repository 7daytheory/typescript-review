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