//LAB 3 - UNIT TESTING
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumberId(idIn) {
	let result = false
	const pattern = /n\d{8}$/
	result=pattern.test(idIn)
	return result
}


