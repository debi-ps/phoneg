module.exports = function* (min, max) {
	while (min <= max) {
		let stringMin = String(min);

		if (stringMin.length < 7) {
			stringMin = '0'.repeat(7 - stringMin.length) + stringMin;
		}

		yield stringMin;

		min++;
	}
};
