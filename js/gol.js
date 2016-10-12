/**
 * Created by kaala on 10/12/16.
 */

function scan(gridIn) {
    var totalRows = gridIn.length;
    var totalCols = gridIn[0].length;

    var tempGrid = [];
    for (var row = 0; row < totalRows; row++) {
        var tempRow = [];
        for (var col = 0; col < totalCols; col++) {
            var result = deadAliveOrReproduce(gridIn, row, col);
            if (result == -1) tempRow.push(0);
            else if (result == 1) tempRow.push(1);
            else tempRow.push(gridIn[row][col]);
        }
        tempGrid.push(tempRow);
    }
    return tempGrid;
}

function deadAliveOrReproduce(grid, row, col) {
    var neighbours = getNeighbours(grid, row, col);
    var aliveNeighbours = neighbours.filter(function (val) {
        return val == 1;
    });

    //dead
    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) return -1;

    //reproduce
    if (aliveNeighbours.length == 3 && grid[row][col] == 0) return 1;

    //alive
    return 0;
}

function getNeighbours(grid, row, col) {
    var neighbours = [];
    for (var nRow = row - 1; nRow <= row + 1; nRow++) {
        for (var nCol = col - 1; nCol <= col + 1; nCol++) {
            if (nRow >= 0 && nRow < grid.length
                && nCol >= 0 && nCol < grid[0].length
                && !(nRow == row && nCol == col)) {
                neighbours.push(grid[nRow][nCol]);
            }
        }
    }
    return neighbours;
}