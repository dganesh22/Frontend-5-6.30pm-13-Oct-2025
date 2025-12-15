// Object 

var user = {
    // key: value
    name: "John",
    email: "john@gmail.com",
    age: 22,
    hobbies: ["riding", "driving", "cycling"],
    address: {
        city: "banglore"
    }
}

console.log('user =', user)

// object.key  - object["key"]
document.writeln(`<h1> name = ${ user.name } </h1>`)

document.writeln("<h1>"+ user.email +"</h1>")
document.writeln("<h1>"+ user["age"] +" years </h1>")
document.writeln("<h1>"+ user.address.city +"</h1>")
document.writeln("<h1>"+ user["address"]["city"] +"</h1>")