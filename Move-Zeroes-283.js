var moveZeroes = function(nums) {
   let  initial=0
    // let zeros=[]
    // let numbers=[]
    // nums.map((e)=>{
    //     e<1?zeros.push(e):numbers.push(e)
    // })
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            temp=nums[i]
            nums[i]=initial[i]
            nums[i]=temp
            initial++
        }
    }
       return nums    
};
let nums = [0,1,0,3,12]
console.log(moveZeroes(nums));