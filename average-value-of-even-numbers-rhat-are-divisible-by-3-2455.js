var averageValue = function (nums) {
  let even = nums.filter((e) => e % 2 == 0 && e % 3 == 0);
  if (even.length > 0) {
    if (even.length == 1) {
      return even;
    } else {
      let sum = even.reduce((sum, e) => sum + e);
      return Math.floor(sum / even.length);
    }
  } else {
    return 0;
  }
};
let nums = [94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]
averageValue(nums)
