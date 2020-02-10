function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}
function sum(array) {
	return array.reduce((accum, current) => accum + current, 0);
}

function multiply(array) {
	return array.reduce((accum, current) => accum * current, 1);
	// let totalMult = 1;
	// for (let i = 0; i < array.length; i += 1) {
	// 	totalMult *= array[i];
	// }
	// return totalMult;
}
function power(base, exp) {
	return base ** exp;
}

function factorial(factNo) {
	// let tots = 1;
	// for (let index = 1; index <= factNo; index++) {
	// 	tots *= index;
	// }
	// return tots;

	if (factNo <= 1) {
		return 1;
	}
	return factNo * factorial(factNo - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
