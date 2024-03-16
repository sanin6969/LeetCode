var moveZeroes = function(nums) {
   let  initial=0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            temp=nums[initial]
            nums[initial]=nums[i]
            nums[i]=temp
            initial++
        }
    }
       return nums    
};
let nums = [0,1,0,3,12]
moveZeroes(nums)