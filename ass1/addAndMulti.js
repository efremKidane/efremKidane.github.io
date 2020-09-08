// Set addition
function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
// Print out the total to the console
alert(sum([1,2,3,4]));



// Set multiplication
function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
// Print out the total to the console
alert(multiply([1,2,3,4]));