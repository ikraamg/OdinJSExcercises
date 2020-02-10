const fibonacci = function(value) {
	const num = parseInt(value);
	if (num < 0) return 'OOPS';
	const fibArray = [];
	for (let index = 0; index < num; index += 1) {
		if (index <= 1) {
			fibArray.push(1);
		} else fibArray.push(fibArray[index - 2] + fibArray[index - 1]);
	}

	return fibArray[num - 1];
};

module.exports = fibonacci;
