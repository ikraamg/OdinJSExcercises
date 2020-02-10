const findTheOldest = function(people) {
	let oldestPersonPosition = 0;
	let oldestAge = 0;
	for (let i = 0; i < people.length; i += 1) {
		let endDate = new Date();
		if (!('yearOfDeath' in people[i])) {
			// console.log('TCL: findTheOldest -> people[i]', people[i]);
			endDate = endDate.getFullYear();
		} else {
			endDate = people[i].yearOfDeath;
		}

		if (endDate - people[i].yearOfBirth > oldestAge) {
			oldestPersonPosition = i;
			oldestAge = endDate - people[i].yearOfBirth;
		}
	}
	return people[oldestPersonPosition];
};

findTheOldest([
	{
		name: 'Carly',
		yearOfBirth: 1066
	},
	{
		name: 'Ray',
		yearOfBirth: 1962,
		yearOfDeath: 2011
	},
	{
		name: 'Jane',
		yearOfBirth: 1912,
		yearOfDeath: 1941
	}
]);

module.exports = findTheOldest;
