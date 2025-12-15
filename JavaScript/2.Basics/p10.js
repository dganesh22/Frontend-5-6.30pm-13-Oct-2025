// array
/* 
    group of values not mandatory to be similer data type

    types 
    1. single dimension
         a. literal array (direct)
        b. using Array constructor (assignment)
        c. Array constructor (parameter)

    2. Object array 
        object => group of key value pairs = { key: value }
        group of objects
        
    3. Json array

*/

// single (literal type)
var users = ["john", "mike", "tom", "jerry"];

console.log(`users =`, users)
console.log(`users[2] =`, users[2])

/* 
    array.forEach(function(value,index){
        // code
    })
*/

users.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
});

document.writeln(`<hr/>`)

for(let i=0; i<= users.length; i++) {
    document.writeln(`<h4> ${i} ${users[i]} </h4>`)
}