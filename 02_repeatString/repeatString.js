const repeatString = function(phrase,num) {
    let result = ''
    if(num < 0){
        return('ERROR');
    }
    for(let i = 0; i < num; i++){
        result = result + phrase;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
