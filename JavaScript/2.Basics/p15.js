var out = document.getElementById("output")

var x = 0;
function display() {
    out.innerHTML  = `<h1> ${ x } </h1>`;
    x += 10;
}

