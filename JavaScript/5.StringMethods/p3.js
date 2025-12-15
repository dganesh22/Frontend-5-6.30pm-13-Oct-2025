
/* 
    lexigo graphical comparision

     a  > b = 1
     a < b = -1
     a === b = 0
*/

// localCompare

        var a = "Hello";
        var b = "World";
        var c = "Hello";

        console.log(`Hello < World =`, a.localeCompare(b))
        console.log(`World > Hello =`, b.localeCompare(a))
        console.log(`Hello === Hello =`, a.localeCompare(c))

