const sumAll = function(first, second) {
	let sum = 0;
	if (
		first < 0 ||
		second < 0 ||
		typeof first != "number" ||
		typeof second != "number"
	) {
		return "ERROR";
	} else {
		if (first > second) {
			[second, first] = [first, second]; // swop values without temp value
		}
		for (let i = first; i <= second; i++) {
			sum += i;
		}
	}
	return sum;
};

module.exports = sumAll;
