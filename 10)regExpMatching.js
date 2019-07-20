var isMatch = function(s, p) {
        var sLen = s.length;
    var pLen = p.length;
    var dp = [];
    
    for(var i = 0; i <= sLen; i++) {
        var tmp = [];
        
        for(var j = 0; j <= pLen; j++) {
            tmp.push(false);
        }
        
        dp.push(tmp);
    }
    
    dp[0][0] = true;
    
    for(i = 0; i <= sLen; i++) {
        for(j = 0; j <= pLen; j++) {
            if(p[j - 1] !== '.' && p[j - 1] !== '*') {
                if(i > 0 && p[j - 1] === s[i - 1] && dp[i - 1][j - 1]) {
                    dp[i][j] = true;
                }
            } else if(p[j - 1] === '.') {
                if(i > 0 && dp[i - 1][j - 1]) {
                    dp[i][j] = true;
                }
            } else if(j > 1) { // '*' cannot be the first element
                if(dp[i][j - 2]) { // 0 occurance
                    dp[i][j] = true;
                } else if(i > 0 && (p[j - 2] === s[i - 1] || p[j - 2] === '.') && dp[i - 1][j]) {
                    
                  // example
                  // xa and xa* 
                  // s[i-1] === a
                  // p[j-2] === a
                  // a === a
                  // so we can now compare x, xa*
                  // and x here is dp[i-1][j]
                    dp[i][j] = true;
                }
            }
        }
    }
    
    return dp[sLen][pLen];
};
