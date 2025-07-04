let name = "swaroop wagle";
console.log(name);

let _name1 = "namkhan"; //this is the firs rule of wiriting the js code first word sholud not be start with numbers and special character except _ and $
console.log(_name1);

let $name2 = "nirvik";
console.log($name2); //we can add number after the semi colon and we can also add number in the middle of the let
//different ways of writing the let in the js code when there is multiple character
//snake case
let snake_case_name = "abcd";
console.log(snake_case_name);

let camelCaseName = "swaroop"; //camel case
console.log(camelCaseName);

let PascalCaseName = "swaroop"; //pascal case
console.log(PascalCaseName);

let laptops = {
  name: "swaroop",
  price: 1000,
  brand: "developers",
  since: "2023",
}; // format of writing the object in js code
console.log(laptops.price);

let arr = [
  {
    name: "krishna",
    age: 20,
    city: "kathmandu",
    province: "bagmati",
  },
  {
    name: "tristant",
    age: 19,
    city: "lalitpur",
    province: "bagmati",
  },
  {
    name: "saugat",
    age: 21,
    city: "bhaktapur",
    province: "bagmati",
  },
];

console.log(arr[0].name); //way of printing the aarray of the object
console.log(arr[0].age);
console.log(arr[0].city);
console.log(arr[0].province); //indexing always starts from 0 in js code

console.log(arr[1].name);
console.log(arr[1].age);
console.log(arr[1].city);
console.log(arr[1].province);

console.log(arr[2].name);
console.log(arr[2].age);
console.log(arr[2].city);
console.log(arr[2].province);
// for writing the constant in the js code we use the contant
// valu for the constant cant be checked

const pi = 3.14; //constant value
//pi = 4; // this will give an error because we cannot change the value of the constant
console.log(pi); // this will give an error because we cannot change the value of the constant

// operators is js code
//arithmetic operators in js code = + - * / %
let a = 10;
let b = 20; // this like creating new cup and adding drinking in it
let c = a + b; //addition operator
console.log(c); // this will print the value of c which is 30
let f = 20;
f = f + 10; // this is like adding new drink in the same  cup
console.log(f); // this will print the value of f which is 30

// % is the moddulus operators which give the value of remainder
let d = 10;
d = d % 3; // this will give the value of the remainder of 10 divided by 3 which is 1
console.log(d); // this will print the value of d which is 1

//   asisgmnent operators  shortcut  operators for the arithmetic operators
// assigmnent aperators = += -= /= *= %=
let e = 10;
e += 5; // this is like adding 5 to the value of e which is 10 so the value of e will be 15
console.log(e); // this will print the value of e which is 15
// same goes with others

//comparison operators in js code
// >,<, >= , <= , ==, !=
let g = 10;
let h = 20;
console.log(g > h); // this will print false because 10 is not greater than 20
// == means equal to
// != means not equal to

//logical operators in js codde
// &&, ||, !
//&& means and same like logic gate
// || means or same like logic gate
// ! means not same like logic gate
let j = 10;
let k = 20;
console.log(j < k && j > 5);
console.log(j < k || j > k);
console.log(!(j == k));

let l = 5;
let m = 10;
l == m ? console.log("l is equal to m ") : console.log(" l is not equal to m");
l < m
  ? console.log("m is greater tha l")
  : console.log("m is not greater than l");
// ternary operator in js code
// 1st priority is given to ? and only :

let n = 10;
n += 10;
n == 20
  ? console.log(" n is equal to 20")
  : console.log("n is not equal to 20")(n == 20 && n > 10)
  ? console.log("n is greater than 10")
  : console.log(" n is not greater than 10");

if (n == 20 && n >= 10) {
  console.log("n is greater than 10");
} else {
  console.log(" n is not greater than the 10");
}
// for multiple conditions use else if
let marks = prompt("enter yor marks");
// <40 fail, 40-79 pass , 80-100 excelent , >100 invalid marks
if (marks < 40) {
  console.log("fail");
} else if (marks >= 40 && marks <= 79) {
  console.log("pass");
} else if (marks >= 80 && marks <= 100) {
  console.log("excellent");
} else {
  console.log("marks invalid");
}
