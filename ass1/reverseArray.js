function reversefArray(arr){
    let j=0;
    let reversedArray=[];
    for (let i=arr.length-1;i>=0;i--){
        reversedArray[j]=arr[i];
        j++;
    }

    return reversedArray;
}

alert(reversefArray(["A","B","C"]));



function reverseArray(arr){
    let j=0;
    let temp;
    let l=Math.floor(arr.length/2);
    for (let i=arr.length-1;i>=l;i--){
        temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
        j++;
    }

    return arr;
}

alert(reverseArray([1,2,3,4,5,6]));
