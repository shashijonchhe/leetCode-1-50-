var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;
    var maxVal = 0;
    
    while(left<right){
        var contain = (right-left)*Math.min(height[left],height[right]);
        maxVal = Math.max(contain, maxVal);
        
        if(height[left] >= height[right]){
            right--;
        } else {
            left++;
        }
    }
    
    return maxVal;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))