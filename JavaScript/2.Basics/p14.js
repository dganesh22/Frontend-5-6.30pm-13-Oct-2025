// parameter return type function

function sum(a,b) {
    return a + b;
}

let res1 = sum(10,24);
console.log(`sum = `, res1)

// parameter non-return functions
function product(a,b) {
    document.writeln(`<h3> product = ${ a * b } </h3>`)
}

product(15,6)

// non-parameter return function

function handler() {
    return "Welcome to the function";
}
document.writeln(`<h3> ${ handler() } </h3>`)


// non-parameter non-return function
function handler1() {
    document.writeln(`<h3>non param non return function</h3>`)
}

handler1()