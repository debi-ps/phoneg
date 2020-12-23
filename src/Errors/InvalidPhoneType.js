class InvalidPhoneType extends Error {
	constructor(type) {
		super(`Invalid type '${type}' provided.`);
	}
}

module.exports = InvalidPhoneType;
