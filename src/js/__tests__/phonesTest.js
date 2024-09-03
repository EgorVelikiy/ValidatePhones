import ValidatePhone from '../phones'


test('+7', () => {
	const phone = new ValidatePhone('+7 (950) 863-73-43')
	expect(phone.validate()).toBe('+79508637343')
})

test('8', () => {
	const phone = new ValidatePhone(' 8 (950) 863-73-43')
	expect(phone.validate()).toBe('+79508637343')
})

test('86', () => {
	const phone = new ValidatePhone('+86 000 000 0000')
	expect(phone.validate()).toBe('+860000000000')
})