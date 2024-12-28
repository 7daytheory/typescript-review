//******* Arrays ***********/

let names: string[] = ['Matt', 'Marco', 'Jennifer'] //array of ONLY strings
let numbers : number[] = [1, 2, 3] // Array of only Numbers
let many: any[] = [1, "Name"]// Any values

names.push('Ben');
// names.push(2); // Won't work bc it's a number

numbers.push(2)
//numbers.push('String') // Won't work obviously

//***** Type Inferance with arrays ****//

let fruits = ['Apples', 'Oranges', 'Bananas'] // Type inferance makes this the same as let fruits: string[] = [];

//fruits.push(1); //Type inferance will only allow strings to be pushed
fruits.push('Mangos')

const f = fruits[3] //shows type will be a string

let things = [1, true, 'hello'];
const t = things[0]; // It shows it can either be a string, number of boolean

//****************** Object Literals ****************//

//***** Type Inferance with object literals *********//