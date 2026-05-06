"use strict";
let message1 = 'Hello, TypeScript!';
console.log(message1);
let age1 = 30;
console.log(`I am ${age1} years old.`);
let isStudent = true;
console.log(`Am I a student? ${isStudent}`);
let data = 'This can be any type';
console.log('Data:', data);
let numbers = [1, 2, 3, 4, 5];
console.log('Numbers:', numbers);
let hobbies = ['Reading', 'Traveling', 'Cooking'];
console.log('My hobbies:', hobbies);
let person = {
    name: 'Alice',
    age: 25
};
console.log('Person:', person);
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Bob'));
function add(a, b) {
    return a + b;
}
console.log('Sum:', add(5, 10));
let user = { name: 'Charlie', age: 28, location: 'New York' };
console.log('User:', user);
user.location = 'New York';
console.log('Updated User:', user);
