// built-in data type: number, string, boolean, void, undefiend, null

let hello;
let firstName: string;
let lastName: string;
let fullName: string;
let userId: number;
let isActived: boolean;

hello = 'Working'
firstName = "Ashraful";
lastName = " Islam";
userId = 101;
isActived = true;
fullName = firstName.concat(lastName);

// console.log(`Your name is: ${fullName}. Your user ID is: ${userId}. Your account is active: ${isActived}.`);
// console.log(fullName.split(' '));
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

function display(){
    console.log(`Hello, I am Display.`);
    // return "10";
}

// console.log(display())
// display();

const test: string = "testing";
console.log(test)

export{hello}