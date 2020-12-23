const yargs = require('yargs');
const config = require('config');
const InvalidPhoneType = require('./Errors/InvalidPhoneType');

module.exports.setup = function () {
	return yargs
		.usage('Usage: -f <file> -n <min> -m <max> -c|-C <code>')
		.option('f', {
			alias: 'file',
			describe: 'File where would be save the program output.',
			type: 'string',
			demandOption: true,
		})
		.option('n', {
			alias: 'min',
			describe: 'Define min value for number generator. Default value is `0`.',
			type: 'number',
		})
		.option('m', {
			alias: 'max',
			describe:
				'Define max value for number generator. Default value \n is `9 999 999`.',
			type: 'number',
		})
		.option('C', {
			alias: 'country',
			describe:
				"Define country for which phone codes would be used for phone generating. Value must match available countries list for current application's version  Do not use when `--codes` flag is set.",
			type: 'string',
		})
		.option('c', {
			alias: 'codes',
			describe:
				'Provide custom set of codes with which would be generated phone numbers. Provide first code for country and others for regions. Note: this flag  will be ignored if flag `--country` is set.',
			type: 'array',
		})
		.option('t', {
			alias: 'types',
			describe:
				'Define set of phone types that you want to include to the wordlist. Available list you can find in the documentation. [`p`] is default value',
			type: 'array',
		}).argv;
};

module.exports.typesValidate = function (types) {
	types = types || [];

	const validTypes = config.get('phoneTypes.available');
	const map = new Map();

	if (types && types.length === 0) {
		config.get('phoneTypes.default').forEach((type) => {
			map.set(type, true);
		});

		return map;
	}

	types.forEach((type) => {
		if (validTypes.indexOf(type) === -1) {
			throw new InvalidPhoneType(type);
		}

		map.set(type, true);
	});

	return map;
};
