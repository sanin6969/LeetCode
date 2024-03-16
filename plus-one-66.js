var plusOne = function(digits) {
  let b= (parseInt(digits.splice(-1))+1).toString().split('')
  digits.push(b)
  return digits.flat()  
};
let digits =[9,9]
console.log(plusOne(digits));