const numArray = [5,0, 7, 77, -20, 300, 51, 2];
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}];

let filtered = numArray.filter( n => n % 2 === 0);
console.log(filtered);

let filteredPeopple = peopleArray.filter( obj => obj.age > 10);
 console.log(filteredPeopple);
