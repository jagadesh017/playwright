const greetingMessage: string = 'Hello, TypeScript!';
console.log(greetingMessage);

const myAge : number = 30;
console.log(`I am ${myAge} years old.`);

let isStudents: boolean = true;
console.log(`Am I a student? ${isStudents}`);

let dataV: any = 'This can be any type';
console.log('Data:', data);

let numberss: number[] = [1, 2, 3, 4, 5];
console.log('Numbers:', numberss);

let hobbiess: string[] = ['Reading', 'Traveling', 'Cooking'];
console.log('My hobbies:', hobbies);

interface Person {
    name: string;
    age: number;
}

let persons: Person = {
    name: 'Alice',
    age: 25
};

console.log('Person:', person);

function greets(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('Bob'));

function addi(a: number, b: number): number {
    return a + b;
}

console.log('Sum:', add(5, 10));

let user: { name: string; age: number; location: string } = { name: 'Charlie', age: 28, location: 'New York' };
console.log('User:', user);

user.location = 'New York';
console.log('Updated User:', user);