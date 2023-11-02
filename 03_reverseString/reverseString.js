const reverseString = function(stringVal) {
    stringVal = stringVal.split('').reverse().join('')
    return stringVal
};
console.log(reverseString(' '))
// Do not edit below this line
module.exports = reverseString;
