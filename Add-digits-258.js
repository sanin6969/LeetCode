var addDigits = function (num) {
    if(num==0){
        return 0
    }else{
        return 1+(num-1)%9
    }
};
let num = 38;
console.log(addDigits(num));
