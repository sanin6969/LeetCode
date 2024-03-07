var subtractProductAndSum = function (n) {
  let x = n.toString().split("");
  let r = x.reduce((sum, e) => Number(sum * e));
  let y = x.map((i) => Number(i));
  let z = y.reduce((sum, e) => sum + e);
  return r - z;
};
n = 234;
subtractProductAndSum(n);
