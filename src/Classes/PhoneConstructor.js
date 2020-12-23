const fs = require('fs');

class PhoneConstructor {
	constructor(countryCode) {
		this.country = countryCode;

		const countryData = JSON.parse(
			fs.readFileSync('config/codes/' + countryCode + '.json')
		);

		this.phone = {};
		this.phone.countryCode = countryData.countryCode;
		this.phone.addition = countryData.codeAddition;
		this.phone.codes = countryData.codes;
	}

	fullPhone(phone) {
		return this.phone.countryCode + phone;
	}

	fullAdditionPhone(phone) {
		return this.phone.addition + this.phone.countryCode + phone;
	}

	fullSepPhone(phone, del = ' ') {
		phone = this.phone.countryCode + phone;

		const phoneParts = [
			phone.slice(0, 2),
			phone.slice(2, 5),
			phone.slice(5, 8),
			phone.slice(8, 10),
			phone.slice(10, 12),
		];

		return phoneParts.join(del);
	}

	fullSepAdditionPhone(phone, del = ' ') {
		phone = this.phone.countryCode + phone;

		const phoneParts = [
			this.phone.addition + phone.slice(0, 2),
			phone.slice(2, 5),
			phone.slice(5, 8),
			phone.slice(8, 10),
			phone.slice(10, 12),
		];

		return phoneParts.join(del);
	}

	defPhone(phone) {
		phone = this.phone.countryCode + phone;

		const phoneParts = [
			phone.slice(2, 5),
			phone.slice(5, 8),
			phone.slice(8, 10),
			phone.slice(10, 12),
		];

		return phoneParts.join('-');
	}

	fullDefSepPhone(phone) {
		phone = this.phone.countryCode + phone;

		const phoneParts = [
			phone.slice(2, 5),
			phone.slice(5, 8),
			phone.slice(8, 10),
			phone.slice(10, 12),
		];

		return phone.slice(0, 2) + ' ' + phoneParts.join('-');
	}

	fullDefSepAdditionPhone(phone) {
		phone = this.phone.countryCode + phone;

		const phoneParts = [
			phone.slice(2, 5),
			phone.slice(5, 8),
			phone.slice(8, 10),
			phone.slice(10, 12),
		];

		return this.phone.addition + phone.slice(0, 2) + ' ' + phoneParts.join('-');
	}

	phonesGen = function* (content) {
		for (let code of this.phone.codes) {
			let phone = code + content;

			yield phone;
		}
	};
}

module.exports = PhoneConstructor;
