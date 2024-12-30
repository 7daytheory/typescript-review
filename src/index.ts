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

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author,
}

const newPost: Post = {
    title: 'My First Post',
    body: 'Something body typing',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorTwo
}