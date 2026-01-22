const removeFromArray = function(array, ...numsToRemove) {
    return array.filter(item => !numsToRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
