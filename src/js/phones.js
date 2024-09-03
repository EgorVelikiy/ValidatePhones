export default class ValidatePhone {
	constructor(phone) {
		this.phone = phone
	}

	validate() {
		let res = this.phone.replace(/[- ()]/g, '')
		if (res[0] == (8)) {
			res = `+7${res.slice(1)}`
		}

		return res
	}
}