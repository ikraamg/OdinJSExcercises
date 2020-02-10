const removeFromArray = function(array, ...itemsToRemove) {
	for (i = 0; i < array.length; i++) {
		inner: for (j = 0; j < itemsToRemove.length; j++) {
			if (array[i] == itemsToRemove[j]) {
				array.splice(i, 1);
				i--; //the splice altered the index, shifting it back by 1
				break inner;
			}
		}
	}
	return array;
};

module.exports = removeFromArray;
