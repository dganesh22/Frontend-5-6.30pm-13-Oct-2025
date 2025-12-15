/* variables 

int,float,double = number
string,char = string
boolean 
array  []
object {}

null 
undefined

*/

/* datatype name = value; declaration of variable */

var x = 123; // global scope 
let y = 133; // block scope (re-assign the value)
const z = 46; // block scope (cann't re-assign)


console.log(`var x = `, x)
console.log(`let y =`, y)
console.log(`const z = `, z)

document.writeln("<h1> var x = "+ x +"</h1>");
document.writeln('<h2> y = '+ y +'</h2>');
//` backtick `
document.writeln(`<h2> z = ${z} </h2>`);


// re-assign
x = 260;
console.log(`new x = `, x)
document.writeln("<h1> var x = "+ x +"</h1>");

y = 4145.34;
console.log(`new y =`, y)
document.writeln('<h2> y = '+ y +'</h2>');

// handling run time exceptions (errors)
try {
    z = 45.34;
    console.log(`const z =`, z)
} catch(err) {
    console.log(err)
}

