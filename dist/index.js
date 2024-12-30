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
/***
 * interface as a function argument type
 */
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
/****
 * Interface With Arrays
 */
let posts = [];
posts.push(newPost);
