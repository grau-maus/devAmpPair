const assert = require('assert');
const Calculator = require('../Calculator');

describe("Given a string calculator", () => {

    const calculator = new Calculator();

    // Given the user input is empty when calculating the sum then it should return zero.
    describe("when summing with no input", () => {
        it("should return zero", () => {
            assert.equal(calculator.sum(), 0);
        })
    });

    // Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
    describe("when summing with one number", () => {
        it("should return that one number", () => {
            assert.equal(calculator.sum("3"), 3);
        });
    });

    // Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
    describe("when summing with 2 numbers", () => {
        it("should return the sum of those 2 numbers", () => {
            assert.equal(calculator.sum("2,3"), 5);
        })
    })

    // Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
    describe("when summing an unknown amount of numbers", () => {
        it("should return the sum of all the numbers", () => {
            assert.equal(calculator.sum("1,2,3"), 6);
        });
    });
    
    // Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
    describe("when summing with a new line delimiter with the comma delimiter", () => {
        it("should return the sum of the delimited numbers", () => {
            assert.equal(calculator.sum("1\n2,3"), 6);
        })
    })

    // Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
    describe("when summing with a customized delimiter", () => {
        it("should return the sum of the values in the string", () => {
            assert.equal(calculator.sum("//;\n1;2"), 3);
        });
    });

    // Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
    describe("when summing with a negative number", () => {
        it("should throw an exception", () => {
            assert.throws(() => calculator.sum("1,2,-3"), "negatives not allowed:");
        })
    })
});

// Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
// Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
// Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[*]\n12**3” should return 6)
// Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)