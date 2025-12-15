
// single - array constructor (assignment)

var colors = new Array();

colors[0] = "red";
colors[1] = "blue";
colors[2] = "green";


console.log(`colors =`, colors)
console.log(`colors[2] =`, colors[2])

colors.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
})


// single - array as constructor (parameter)

var courses = new Array("html", "css", "javascript", "react")

console.log(`courses =`, courses)
courses.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
})
