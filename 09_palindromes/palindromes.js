const palindromes = function (str) {
    let temp = str.toLowerCase().replace(/[^\w\s\']|_/g,"")
                  .replace(/\s+/g, "");
    temp.split("").join("");
    return temp.split("").reverse().join("")== temp;
};

// Do not edit below this line
module.exports = palindromes;
