/****
 * Type Aliases (similar to interfaces)
 */

//Example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

/* Interface version of this - you can see above is cleaner
interface Rgb {
  r: number;
  g: number;
  b: number;
}

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return { r, g, b };
}
*/

/***
 * Object Literal
 */

type User = {
    name: string
    score: number
}

const userOne: User = {name: 'Matthew', score: 50}

function formatUser(user: User): void {
    console.log(`${user.name} got a score of ${user.score}`)
}
