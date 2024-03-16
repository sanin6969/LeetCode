var plusOne = function(digits) {
  let b= parseInt(digits.splice(-1))+1
        digits.push(b)
        digits.toString()
        return digits.split(',')
        
};
let digits = [1,2,5,6,10]
console.log(plusOne(digits));