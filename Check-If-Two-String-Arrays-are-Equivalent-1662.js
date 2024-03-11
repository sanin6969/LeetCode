var arrayStringsAreEqual = function(word1, word2) {
    let join1=word1.join('')
    let join2=word2.join('')
    return join1==join2?true:false
};
let word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
console.log(arrayStringsAreEqual(word1,word2))