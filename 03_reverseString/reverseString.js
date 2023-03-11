const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArr = splitString.reverse();
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
