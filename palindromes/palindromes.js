const palindromes = function(text) {
	const textLowerCase = text.toLowerCase();
	const textArr = textLowerCase.split('');

	const letterArr = textArr.filter(function(letter) {
		if (letter <= 'z' && letter.charCodeAt() >= 97) {
			return true;
		}
		return false;
	});
	const reverseArr = letterArr.map((x) => x);
	reverseString = reverseArr.reverse().join('');
	string = letterArr.join('');
	console.table(letterArr);
	console.table(reverseArr);

	if (string === reverseString) {
		return true;
	}
	return false;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

module.exports = palindromes;
