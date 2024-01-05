// b();




// var a = 10;

// console.log(a);



// function b() {
//     console.log("Called B");
// }


//In Hoisting all veriable is setup and set equal to undefined and function setup as well

//Weird JS: We can declare variable as undefined

//Js is runs code line by line
//interpreting it
//compiling it
//executing it

//Javascript is Single Threded Synchronous



//Asynchronous

// long running function
function waitThreeSeconds () {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
        console. log( 'finished function');
}

function clickHandler() {
    console.log( 'click event!');
}

// listen for the click event
document.addEventListener ('click', clickHandler);
    
waitThreeSeconds();
console.log( 'finished execution');
