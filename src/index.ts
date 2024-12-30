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

