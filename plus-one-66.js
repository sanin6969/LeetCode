var plusOne = function(digits) {
  return (BigInt(digits.join(''))+1n).toString().split('')
  };
let digits =[1,2,3]
plusOne(digits)