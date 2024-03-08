var detectCapitalUse = function(word) {
    return word.toUpperCase()==word||word.toLowerCase()==word||(word[0].toUpperCase()==word[0]&&word.substring(1)==word.substring(1).toLowerCase())? true: false
};
let word = "Google"
detectCapitalUse(word)