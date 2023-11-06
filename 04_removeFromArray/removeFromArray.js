const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item)); 
};
console.log(removeFromArray([1, 2, 3, 4], 3));//[1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2));//[1, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));//[1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2));//[1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));//[]
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));//[2, "ho"]
console.log(removeFromArray([1, 2, 3], "1", 3));//[1, 2]
// Do not edit below this line
module.exports = removeFromArray;
