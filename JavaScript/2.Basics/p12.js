
// object array

var emp = [
    {
        id: 1,
        name: "john",
        desg: "frontend developer",
        salary: 12334
    },
    {
        id: 2,
        name: "mary",
        desg: "Ui and ux developer",
        salary: 12234
    },
    {
        id: 3,
        name: "tom",
        desg: "java developer",
        salary: 12123
    }
]

console.log(`emp = `, emp)

emp.forEach(function(val,index){
    document.writeln(`<h1> ${ val.name } </h1>`)
    document.writeln(`<h4> ${ val.desg } </h4>`)
    document.writeln(`<h4> ${ val.salary } </h4>`)
});


// object to json array
let res1 = JSON.stringify(emp);
console.log(`json array = `, res1)

// json array to object
let res2 = JSON.parse(res1);
console.log(`object array =`, res2)