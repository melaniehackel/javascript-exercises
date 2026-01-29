const fibonacci = function(num) {
    num = Number(num);
    if (num === 0){
        return 0;
    }
    else if (num < 0){
        return "OOPS";
    }
    let i = 1;
    let j = 1;
    for (let c = 0; c < num - 1; c++){
        let oldJ = j;
        j = i + j;
        i = oldJ;
    }
    return i;

};

// Do not edit below this line
module.exports = fibonacci;

