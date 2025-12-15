/* 
        charAt(position) - character
        charCodeAt(position) - decimal values of ascii
        indexOf(char) - first index position of character
        lastIndexOf(char) - last index position of chracter
*/

 var str = "Welcome to JavaScript Class.";
    console.log(`string =`,str)

 console.log(`charAt()=`, str.charAt(0)) // W
            console.log(`charCodeAt()=`, str.charCodeAt(0)) // ASCII
            console.log(`indexOf(e)=`, str.indexOf("e")) // 1
            console.log(`lastIndexof(e)=`, str.lastIndexOf("e")) // 6

    console.log(`indexOf(a)=`, str.indexOf("a")) // 12
            console.log(`lastIndexof(a)=`, str.lastIndexOf("a")) // 24

    console.log(`\n`)

var str1 = "John is an engineer. JOHN is working in Ibm. john stays in  banglore";

// str.replace(target,value)
 console.log(`str1 =`, str1)
 console.log(`replace =`, str1.replace("john","Tom"))
 console.log(`replace =`, str1.replace(/john/,"Tom"))
 console.log(`replace =`, str1.replace(/john/gi,"Tom"))

 /* /regular expression/
 
    gi => global case insensitive
 */
console.log(`\n`)

    // slice(start,end), substring(start,end) and substr(start,length)
        console.log(`slice =`, str1.slice(0,19));
         console.log(`substring =`, str1.substring(0,19));
         
         console.log(`substr =`, str1.substr(0,19)); // deprecated

var str2 = "Helloworld";
console.log(`substr =`, str2.substr(1,3))

console.log(`substring =`, str2.substring(1,3))
console.log(`slice =`, str2.slice(1,3))


console.log(`\n`)

// concat() and trim()
let str3 = "John";
var str4 = " harry";

console.log(`concat =`, str3.concat(str4))

var str5 = str4.trim()
console.log(`concat =`, str3.concat(str5))