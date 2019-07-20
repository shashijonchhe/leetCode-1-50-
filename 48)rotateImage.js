var rotate = function(matrix) {
    rotateColumns(matrix);
    rotateEachDiagonal(matrix);
};

var rotateColumns = function(matrix) {
    for(var j = 0; j < matrix.length; j++) {
        var low = 0;
        var ceil = matrix.length -1;
        while(low < ceil) {
            swap(matrix, low, j, ceil, j);
            low++;
            ceil--;
        }
    }
};

var rotateEachDiagonal = function(matrix){
    for(var i = 0; i < matrix.length; i++) {
        for(var j = i; j < matrix.length; j++) {
            swap(matrix, i, j, j, i);
        }
    }
};

var swap = function(matrix, i1, j1, i2, j2) {
    var aux = matrix[i1][j1];
    matrix[i1][j1] = matrix[i2][j2];
    matrix[i2][j2] = aux;
};
