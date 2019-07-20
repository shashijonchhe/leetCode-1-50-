var permute = function(nums) {
    return permuteAux(nums, []);
};

var permuteAux = function(nums, partialNums) {
  if(nums === null || nums.length === 0) {
      return [partialNums];
  }
  var listArrays = [];
  for(var i = 0; i < nums.length; i++) {
      var withoutI = nums.slice(0,i).concat(nums.slice(i + 1, nums.length));
      var partial = partialNums.concat([nums[i]]);
      var sol = permuteAux(withoutI, partial);
      if(sol.legnth !== 0) {
        listArrays = listArrays.concat(sol);
      }
  }
  return listArrays;
};
console.log(permute([1,2,3]))