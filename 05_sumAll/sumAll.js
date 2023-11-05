const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    let sum = 0

    if (num1 < num2){
        for (let i = num1; i <= num2; i++) {
					sum += i;
					// console.log(sum)
				}

    } else {
        for (let i = num2; i <= num1; i++) {
					sum += i;
					// console.log(sum)
				}
    }
    
    return sum;
};
// console.log(sumAll(1, 4));
// console.log(sumAll(1, 4000));
// console.log(sumAll(10, [90, 1]));
console.log(sumAll(123, 1));
// console.log(sumAll(10, "90"));
// Do not edit below this line
module.exports = sumAll;
