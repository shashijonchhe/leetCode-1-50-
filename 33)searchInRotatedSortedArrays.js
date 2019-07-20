var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    
    while(left <= right) {
        var mid = parseInt((left + right)/2);
        if(nums[mid] === target) {
            return mid;
        }
        
        if(nums[mid] >= nums[left]) { 
            
            if(nums[left] <= target && target < nums[mid]) {
                
                right = mid - 1;
            } else {
   
                left = mid + 1;
            }
        } else { 
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                
                right = mid - 1;
            }
        }
    }
    
    return -1;
};
console.log(search([4,5,6,7,0,1,2],0))