const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			return true;
		} else {
			return false;
		}

};
leapYears(1996)//true
leapYears(1997)//false
leapYears(34992)//true
leapYears(1900)//false
leapYears(1600)//true
leapYears(700)//false
// Do not edit below this line
module.exports = leapYears;
