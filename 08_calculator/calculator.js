const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numArr) {
  let result = 0;
  for(let i = 0; i < numArr.length; i++){
    result = result + numArr[i];
  }
  return result;
};

const multiply = function(numArr) {
  let result = 1;
  for(let i = 0; i < numArr.length; i++){
    result = result * numArr[i];
  }
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  if(num === 0){
    return 1
  } else{
    return num * factorial(num-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
