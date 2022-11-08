const assert = require('assert');
const parseJSONString = require('../parseJSONString');

describe('parseJSONString', function () {
    const testInput1 = `{"foo": "bar"`;
    const testInput2 = `{"foo": "bar"}`;

    it('should throw an error when passing in a malformed JSON string', function () {
        assert.throws(() => (parseJSONString(testInput1)), 'Please check your input and verify format is in JSON.');
    });

    it('should return an object parsed from a given JSON string', function () {
        assert.deepEqual(parseJSONString(testInput2), { foo: "bar" });
    });
});