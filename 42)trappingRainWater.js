var trap = function(height) {
    
    var leftMax = [];
    var rightMax=  [];
    var water = 0;

    for(var i = 1; i < height.length; i++) {
        leftMax[i] = leftMax[i] || 0;
        leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i - 1]);
    }
    
    for(i = height.length - 2; i >= 0; i--) {
        rightMax[i] = rightMax[i] || 0;
        rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i + 1]);
        
        var minHeight = Math.min(leftMax[i], rightMax[i]);
        var waterBottom = height[i];
        if(minHeight > waterBottom) {
            water += (minHeight - waterBottom);    
        }
    }
    
    return water;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))