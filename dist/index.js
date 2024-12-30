"use strict";
/************
/ Interfaces
 ***********/
const authorOne = {
    name: 'Matthew',
    avatar: '../url/link.png'
};
//Useful when re-using for many cases
const authorTwo = {
    name: 'John',
    avatar: '../url/link.png'
};
const newPost = {
    title: 'My First Post',
    body: 'Something body typing',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorTwo
};
