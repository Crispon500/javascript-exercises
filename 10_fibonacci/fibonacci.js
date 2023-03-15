const fibonacci = function(num) {
    let preNum = 1;
    let postNum = 1;
    let temp;
    if(parseInt(num) <= 0){
        return "OOPS";
    } else if(parseInt(num) === NaN){
        return "OOP"
    } else if(parseInt(num) === 1){
        return preNum;
    } else{
        for(let i = 1; i < num; i++){
            temp = preNum + postNum;
            preNum = postNum;
            postNum = temp;
        }
        return preNum;
    }

};

// Do not edit below this line
module.exports = fibonacci;
