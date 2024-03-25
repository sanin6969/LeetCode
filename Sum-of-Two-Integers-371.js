var getSum = function(a, b) {
    if(b==0){
        return a
    }else{
        return getSum(a^b,(a&b)<<1)
    }
};
getSum(a,b)
let  a = 1, b = 2