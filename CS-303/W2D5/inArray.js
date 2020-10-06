const arr = [1, 2, 3, 4, 5, 6, 7];

function inArray( arr ){
    return function (n){
      return  arr.includes(n);
        }
    }


console.log( arr.filter(inArray([1,2,10])) );