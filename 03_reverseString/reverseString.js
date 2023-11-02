const reverseString = function(stringVal) {
    stringVal = stringVal.split('').reverse().join('')
    return stringVal
};
console.log(reverseString('hello, AbdulQudus!'))
// Do not edit below this line
module.exports = reverseString;
