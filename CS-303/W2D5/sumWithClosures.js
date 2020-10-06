function sum( a ) {
    return function( b ){
        return a + b;
    }

}

console.log(sum(3)(4));
console.log( sum(-5)(4));

