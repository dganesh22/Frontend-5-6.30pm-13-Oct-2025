/* looping statements */

// for loop
/* for(initialization;condition;inc/dec) {
        // code
} */


// while loop
/* 
    initialization
        while(condition) {
            // code
            inc/dec statement
        }
*/

// do-while loop
/* 
    initialization
        do {
            code;
            inc/dec
        } while(condition);
*/

/////////////////////////////// -------------------- ///////////////////


var x = 20;

for(var i=1; i <= 10; i++) {
    document.writeln(`<p> ${x} * ${i} = ${ x * i} </p>`)
}

document.writeln(`<hr/>`);


var y = 12;
var i = 1; // initialization

    while(i <= 10) {
        document.writeln(`<p>${y} * ${i} = ${y * i}</p>`)
        i++; // inc 
    }

document.writeln(`<hr/>`);

var z = 15;
var i = 1;

do {
 document.writeln(`<p> ${z} * ${i} = ${z * i} </p>`)
    i++
} while(i <=10)

document.writeln(`<hr/>`);
