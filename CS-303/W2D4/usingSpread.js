 const arr1 = [1,2,3,4];
const arr2 = ["abe","he","she","is"];
const arr3 = [true,"for",34];
const obj1 = {
    name: "efi",
    age : 30
};
const obj2 = {
    name : "shiz",
    age : 28
};




    let copiedArr = [...arr1];
    let concatArr = [...arr1,...arr2];
    let newConcatinate = [...arr1,5,6,...arr2];
    let max = Math.max(...arr1);
    let min = Math.min(...arr1);
    let singleObj = {...obj1,...obj2};

    function sum(...arr1){
    // .....
    }

console.log(copiedArr);
console.log(concatArr);
console.log(newConcatinate);
console.log(max);
console.log(min);
console.log(singleObj);
