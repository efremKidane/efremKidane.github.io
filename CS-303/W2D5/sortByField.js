
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function sortByField (fieldName) {
   return function(a,b){ 
       if (a[fieldName] > b[fieldName]){
        return 1;
    }
    else {
        return -1;
    }
}
}
console.log( users.sort(sortByField("name"))); 
console.log( users.sort(sortByField("age")) );