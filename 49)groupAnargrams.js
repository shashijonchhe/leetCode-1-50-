var groupAnagrams = function(strs) {
    var hash = {};
    
    for(var i = 0; i < strs.length; i++) {
        var str = strs[i];
        
        var key = sort(str);
        
        hash[key] = hash[key] || [];
        hash[key].push(str);
    }
    
    var result = [];
    for(i in hash) {
        result.push(hash[i]);
    }
    
    return result;
};


var sort = function(s) {
    var arr = s.split('');
    
    arr.sort((a,b)=> a > b ? 1 : -1);
    return arr.join('');
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))