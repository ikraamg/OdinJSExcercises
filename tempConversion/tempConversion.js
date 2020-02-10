const ctof = function(far) {
	let degrees = (far * 9) / 5 + 32;
	return Math.round(degrees * 10) / 10;
};

const ftoc = function(deg) {
	let faren = ((deg - 32) * 5) / 9;
	return Math.round(faren * 10) / 10;
};

module.exports = {
	ftoc,
	ctof
};
