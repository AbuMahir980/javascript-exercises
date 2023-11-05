const removeFromArray = function(arr, ...args) {
    return arr.filter(v => !args.includes(v)); 
};

// Do not edit below this line
module.exports = removeFromArray;
