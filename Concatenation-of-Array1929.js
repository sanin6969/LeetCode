var getConcatenation = function(nums) {
    let result= [...nums,nums];
   return result.flat()
};

let nums = [1,2,1]
console.log(getConcatenation(nums));