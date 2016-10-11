/**
 * Created by kaala on 10/11/16.
 */

var grid = initializeGrid(10, 10);
console.log(grid);

grid[5][5] = 5;

console.log(grid);




grid = grid.map(function (arr) {
    return arr.map(function (val) {
        return 1;
    });
});

function initializeGrid(row, col) {
    var tempGrid = [];
    for(var i = 0; i < row; i++) {
        var temp = [];
        for(var j = 0; j < col; j++){
            temp.push(0);
        }
        tempGrid.push(temp);
    }
    return tempGrid;
}




