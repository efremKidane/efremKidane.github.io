describe("chain filter Map and Reduce",function(){
    it ("reduced even average ages",function(){
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];
    assert.deepEqual( peopleArray.filter((even) => {
        return even.age % 2 === 0 ;
    }).map((values) => {
        return values.age ;
    
    }).reduce((sum, values) => {
        return sum + values;
    }),86)            
    })

    it ("reduced Odd average ages",function(){
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];
    assert.deepEqual( peopleArray.filter((odd) => {
        return odd.age % 2 !== 0 ;
    }).map((values) => {
        return values.age ;
    
    }).reduce((sum, values) => {
        return sum + values;
    }),28)            
    })
});