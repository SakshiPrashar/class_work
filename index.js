// ES MODULES

// console.log('Hello World');

// const {generateRandomNumber , celciusToFahrenite}=require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log('Celcius to fahrenite: ${celciusToFahrenite(0)}');




import getPosts , { getPostsLength } from './postController.js';

console.log(getPosts());

console.log(`Posts Length: ${getPostsLength()}`);