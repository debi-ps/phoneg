#!/usr/bin/env node

const fs = require('fs');
const config = require('config');
const PhoneConstructor = require('./src/Classes/PhoneConstructor');
const generator = require('./src/generator');
const { setup, typesValidate } = require('./src/CliSetup');

const options = setup();

const selectedTypes = typesValidate(options.types);

const STORE_FILE = options.file;

const phoneConstructor = new PhoneConstructor(options.country);

for (number of generator(
	options.min || config.get('numbers.min'),
	options.max || config.get('numbers.max')
)) {
	for (phone of phoneConstructor.phonesGen(number)) {
		if (selectedTypes.get('p')) {
			writePhone('0' + phone);
		}
		if (selectedTypes.get('dp')) {
			writePhone(phoneConstructor.defPhone(phone));
		}
		if (selectedTypes.get('fp')) {
			writePhone(phoneConstructor.fullPhone(phone));
		}
		if (selectedTypes.get('fsp')) {
			writePhone(phoneConstructor.fullSepPhone(phone));
		}
		if (selectedTypes.get('fsap')) {
			writePhone(phoneConstructor.fullSepAdditionPhone(phone));
		}
		if (selectedTypes.get('fdsp')) {
			writePhone(phoneConstructor.fullDefSepPhone(phone));
		}
		if (selectedTypes.get('fdsap')) {
			writePhone(phoneConstructor.fullDefSepAdditionPhone(phone));
		}
	}
}

function writePhone(phone) {
	return fs.writeFileSync(STORE_FILE, phone + '\n', {
		flag: 'a',
	});
}
