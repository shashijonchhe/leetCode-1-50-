
var permuteUnique = function(nums) {
    return permut(nums.sort(), []);
};

var permut = function(nums, partial) {
    if(nums.length === 0) {
        return [partial];
    }
    var listSol = [];
    for(var i = 0; i < nums.length; i++) {
        var endRepeated = i;
        while(endRepeated < nums.length && nums[i] === nums[endRepeated]) {
            endRepeated++;
        }
        
        var arrayWithoutI = nums.slice(0,i).concat(nums.slice(i + 1, nums.length));
        var partialSol = partial.concat([nums[i]]);
        var sol = permut(arrayWithoutI, partialSol);
        if(sol.length > 0){
            listSol = listSol.concat(sol);
        }
        i = endRepeated - 1;
    }
    return listSol;
};
console.log(permuteUnique([1,1,2]))