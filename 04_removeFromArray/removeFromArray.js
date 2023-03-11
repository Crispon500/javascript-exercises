const removeFromArray = function(...args) {
    const arr = args[0];
    args.shift();
    for(let i = 0; i < args.length; i++){
        if(arr.indexOf(args[i]) >= 0){
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
