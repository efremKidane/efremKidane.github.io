const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween( a, b){
    return function (n){
        if ( n >= a && n <= b){
            return true;
        }
    }
}

console.log( arr.filter(inBetween(3, 6)) ); 