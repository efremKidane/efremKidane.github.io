describe("filtered even Numbers from Array And Ages greater than 10 from array objects ",function(){
    it ("returns even numbers from array",function(){
        const numArray = [5,0, 7, 77, -20, 300, 51, 2];
        assert.deepEqual(numArray.filter( n => n % 2 === 0),[ 0, -20, 300, 2 ])
    })
    it ("returns age greater than ten",function(){
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];
        assert.deepEqual( peopleArray.filter( obj => obj.age > 10),[
            { name: 'Sam', age: 15 },
            { name: 'Lucy', age: 13 },
            { name: 'Barney', age: 80 }
          ])
    })
    
});