# TypeScript Overview
Just reviewing some of the basics of Typescript as it's been a little while. Mostly just statically typed javascript that needs to be compiled into javascript with some more handy features like interfaces, enums, type aliases etc

## What is TypeScript?
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing and other features to make your code more robust and maintainable.

### Setting Up TypeScript
Install TypeScript:

```bash
npm install -g typescript
```

Create a .ts File: Write your TypeScript code in a file with the .ts extension.

Compile TypeScript to JavaScript: Use the TypeScript compiler (tsc) to convert .ts files into .js files:

```bash
tsc index.ts
```
### Create a .ts File
Write your TypeScript code in a file with the .ts extension.

### Compile TypeScript to JavaScript
Use the TypeScript compiler (tsc) to convert .ts files into .js files:

```bash
tsc index.ts
```

### Configuring tsconfig.json
To simplify TypeScript configuration and setup, initialize a tsconfig.json file.

### Generate tsconfig.json
Run the following command to create a tsconfig.json file:

```bash
tsc --init
```

This generates a default configuration file with various options.

### Update Configuration
Modify the tsconfig.json file to set up the rootDir and outDir options(Find these values in the file, uncommented and change):
```bash
{
  "compilerOptions": {
    "rootDir": "./src", // Directory for source TypeScript files
    "outDir": "./dist",  // Directory for compiled JavaScript files
  }
}
```

### Organize Your Project Structure
Place your TypeScript files in the src directory (e.g., src/index.ts).
The compiled JavaScript files will be output to the dist directory.
### Compile the Project
Use tsc to compile all files based on the tsconfig.json configuration:
```bash
tsc
```

if inside visual code you need to add npx before tsc*

### Auto Compilation
Use the --watch flag to enable automatic compilation whenever files are saved:

```bash
tsc --watch
```

Automatically running the node dist/index.js as well

```bash
node --watch dist/index.js
```

So now the TS file automatically compiles and upadates the index.js when index.ts is updated to the file in the dist folder, and then node will re-run the file anytime there's a change to it

## Core Concepts and Examples
### Basic Types
TypeScript supports static typing with various data types.

TypeScript can infer the type of a variable based on its initial value.

### Special Types: null and undefined
These types represent the absence of a value.

### The any Type
The any type disables type checking, allowing the variable to hold any value. Use sparingly!

## Why Use TypeScript?
Improved Code Quality: Static typing catches errors at compile time.
Better Tooling: IDEs provide better autocompletion and error detection.
Maintainability: Makes large projects easier to manage.

### Reduce
The reduce() function in JavaScript is used to process an array and reduce it to a single value. This value could be a sum, a product, an object, a string, or any other value depending on the logic provided in the callback function.
Versatility: It can replace many other array methods like map, filter, or forEach when used creatively.
Conciseness: Complex operations can be done in fewer lines of code.
Immutability: Doesn't modify the original array, which aligns with functional programming principles.

### The "any" type
Special type to just TS
In TypeScript, the any type is a type that allows a variable to hold values of any type without any type-checking or restrictions. It effectively disables TypeScript's static type checking for that variable. You should try to use this as less as possible because it defeats the point of typescript.
Useful when migrating from js to ts because using any won't cause any errors initially.

### Tuples
A tuple is a fixed-length array with elements of specific types, where each element can have a different type. Tuples are useful for representing a collection of values with a known structure.

Example:
```bash
let tuple: [string, number, boolean];

tuple = ["Matthew", 30, true]; // Valid
tuple = [30, "Matthew", true]; // Error: Type mismatch
```

Key Points
Fixed Length: Tuples have a predefined number of elements.
Ordered Types: The types and order of elements are strictly enforced.
Destructuring: You can destructure tuples like arrays

```bash
const [name, age, isActive] = tuple;
```

Use Cases
Returning multiple values from a function.
Representing a known sequence of values (e.g., key-value pairs).

## Interface
An interface is a way to define the structure of an object in TypeScript. It is primarily used for defining object shapes and can extend other interfaces.

```bash
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}
```

## Type Alias
A type alias is used to create a custom name for a specific type. It can represent primitive types, objects, unions, tuples, or even function signatures.

```bash
type Rgb = [number, number, number];
type Callback = (data: string) => void;
type User = { id: number; name: string; isAdmin: boolean };
```

## Type Alias vs Interface
Usage	
TA : Works for any type (e.g., objects, primitives, unions, tuples, functions). | Interface: Primarily used for objects and class types.
Extensibility	
TA: Use & (intersection types) to extend.	| Interface: Use extends to extend interfaces.
Reopening	
TA: Cannot be reopened once declared.	| Interface: Can be reopened to add new properties.
Complex Types	
TA: Better for unions and advanced type manipulations.	| Interface: Best suited for describing object shapes.

Both type aliases and interfaces are essential tools in TypeScript. Use type aliases for flexibility and interfaces for object-oriented designs or when working with classes.

## Union Types
Union types allow a variable to hold values of multiple types. They are defined using the pipe (|) symbol.

```bash
let value: string | number;
value = "Hello"; // Valid
value = 42;      // Valid
```

Union Types in TypeScript
Union types allow a variable to hold values of multiple types. They are defined using the pipe (|) symbol.

Key Features:
Useful for scenarios where a value can belong to one of several types.
TypeScript enforces that operations on a union type are valid for all possible types.

## Type Guards
Type guards are runtime checks that allow TypeScript to narrow down the type of a variable within a specific scope, ensuring type safety. They help refine union types and allow the compiler to understand which type is being used.

Example:
```bash
function isString(value: string | number) {
  if(typeof(value) === 'string') {
    //Do something only a string could do
  } else {
    //Do something only a number could do
  }
}
```

## Tagged Interfaces
Tagged interfaces (also known as discriminated unions) use a common property, often called a "tag" or "discriminator", to distinguish between different types within a union. This tag allows TypeScript to safely narrow the type in type guards.

Example: (Basically just adding a type value to interface to identify which is which)
```bash
interface Dog {
  type: "dog";
  bark(): void;
}

interface Cat {
  type: "cat";
  meow(): void;
}

type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark(); // `animal` is of type `Dog`
  } else {
    animal.meow(); // `animal` is of type `Cat`
  }
}
```
In this example, the type property acts as a tag, helping TypeScript distinguish between Dog and Cat.
