var generateError = function (message, code) {
    throw {
        message: message,
        code: code,
    };
};
// generateError never produces a value
console.log(generateError("ERROR", 500));
