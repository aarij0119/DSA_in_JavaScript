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

// let a = 11;700
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b
// console.log("a = " + a);//13
// console.log("b = " + b);//24;
// console.log("c = " + c);// 103

// Claculate electrucity bill
// let bill = prompt("Enter the electricity bill");
// bill = Number(bill);
// let amount = 0;
// if(bill >= 400){
//     amount = (bill-400) * 13 // 3900
//     bill = 400
// }
// if(bill > 200 && bill <= 400){
//     amount += (bill-200) * 8 // 1600
//     bill = 200
// }
// if(bill > 100 && bill <= 200){
//     amount += (bill-100) * 6 // 600
//     bill = 100
// }
// amount += bill*4
// console.log(amount);


// calculate notes
// let amount = prompt("Enter your amount");
// amount = Number(amount);
// if(amount >= 500){
//    console.log("500 notes ", Math.floor(amount/500));
//    amount = amount%500
// }
// if(amount >= 200){
//     console.log("200 notes ",Math.floor(amount/200));
//     amount = amount%200
// } 
// if(amount >= 100){
//     console.log("100 notes ",Math.floor(amount/100));
//     amount = amount%100
// }
// if(amount >= 50){
//     console.log("50's notes ",Math.floor(amount/50));
//     amount = amount%50
// }
// if(amount >= 20){
//     console.log("20's notes ",Math.floor(amount/20));
//     amount = amount%20
// }
// if(amount >= 10){
//    console.log("10's notes",Math.floor(amount/10));
// }4
// console.log(amount);

// Ternary Operators
// console.log(12>18 ? "Yes" : "No");

//Nested ternary operator
// let num = 10;
// console.log(num>0?"positive": num<0? "negative":"zero");
// console.log(+true + 1);
// console.log(typeof +false);//number
// let stars = '';
// for(let i = 0; i < 5; i++){
//     stars += " *"
//     for(let j = 0; j < 5; j++){
//         stars += "*";
//     }
//     stars += '\n'
// }
// console.log(stars);

//reverse a number

// let n = prompt("Enter a number");
// if(n === "" || n === null){
//     console.log("Plesaee enter a number");
// }else if(isNaN(n)){
//     console.log("please enter a valid no.")
// }else if(n > 0){
//     let reverse = 0;
//     while(n > 0){
//         let rem = n % 10;
//         reverse = reverse * 10 + rem;
//         n = Math.floor(n / 10);
//     }
//     console.log("Reverse no is ", reverse);
// } else {
//     console.log("Please enter a positive no.");
// }



// let arr = new Array(5);

// for(let i = 0; i < arr.length; i++){
//     let ans = Number(prompt("Enter a number"));
//     arr[i] = ans
// }
// console.log(arr);1


// Sum of an Array
// let arr = [10,20,30,40,50];
// let sum = 0 ;
// for(let i = 0; i <arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// Find the largest number in an array

// let arr = [120,200,400,500,1900,1200];
// let max = arr[0];

// for(let i = 1;  i < arr.length; i++){
// if(max < arr[i]){
//     max = arr[i]
// }
// }
// console.log(max)

// find minimum element in an array

// let array = [12,13,14,19,20,21,1];
// let min = array[0];
// for(let i = 1; i < array.length; i++){
//     if(min > array[i]){
//         min = array[i]
//     }
// }
// console.log(min);

// let arr = [10,30,40,40,40];
// let max = arr[0];
// let smax = arr[1];

// for(let i = 2; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }else if(arr[i] > smax && max !== arr[i]){
//         smax = arr[i]
//     }
// }
// console.log(max);
// console.log(smax);


//Reverse array with extra space
// let arr = [10,20,30,40,50,60];
// let temp = new Array(arr.length);

// let j = 0;
// for(let i = arr.length - 1; i >= 0; i--){
//     temp[j] = arr[i]
//     j++
// }

// console.log(temp);


// let arr = [10,20,30,40,50];
// let i = 0;
// let j = arr.length - 1;

// while(i!=j){
//     let temp = arr[i];
//     arr[i]= arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);

// let arr = [10,20,30,40,50,60,70,80,90,100];
// let i = 0;
// let j = arr.length - 1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

// let arr = [1,0,1,0,0,0,0,1,1,1,0];
// let i = 0
// let j = 0;

// while(i < arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }

// console.log(arr)


// let arr = [-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15];

// let i = 0;
// let j = 0;
// while(i < arr.length){
//     if(arr[i] < 0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr);

// P Question 1 
// Target that the sum of two element is 9 
// let arr = [2, 7, 11, 15];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === 9) {
//             console.log(`Pair found: (${arr[i]}, ${arr[j]})`);
//             console.log([arr[i], arr[j]])
//         }
//     }
// }

// P Question 2
// Trget to find that the sum of two element is 6

// let array = [1, 3, 5, 2, 3];
// let numbers = [];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === 6) {
//             numbers.push(array[i], array[j])
//         }
//     }
// }
// console.log(numbers);


// P Question 3 find duplicate and remove it

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 12, 2, 3, 1];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === result[j]) {
//             // console.log(arr[i],arr[j])
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);

// let arr = [1,0,6,10,2,5,6,8,3];

// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

// let array = [1,2,3,4,5,6,7,8,9,12];
// array.push(15);
// array.pop();
// array.shift();
// array.unshift(12);
// console.log(array);

// let number = 9;
// console.log(Math.sqrt(number));

// let num = [];
// let sum = 0;
// for(let i = 0; i < 5; i++){
//     num[i] = i + 1
//     sum += num[i] 
//  }
//  console.log(num);
//  console.log(sum);

// Creting array from an string 

// let str = 'Hello I am Aarij';
// str = str.split('')
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// let nums = [9,1,2,3,4,5,6];
// console.log(nums)
// let reduce = nums.shift()
// console.log(nums);
// console.log(reduce)

// let numbers = [1,2,3,7,8,9];
// console.log(numbers)
// let newnumbers = [4,5,6]
// console.log(numbers)
// let fullnumbers = numbers.splice(3,0,newnumbers);
// console.log(numbers)

// let nums = [1,2,3,100,200,300,400,4,5];
// nums.splice(3,4);
// console.log(nums)

// let names = ["Billa","Riyaz","Aarij","Aehtasham","Mango","Raju","Jin","Iblees"];
// console.log(names);
// names.sort()
// console.log(names)

// let numbers = [3,4,1,100,200,2];

// function compare (num1,num2){
//     return num1 - num2
// }
// numbers.sort(compare);
// console.log(numbers);


//let arr = [1,2,4,5,6];
//let array = arr.every(); // This also show same thing to fix that create a function and put it into every
//console.log(array) // this wiil show undefined
// function square(num){
//     console.log(num, num * num)
// };
// arr.forEach(square);

// arr.forEach((num)=>{
//     console.log( num, num * num)
// });

// Two dimension array

// let grades = [[89,77,78],[76,82,81],[91,94,89]];
// let total = 0;
// let average = 0;

// for(let col = 0; col < grades.length; col++){
//     // console.log("column is ",grades[col]);
//     for(let row = 0; row < grades[col].length; row++){
//         // console.log("Row is ", grades[row])
//         total += grades[row][col]
//         average = total / grades[col].length
//     }
// }
// console.log("Sum of no. is ", total);
// console.log("The average is" , Math.floor(average));



//Array Question

// Question 1

// let number = [];

// let times = 0;
// while(times < 10){
//    let usernumber =  Number(prompt("Enter a number"));
//    number.push(usernumber)
//     times++
// }
// console.log(number);

// Question 2

// let arr = [10, 20, 30, 40, 21, 59, 90];
// let userNumber = Number(prompt("Enter a number"));
// let found = false;

// let i = 0; 
// while(i < arr.length){
// if(userNumber === arr[i]){
//     found = true;
//     break;
// }
// i++
// }
// if(found){
//     console.log("Found", found)
// }
// else{
//     console.log("Sorry not found")
// }


// Question 1 Left Rotatin by one element

// let arr = [1,2,3,4,5];

// let copy = arr[0];
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy

// console.log(arr);

// Question 2 Right rotatino by one element

// let arr = [1,2,3,4,5];

// let copy = arr[arr.length - 1];

// for(let i = arr.length -1 ; i > 0; i--){
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy
// console.log(arr)

// Question 2 Left rotation by k element

// let arr = [1, 2, 3, 4, 5];
// let k = 3
// k = k % arr.length
// for (let j = 0; j < k; j++) {
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy
// }

// console.log(arr);

// Question 3 Right rotation by k element // Homework Question

// let arr = [1,2,3,4,5];
// let k = 2;
// k = k % arr.length
// let copy = arr[arr.length - 1];
// for(let i = arr.length -1; i > 0; i--){
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy
// console.log(arr)

// Short Method of upper question
let array = [1,2,3,4,5];
let temp = [];
let k = 2
for(let i = 0; i < array.length; i++){
    temp[i] = array[(i+k) % array.length]
}
console.log("Temp",temp);

// Q = homework Right rotation by k step

