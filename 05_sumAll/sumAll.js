const sumAll = function(a, b) {
    //check for the bigger number
    if(typeof a !== "number" || typeof b !== "number" ||
        a < 0 || b < 0){
        return "ERROR";
    }

    let big = 0;
    let small = 0;
    if(a > b){
        big = a;
        small = b;
    } 
    else if(a < b){
        big = b;
        small = a;
    }
    else{
        return a;
    }
    result = 0;
    for(let i = small; i <= big; i++){
        result += i;
    }
    console.log(result);
    return result;
    
};

// Do not edit below this line
module.exports = sumAll;
