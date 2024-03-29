var myPow = function(x, n) {
    if(n < 0)   {
        return 1.0/myPow(x, -n);
    }
    if(n === 0) {
        return 1.0;
    }
    if(n === 1) {
        return x;
    }
    
    var sub = myPow(x, parseInt(n/2));
    return sub*sub*myPow(x, n%2);
};
console.log(myPow( 2.00000, 10))