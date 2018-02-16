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

function test__checkHumbrId (num, expected) {
    // "use strict";
    var announcedResult;
    // validate humber id
    var result = checkHumberId(num);
    
    // check if the expected result is the same with result
    if (result === expected) {
        announcedResult = "==PASSED==";
    } else {
        announcedResult = "xxFAILEDxx";
    }
    
    // output message
    var msg = "Value tested: " + num + " Expected result: " + expected + " " + announcedResult + "<br/>";
    var dt = document.getElementById("data");
    dt.innerHTML += msg;
}
// test values
test__checkHumbrId ("N12345678", true);
test__checkHumbrId ("001256331", false);
test__checkHumbrId ("n12345678", true);
test__checkHumbrId ("001256331", false);
test__checkHumbrId ("ABCDEFGHI", false);
test__checkHumbrId ("n1234567", false);

