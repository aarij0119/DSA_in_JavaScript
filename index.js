// Data Structutre And Algorithm

// Relation between integer and setting
// let a = 10;
// let b = 20;
// console.log("The sum of 10 and 20 is " + a + b ) = 1020
//console.log(`The sum of 10 and 20 is ${a + b}` );
// console.log('The sum of 10 and 20 is ' + ( a + b));
// console.log(a + b + " The sum of 10 and 20 is")

// Type coercion
//console.log("1" + 1); // this will return 11 because plus sign two type first is to concatinate and second is to plus so here it is concating So, It is called type coercion
// for eg. like here minus sign has only one type 
//console.log("1" - 1);


// Accept and print answer
// let age = prompt("What is your age?");
// age = Number(age);
// console.log(typeof age);
// It's called typeCasting

// -Swap two variables via 3 methods

// Q 1 = what is swap?
// Ans =  let's learn by eg
// let a = 10;
// let b = 20;
// let c  = a;
// a = b
// b = c
// console.log(a);
// console.log(b);

//So, This is called swaping and this is the first way now let's see 2 way
// let a = 10;
// let b = 20;
// a = a+b
// b = a - b;
// a = a - b;
// console.log(b);
// console.log(a);
// And This is the 2 way


// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a,b);
// And this is the 3 way

// Operators
//Arithmetic Operators = +,-,/,%,*

// const a = 123459;
// const b = 10;
// console.log(a%b);// the answer will be 9

// let c = 456028;
// let d = 10;
// console.log(c%d); // this give remainder always

// Relation OPERATORS
// OPERATORS = >,<,==,!==,>=,<=;

// console.log(10>9);// true
// console.log(11<10);//false
// console.log(10===10);// true
// console.log(10=="10"); //true
// console.log(10==="10");//false

//LOGICAL OPERATORS
//OPERATORS = &&,||;

// console.log(10>9 && 12>10);true
// console.log(10>9 && 12 > 11 && 13 && 10 > 15);// false 
// in this case all have true value if one is incorrect it will return false;

// console.log(10>5 || 10< 9);//true
// console.log(12 < 5 || 20 < 10 || 40 < 20);//false

// This Operator show's true if one statement is correct but whole statement are incorrect then it show's false;

//Unary Operator = ++,--
// let a  = 10;
// let b =  a++ // here it is increasing
// console.log(a);
// console.log(b); // this will show 10 only

// let a = 10;
// let b = ++a
// console.log(b);// this will show 11

//Q 1
// let i = 11;
// i = i++ + ++i;
// console.log(i);//24

// Q2 
// let a = 12;
// a = a++ + ++a;
// console.log(a);//26


//math function

// console.log(Math.round(12.6));//13
// console.log(Math.round(12.3));//12

// console.log(Math.ceil(10.2));//11
// console.log(Math.ceil(12.0));//12

// console.log(Math.trunc(12.8)); //12
// console.log(Math.trunc(15.12340));//15

// console.log(Math.pow(2,5));//32
// console.log(Math.pow(3,5));//243

let a = 11;
let b = 22;
let c = a + b + a++ + b++ + ++a + ++b
console.log("a = " + a);//13
console.log("b = " + b);//24;
console.log("c = " + c);// 103
