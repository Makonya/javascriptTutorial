// //var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeteng;
// console.log(greeteng);
// greeteng = 'Hello';
// console.log(greeteng);

// //letters,numbers, _, $
// //Can not start with number

// //Multi word vars
// var firstName = 'John'; // Camelcase
// var first_Name = 'Sara'; // Underscore case
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// //LET
// let name2 = 'John Doe';
// console.log(name2);
// name2 = 'Steve Smith';
// console.log(name2);



// // CONST
// const name = 'John';
// console.log(name);
// // Can not reassign
// name = 'Sara';
// // Have to assign a value
// const greeteng;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);