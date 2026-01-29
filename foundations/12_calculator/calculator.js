const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((accu, curr) => {
    return accu + curr;
  }, 0)
	
};

const multiply = function(numArray) {
  return numArray.reduce((accu, curr) => {
    return accu * curr;
  }, 1)

};

const power = function(base, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++){
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
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
