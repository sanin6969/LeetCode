var reverseList = function(head) {
    let r=[]
    if(head.length==0){
        return r
    }else{
        for (let i = 0; i< head.length; i++) {
            for (let j = 0; j < head.length; j++) {
                if(head[i]>=head[j]){
                    r=head[i]
                    head[i]=head[j]
                    head[j]=r
                }      
            }
        }
        return head
    }
};
let head = []
console.log(reverseList(head));