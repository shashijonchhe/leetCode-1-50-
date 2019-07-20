var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left < right) {
        var mid = left + Math.ceil((right - left)/2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (nums[left] < target) {
        return left + 1;
    } else {
        return left;
    }
}
console.log(searchInsert([1,3,5,6],2))