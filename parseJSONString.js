module.exports = function (JSONStr) {
    try {
        return JSON.parse(JSONStr);
    } catch (err) {
        throw new Error(`Please check your input and verify format is in JSON. (${err})`);
    }
};