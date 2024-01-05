//Creating of Object

var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);

console.log(person[firstNameProperty]);

//member access operator using . (dot)

console.log(person.firstname)
console.log(person.lastname)

//object in object - child object

person.address = new Object();
person.address.street = "123 Main St.";
person.address.city = "New York";
person.address.country = "USA";

console.log(person.address)
console.log(person.address.street)
console.log(person.address.country)
console.log(person["address"]["city"])

//Another mathos to declare object
//this method is faster

var person = 
    {
        firstname:"Tony", 
        lastname: "Alicea",
    };

console.log(person);

var Tony = {
    firstname : "Tony",
    lastname : "Alicea",

    address: {
        street: "456 Elm Street",
        city: "Oakland",
        country: "Iceland"
    }
};

console.log(person);


//work with function

function greet(person) {
    console.log("HI " + person.firstname);
}

greet(Tony);

greet({
    firstname: "Mary",
    lastname: "Critsmus"
});


//Faking Namespace

var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";
console.log(english.greet);
console.log(spanish.greet);



//JSON
/* JSON stands for JavaScript Object Notation, it is a lightweight data-interchange format that
is easy for humans to read and write. It is based on a subset of the C programming language
called JavaScript object notation */

// var Tony_info = '{"firstname":"Tony","lastname":"Stark"}';
// var Tony = JSON.parse(Tony_info);
// console.log(Tony.firstname);
// var Tony_string = JSON.stringify(Tony);
// console.log(Tony_string);

var objectLiteral = {
    firstname:"Tony",
    lastname:"Alice"
}

console.log(objectLiteral);

var objectString = JSON.stringify(objectLiteral);
console.log("Type of object String : "+typeof(objectString));
console.log(objectString);


var backToObject = JSON.parse(objectString);
console.log("Type of object  : "+typeof(backToObject));
console.log(backToObject);
console.log(backToObject.firstname);






function greet() {
    console.log("HI");
}

console.log(greet);
//it is give text

greet.language = "English";

console.log(greet.language)

greet();

var anonymousGreet = function() {
    console.log("Hello World!");
}
anonymousGreet();



//from the function to the function

function log(a) {
    a();
}

log(function() {
    console.log("HI");
})



//By value and By Reference

//BY VALUE (primitive)

var a = 3;
var b;

b = a; //b gets the value of a, not the reference to it

a = 2;
console.log(a + ' ' + b);


//BY REFERENCE (all object including function)

var c = {greeting: "HI"};
var d = c;
d.greeting = "Ho";
console.log(c.greeting + ' ' + d.greeting);

//by reference even as parameter
function changeGreeting(obj){
    obj.greeting = "HELLO WORLD!";
}

changeGreeting(c);
console.log(c);
console.log(d);

//equal operators sets up new memory space (new address)
c = {greeting:"Hola"};
console.log(c);
console.log(d);
  


//THIS KEYWORD
console.log(this)

function ab() {
    console.log(this);
    this.newVariable = "Hello";
}
ab();
console.log(newVariable)
    

var b = function() {
    console.log(this);
}
b();



//we can assign this with another name lke:
//var self = this;

var c = {
    name : "Tony Kakkar",
    log : function(){

        var self = this;


        self.name = "Neha kakkar",
        console.log(self);


        var setname = function(newname){
            self.name = newname;
        }
        setname("Triggered Insaan")

        console.log(self)
    }
}

c.log()



//ARRAY
arr = [1,2,3,"Hello World"]

console.log(arr[1])

//Object in Array
objInArray = [{
        id : 1,
        name : "Neha"
    },
    {
        id : 2,
        name : "Akash"
}]

console.log(objInArray[0].id + " - " + objInArray[0].name)

//2nd from video

var arr2 = [
    1, 
    false,
    {
        name: "Tony kakkar",
        designation: "Singer"
    },
    function(name){
        console.log("Hellow " + name)
    },
    "hello"
    

];

console.log(arr2[3])
console.log(arr2[3](arr2[2].name)) 


//Arguments
 
function greet(fn,sn,language){

    language = language || "English" ;

    if(arguments === 0){
        console.log("Missiong parameters")
        console.log("--------------") 
        return;        
    }

    console.log(fn)
    console.log(sn)
    console.log(language)
    console.log(arguments)
    console.log("--------------")
}

greet();
greet("tony","kakkar", "Gujarati")
greet("tony","kakkar")



//Function Overloading


function greet(fn,ln,language){

    if(language === "en"){
        console.log("Hello " + fn + ln)
    }

    if(language === "sp"){
        console.log("Hola " + fn + ln)
    }

}

function greetEnglish(fn,ln){
    greet(fn,ln,'en')
}

function greetSpanish(fn,ln){
    greet(fn,ln,'sp')
}

greetEnglish("Tony ","Kakkar")
greetSpanish("Neha ","Kakkar")





//Function statement
function greet(name){
    console.log("Hellow " + name);
}
greet("Rushik");

//using Function Expression
var greet = function(name){
    console.log("Hellow " + name);
}
greet("Rushik");

//using Immediatly Invoking Function Expression
var greet = function(name){
    console.log("Hellow " + name);
}("Rushik ");

//inside IIFE:
(function(name){
    console.log("Hellow " + name); 
}("Nikunj"));


//CLOSERS

function greatings(say){

    return function(name){
        console.log(say +" "+ name)
    }


}

greatings("HI")("Rushik");

var sayHI = greatings("HELLO");
sayHI("NIKUNJ");

//Closure part 2

function buildFunction() {

    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(function(){
            console.log(i)
        });
    }
    return arr;


}

var fs = buildFunction()

fs[0]()
fs[1]()
fs[2]()



//Function Factories

function makeGreet(language){

    return function(fn,ln){

        if(language == 'en'){
            console.log('Hello ' + fn + " " + ln);
        }

        if(language == 'sp'){
            console.log('Hola ' + fn + " " + ln);
        }
    }
}

var greetEn = makeGreet('en');
var greetSp = makeGreet('sp');

greetEn("John","Doe"); // Hello John Doe
greetSp("Juan","Perez"); // Hola Juan Perez


//Closure and Callback

function sayHiLater(){

    var greeting = " HI";

    setTimeout(function(){
        console.log(greeting)
    },3000);


}

sayHiLater();




//Callback

function tellmewhenDone(callback){

    var a = 1000;
    var b = 2000;

    callback();


}

tellmewhenDone(function(){
    console.log("done!");
})

tellmewhenDone(function(){
    // alert("I am Done");
})


//Function------> call(), blind(), apply()

var person = {
    name: "John",
    age : 25,
    sayHello: function (){
        console.log("Hello! I am" + this.name + ", and I am "
        + this.age + " years old.")
        }
};

person.sayHello(); // Hello! I am John, and I am 25 years

person.sayHello.call({name:"Tom", age:30}); // Hello
// ! I am Tom, and I am 30 years old.
person.sayHello.apply({name:"Jerry", age:40}); //
// Hello! I am Jerry, and I am 40 years old.

person.sayHello();
/*
The call() method is used to invoke a method on an object. The first parameter of the call
method specifies the object, which becomes the value of this inside the called function. Any additional parameters
method specifies the object, which becomes the value of the this keyword within the called
function. Any additional parameters are passed in as arguments to the called function. In the
example above, we invoked the sayHello() method using the call() method with an object literal
as its argument. This caused the sayHello() method to use the properties from that object
literal instead of those from the original person object.
*/


//use bind() function
var tomSayHello= person.sayHello.bind({name:"Tom", age:3});
tomSayHello(); // Hello! I am Tom, and I am 3 years old.


//Lecture

var person = {
    name: "John",
    ln: "Doe",
    getFullname: function(){
        var fullname = this.name + " " + this.ln;
        return fullname;
    }

}

var logname = function(lang1,lang2) {
    console.log("Logged: "+ this.getFullname());
}

var logPersonName = logname.bind(person);

logPersonName();


//expression

var logname = function(lang1,lang2) {
    console.log("Logged: "+ person.getFullname());
}.bind();
logname();


var logname = function(lang1,lang2) {
    console.log("-----------------");
    console.log("Logged: "+ this.getFullname());
    console.log("Arguments: "+ lang1 + " " + lang2);
    console.log("-----------------");
}

var logPersonName = logname.bind(person);

logPersonName('en','es');

logname.call(person,'guj','hind');

logname.apply(person, ['gujrati','marathi']); 


///Aay this lakhvanu baki che------------------------------------------------------------

//Using function expression
(function(lang1,lang2) {
    console.log("-----------------");
    console.log("Logged: "+ this.getFullname());
    console.log("Arguments: "+ lang1 + " " + lang2);
    console.log("-----------------");
}).apply(person, ['gujrati','english']); 


//function borrowing

var person2 = {
    name:"John",
    ln: "Doe"
}

console.log(person.getFullname.apply(person2));

//Functon Currying

function multiple(a,b){
    return a*b;
}

var multiplyByTwo = multiple.bind(this, 2);
console.log(multiplyByTwo(4)); //8

var multiplyByTwo = multiple.bind(this, 2, 4);
console.log(multiplyByTwo()) //8

function multipleByTwoHow(b){
    var a = 2;
    return a*b;
}
console.log(multiplyByTwo(4)); // 8

var multiplyByThree = multiple.bind(this, 3);
console.log(multiplyByThree(4)); //12



var add5 = multiple.bind(null,5);
console.log(add5(7)); //49



//Functional Programming

var arr1 = [1,2,3];
console.log(arr1);

// var arr2 = [];

// for(var i = 0; i < arr1.length;i++){

//     arr2.push(arr1[i] * 2);

// }

// console.log(arr2);


function mapForEach(arr3, fn){

    var newArray = [];

    for(var i = 0; i < arr3.length; i++){
        newArray.push(fn(arr3[i]));
    };

    return newArray;

}

var arr2 = mapForEach(arr1, function(item){
    return item*2;
});

console.log(arr2)

var arr3 = mapForEach(arr1, function(item){
    return item>2;
});

console.log(arr3)




var checkPastLimit = function(limiter, item){
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);



var checkPastLimitSimplified = function(limiter){
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);






