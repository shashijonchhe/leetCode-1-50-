var myAtoi = function(str) {
    var num = 0;
    var baseCharCode = '0'.charCodeAt(0);
    var sign = 1;
    
    str = str.trim();
    
    if(str[0] === '+' || str[0] === '-') {
        
        if(str[0] === '-') {
            sign = -1;
        }
        
        str = str.substring(1);
    }
    
    for(var i = 0; i < str.length; i++) {
        var c = str[i];
        var charCode = c.charCodeAt(0) - baseCharCode;
        
        if(0 <= charCode && charCode <= 9) {
            num *= 10;
            num += charCode;
        } else {
            break;
        }
    }
    
    var maxInt = Math.pow(2,31) - 1;
    var minNegInt = -Math.pow(2,31);
    
    num = sign*num;
    
    if(0 < num && maxInt < num) {
        return maxInt;
    }
    
    if(num < 0 && num < minNegInt) {
        return minNegInt;
    }
    
    return num;
};