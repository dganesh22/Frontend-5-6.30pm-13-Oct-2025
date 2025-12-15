
var out = document.getElementById("out")
var btn = document.getElementById("btn")

var x = 0;

// dom.addEventListener("event", function(){})
btn.addEventListener("click", function(){
    out.innerHTML = `<h3> ${x} </h3>`;
    x+= 5;
});