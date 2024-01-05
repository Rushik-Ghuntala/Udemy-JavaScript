//Inheritance

var person = {
    fn: "Defalut",
    ln: "Default",
    getFullname: function(){
        return this.fn + ' '+ this.ln;
    }
}

var john = {
    fn: "John",
    ln: "Doe"

}


//Do not do EVER!!! Only demo for learning
john.__proto__ = person;
console.log(john.getFullname());  // John Doe
console.log(john.fn)


var jane = {
    fn: "jana"
}

jane.__proto__ = person;
console.log(jane.getFullname())   // jana Default  



for(var prop in john){
    console.log("--------------")
    console.log("Johns props:" +prop);
    console.log(prop + ": " + john[prop])
    console.log("--------------")

    if(john.hasOwnProperty(prop)){
        console.log(prop + ": " + john[prop])
    }

    console.log("--------------")
}