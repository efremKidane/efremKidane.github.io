function filterRangeInPlace( arr, a, b) {
    let value;
    for (let i = 0; i < arr.length; i++) {
        if (a<arr[i]<b) {
            value = arr[i];
        }
      arr.splice(i,1);
      
        
    }
    return arr;
}
let arr = [5,3,8,1];
console.log(filterRangeInPlace( arr,1,4));
