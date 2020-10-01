function calculateFactorial( n ) {
    factorial = 1;
    for (let i = n; i > 0; i--) {
       factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial( 5 ));
console.log(calculateFactorial( 4 ));
console.log(calculateFactorial( 3 ));