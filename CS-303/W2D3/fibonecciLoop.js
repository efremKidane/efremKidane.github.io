function fib( n ) {
    let a = 0, b = 1, c = 0;
    for (let i = n; i > 0; i--) {
        c = b;
        b = a + b;
        a = c;
        
    }
return c;
}

console.log( fib( 5 ));
console.log( fib( 7 ));
console.log( fib( 77 ));