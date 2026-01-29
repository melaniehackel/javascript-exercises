const palindromes = function (word) {
    word = word.toLowerCase();
    let wordWoPunctuation = "";
    for (let i = 0; i < word.length; i++){
        if (!(word[i] == " " || word[i] == "." || word[i] == "," || word[i] == ";" || word[i] == "?" || word[i] == "!")){
            wordWoPunctuation += word[i];
        }
    }
    return (wordWoPunctuation === wordWoPunctuation.split('').reverse().join(''));

};

// Do not edit below this line
module.exports = palindromes;
