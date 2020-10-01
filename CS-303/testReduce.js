describe("reduce",function() {
    it ("returns reduced",function(){
        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        assert.deepEqual(numArray.reduce((acum,ele) => acum + ele),422)
    })

    it ("returns maximum number from array",function(){
        const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
            name:
                "Barney", age: 80
        }];
        assert.deepEqual(peopleArray.reduce(
            (max, values) => (values.age > max ? values.age : max),
            peopleArray[0].age
          ),80)
    })
});