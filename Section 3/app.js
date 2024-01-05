//dynamic typing

var isNew = true;

console.log(isNew);

isNew = "Hello";

console.log(isNew);

isNew = 1;

console.log(isNew);

//Primitive Type
/*
1-Undefined
2-NULL
3-Number
4-String
5-Boolean
6-Symbol (ES6)
*/

//Undefined
var a;
console.log(a);

//NULL
// var a = NULL;
// console.log(a);

//Number 
var a = 1234;
console.log(a);

//String
var a = "Hello World";
console.log(a);

//Boolean
var a = true;
console.log(a);

//Operators
/*
1-Arithmatic
2-
*/

//arithmatic operator
var a = 4+3;
console.log(a);

//boolean operator 
var a = 4 > 3;
console.log(a);



//Associativity
//there is full table avaiable in MDN Documentation

var a = 3 + 4 * 5;
console.log(a);

//here * is greter procedures then +
//so it is first multiply and then addition
//it is call right associativity
//because is it goes to Right-to-Left.....


var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

//it is gives the same output to each as 4
//why??

//Becaues = operator gives multiple times in same function 
//so associativity gives as Right-to-Left Associativity....

//WEIRD JAVASCRIPT YOU KNOW !!!

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36


//Coereion

var a = 1+3;
console.log(a);

var a = "hello" + "world";
console.log(a);

//what if?........

var a = 1+"hellow";
console.log(a);


//Js is do number to string for ease of our code 
//if i want convert string to number then convert string to number by doing Number('2')
var a = 1+'2';
console.log(a);

var a = 1 + Number('2');
console.log(a);


var a = Number(false);
console.log(a);

var a = Number("2");
console.log(typeof a);

var a = Number(undefined);
console.log(a);

//WEIRD JAVASCRIPT YOU KONW......

//Comparison Operators

var a = (3>4>5);

console.log(a);

var a = (false<5);

console.log(a);

console.log("WEIRD JAVASCRIPT KE WEIRD COMPARION")
//WEIRD JAVASCRIPT KE WEIRD COMPARION

console.log(3 == 3);
console.log("3" == 3);
console.log(false == 0);
var a = false;
console.log(a == 0);
console.log(null == 0);
console.log(null < 1);
console.log("" == 0);
console.log("" == false);




//Boolean ke sath khelte hain
console.log("Boolean ke sath khelte hain")
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));



//How to check variable is empty or not
var a = "";

if(a){
    console.log("Something here");
}
else{
    console.log("Empty");
}

var a = "Hello";

if(a){
    console.log("Something here");
}
else{
    console.log("Empty");
}


//Default Values
console.log("Default Value");

function greet(name){
    console.log(name);
    console.log("hello " + name);
}

greet("Rushik");
greet();


console.log(libraryName);
