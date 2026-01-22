const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    if (firstNum < 0 || secondNum < 0) return "ERROR";
    let smallerNum = Math.min(firstNum, secondNum);
    let biggerNum = Math.max(firstNum, secondNum);
    let total = 0;
    for (let i = smallerNum; i <= biggerNum; i++){
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
