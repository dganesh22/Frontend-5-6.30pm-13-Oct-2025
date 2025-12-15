// nested conditional statements

var num = 215;

if(num % 2 === 0) {
    if(num > 200) {
        document.writeln(`<h2> ${num} is even and greaterthan 200 </h2>`)
    } else if ( num < 200) {
         document.writeln(`<h2> ${num} is even and lessthan 200 </h2>`)
    } else if (x === 200) {
         document.writeln(`<h2> ${num} is even and equal to 200 </h2>`)
    } else {
         document.writeln(`<h2> ${num} is even </h2>`)
    }
} else {
     document.writeln(`<h2> ${num} is odd </h2>`)
}