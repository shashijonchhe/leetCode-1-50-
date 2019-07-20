var matchChar = function(c, p){
    return (p === '?' || p === c);
}
var isMatch = function(s, p) {
    if(s === null || p === null)   {
        return false;
    }
    
    var idxS = 0;
    var idxP = 0;
    
    var lenS = s.length;
    var lenP = p.length;
    
    var back = false;
    var preS = 0;
    var preP = 0;
    
    while(idxS < lenS) {
        var charS = s[idxS];
        var charP = p[idxP];

        if(idxP < lenP && matchChar(s[idxS], p[idxP])) {
            idxP++;
            idxS++;
        } else if(idxP < lenP && p[idxP] === '*') {
            while(idxP < lenP && p[idxP] === '*') {
                idxP++;
            }
            
            back = true;
            preS = idxS;
            preP = idxP;
        } else if(back) {
        
            idxS = ++preS;
            idxP = preP;
        
        } else {
            return false;
        }
    }
    
    while(idxP < lenP && p[idxP] === '*') {
        idxP++;
    }
    
    if(idxS === lenS && idxP === lenP) {
        return true;
    }
    
    return false;
};

