var removeElement = function(A, elem) {
    var i = 0;
    var j = A.length-1;
    
    while(i <= j){
        if(A[i] === elem){
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            j--;
        } else {
            i++;
        }
    }
    
    return i;
};
console.log(removeElement([0,1,2,2,3,0,4,2],2))