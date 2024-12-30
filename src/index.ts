/************
/ Interfaces
 ***********/

//Several objects that will all be the same (users for example)

//Pascal case for interfaces generally
interface Author {
    name: string,
    avatar: string,
}

const authorOne: Author = {
    name: 'Matthew',
    avatar: '../url/link.png'
}

//Useful when re-using for many cases
const authorTwo: Author = {
    name: 'John',
    avatar: '../url/link.png'
}