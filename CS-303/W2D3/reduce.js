const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
    name:
        "Barney", age: 80
}];

let sum = numArray.reduce((acum,ele) => acum + ele);
console.log( sum );

let average = sum/numArray.length;
console.log( average );

let max = numArray.reduce((acum,ele) => acum > ele ? acum : ele);
console.log( max );

const maxAge = peopleArray.reduce(
    (max, values) => (values.age > max ? values.age : max),
    peopleArray[0].age
  );

console.log(maxAge);


