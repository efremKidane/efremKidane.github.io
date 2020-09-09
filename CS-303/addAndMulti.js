

"use strict";
/* eslint-disable */
/** 
 * @param {object} arr is an array input.
 * @returns sum of the array values. 
*/

function sum(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

alert(sum([1,2,3,4]));

/**
 * 
 * @param {*} arr2 is an array of numbers.
 * @returns product of the array values.
 */


function multiply(arr2) {
	var total = 1;
	for (var i = 0; i < arr2.length; i++) {
		total = (total * arr2[i]);
	}
	return total;
}

alert(multiply([1,2,3,4]));