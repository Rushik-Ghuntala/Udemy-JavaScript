

//Initialization -----------------------------

var person = [
    {
        //1st object
        fn:"fn",
        ln: "ln",
        address: [
            '123 main st.',
            'ny'
        ]
    },
    {
        //2nd object
        fn:'mn',
        on:'on'
    }
];
    //Functions ----------------------------



console.log(person[1].fn)


//type of

var a = 3;
console.log("The type of variable A is "+typeof a);

var b = "hello"
console.log("The type of variable B is "+ typeof b);

var c = {};
console.log("The type of variable C is "+ typeof c);

var d = []
console.log("The type of variable D is "+ typeof d);
console.log(Object.prototype.toString.call(d))

function Person4(name){
    this.name= name ;
}
var e = new Person4("john");
console.log("The type of variable E is "+ typeof e);
console.log(e instanceof Person4);

console.log(typeof undefined)
console.log(typeof null)


var z = function() { };
console.log("The type of variable Z is "+ typeof z);



// Strict Mode



















