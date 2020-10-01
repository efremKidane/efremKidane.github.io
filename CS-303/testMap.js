/*eslint-disable*/

describe("double", function() {
    it("double the values of the array", function() {
        const numArray = [5,0, 7, 77, -20, 300, 51, 2]
      assert.deepEqual(numArray.map( n => n*2), [
        10,   0,  14, 154,
       -40, 600, 102,   4
     ]);
    });

   
    it("double the ages in array objects", function() {
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}]
      assert.deepEqual(peopleArray.map(obj =>  obj.age*2), [ 30, 12, 26, 160 ]);
    });
});
   
  