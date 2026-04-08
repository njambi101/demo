//callback functions are functions that are passed as an argument in another function
// a callback function is intended to be executed later
/* types of callback functions are:-
   ASynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.

   SYnchronous callbacks are executed immediately within the outer function, blocking further operations until completion.
   Array methods like map(), filter(), and forEach() use synchronous callbacks.
   */

  /*asyncronous function
  setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
  in this example myfunction is a callback function
  Example for arrays are
 const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
} */


//higher order functions are functions that take other functions as arguments orreturn another function as its result.
/*function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

function food() {
    console.log("food is very good for you");
}
function food2(actions) {
    actions();
    
}
food2(food);
*/
//higher order functions in map().
let c = "Geeks";

// New array of character and names
// concatenated with 'A'
let ress = Array.prototype.map.call(c, function (item) {
    return item + 'A';
})

console.log(ress)
//map() method is used to create a new array by applying a function to the old array.
/*const a =[1,2,3,4,5,6,7,8];
const b = a.map(x => x * 5);
console.log(b)
//OR
let u = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let res = u.map(function (val, index) {
    return { key: index, value: val * val };
})

console.log(res)

let s = "Geeks";

// New array of character and names
// concatenated with 'A'
let rese = Array.prototype.map.call(s, function (item) {
    return item + 'A';
})

console.log(rese)
*/
