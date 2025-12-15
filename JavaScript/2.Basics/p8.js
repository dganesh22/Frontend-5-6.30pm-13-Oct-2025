// nested looping statements

// pattern

/* 
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5

*/

for(let i=1; i<=5; i++) {
    for(let j=1; j<= i; j++) {
        document.writeln(`<span> ${j} </span>`)
    } 

    document.writeln(`<br/>`)
}

/* 
1
2 2
3 3 3 
4 4 4 4
5 5 5 5 5
*/

var p = 1;

while(p<=5) {
    var q = 1;
    while(q <= p) {
        document.writeln(`<span> ${p} </span>`)
        q++;
    }
    p++;
    document.writeln(`<br/>`)
}


/* 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/