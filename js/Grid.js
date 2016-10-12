/**
 * Created by kaala on 10/12/16.
 */
var Grid = function (rows, cols) {
    var array ;

    this.getArray = function () {
        return array;
    };

    this.setArray = function (arr) {
        array = arr;
    };

    this.init = function () {
        array = initializeGrid(rows, cols);
    };

    var initializeGrid = function(row, col) {
        var tempGrid = [];
        for (var i = 0; i < row; i++) {
            var temp = [];
            for (var j = 0; j < col; j++) {
                temp.push(0);
            }
            tempGrid.push(temp);
        }
        return tempGrid;
    }
};