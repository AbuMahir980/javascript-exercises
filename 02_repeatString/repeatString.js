const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let repeatStringVal = ""
    for(i = 0; i < num; i++){
        repeatStringVal += string;
    
    }
    return repeatStringVal
};
console.log(repeatString('hey',-1))

// Do not edit below this line
module.exports = repeatString;
