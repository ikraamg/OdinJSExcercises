const caesar = function(string, shiftby) {
	// split
	const stringArr = string.split('');

	// loop through and add shiftby to the value of letter only to the letters and if the letter is between 65 and 90 it wraps in that loop and if it is between 97 and 122 it wraps around that loop of numbers
	const newArr = stringArr.map((letter) => {
		let letterCode = letter.charCodeAt();
		if (letterCode >= 97 && letterCode <= 122) {
			letterCode += shiftby;
			while (letterCode < 97) {
				letterCode += 26;
			}
			while (letterCode > 122) {
				letterCode -= 26;
			}
		} else if (letterCode >= 65 && letterCode <= 90) {
			letterCode += shiftby;
			while (letterCode < 65) {
				letterCode += 26;
			}
			while (letterCode > 90) {
				letterCode -= 26;
			}
		} else {
			return letter;
		}
		const letterOut = String.fromCharCode(letterCode);
		return letterOut;
	});
	return newArr.join('');
};

console.log(caesar('Mjqqt, Btwqi!', -5));

module.exports = caesar;
