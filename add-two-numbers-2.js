var addTwoNumbers = function (l1, l2) {
  r1 = l1.join("")
  r2 = l2.join("")
  console.log(r1);
  sum = parseInt(r1) + parseInt(r2);
  result = sum.toString().split("");
  let reversedArray = [];
  for (let i = result.length - 1; i >= 0; i--) {
     reversedArray.push(result[i]);
  }
  return reversedArray
};
let l1 = [2,4,3], l2 = [5,6,4]

console.log(addTwoNumbers(l1, l2));
