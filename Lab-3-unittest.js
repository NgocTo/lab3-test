//LAB 3 - UNIT TESTING
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumberId(idIn) {
    "use strict";
    let result = false;
    const pattern = /^n\d{8}$/i;
    result = pattern.test(idIn);
    return result;
}
function test__checkHumbrId(num, expected) {
    "use strict";
    let announcedResult;
    // validate humber id
    const result = checkHumberId(num);
    // check if the expected result is the same with result
    if (result === expected) {
        announcedResult = "<span class='success'>==PASSED==</span>";
    } else {
        announcedResult = "<span class='error'>xxFAILEDxx</span>";
    }
    // output message
    let msg = "Value tested: " + num + " Expected result: " + expected + " Result: " + result + " " + announcedResult + "<br/>";
    const dt = document.getElementById("data");
    dt.innerHTML += msg;
}
// test values
test__checkHumbrId("N12345678", true);
test__checkHumbrId("001256331", false);
test__checkHumbrId("n12345678", true);
test__checkHumbrId("001256331", false);
test__checkHumbrId("ABCDEFGHI", false);
test__checkHumbrId("n1234567", false);
test__checkHumbrId("", false);
test__checkHumbrId(12345678, false);
test__checkHumbrId(null, false);
test__checkHumbrId("N123456789", true);