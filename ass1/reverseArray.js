"use strict";
/* eslint-disable*/


/**
 * 
 * @param {object} arr input array to be reversed.
 * @returns the orginal array with a revesed value.
 */

function reverseArray(arr){
    let j=0;
    let temp;
    let leng=Math.floor(arr.length/2);
    for (let i=arr.length-1;i>=leng;i--){
        temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
        j++;
    }

    return arr;
}

alert(reverseArray([1,2,3,4,5,6]));
